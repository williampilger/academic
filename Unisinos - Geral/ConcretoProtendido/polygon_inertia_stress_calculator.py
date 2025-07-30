# ===============================================================================
# Script Name : polygon_inertia_stress_calculator.py
# Author      : williampilger - github.com/wiliampilger
# Thanks      : thanks ChatGPT 4o for the start of this script
# Created     : 03/09/2024
# Version     : 1.0
# Description : This script calculates inertia and stresses for a given polygon 
#               using points coordinates provided by the user, along with a normal 
#               force (N) and a moment (M).
#
# Usage       : python polygon_inertia_stress_calculator.py --help
#               to see the usage and usage example
#
# Requirements: 
#     - Python 3.x
#     - Shapely library: pip install shapely
#
# Notes       : 
#     - Ensure that the points form a closed polygon by providing the coordinates 
#       correctly.
#     - Calculations are based on the input coordinates and the geometric properties 
#       of the generated polygon.
#     - Use the --help flag for more information on how to use the script.
#
# License     : MIT License
#
# ===============================================================================

import sys
import os
import platform
import argparse
from shapely.geometry import Polygon

def calculate_inertia_x(points):
    n = len(points)
    inertia_x = 0
    for i in range(n):
        x0, y0 = points[i]
        x1, y1 = points[(i + 1) % n]  # Connect the last point to the first

        inertia_x += (y0**2 + y0 * y1 + y1**2) * (x0 * y1 - x1 * y0)

    inertia_x = abs(inertia_x) / 12
    return inertia_x

def solve_and_print(points, N, M):
    print(" SOLVE FOR POLYGON: ")
    for point in points:
        print(f"X: {point[0]}, Y: {point[1]}")
    print(f"\n\n M:{M} kN.m \n N:{N} kN\n\n")

    polygon = Polygon(points)
    area = polygon.area
    centroid = polygon.centroid

    print(f"\n Area {area} cm² \n CgX: {centroid.x} cm \n CgY: {centroid.y} cm \n")

    min_x, min_y, max_x, max_y = polygon.bounds
    width = max_x - min_x
    height = max_y - min_y
    Ys = height - centroid.y
    Yi = centroid.y

    print(f"\n Ys {Ys} cm \n Yi: {Yi} cm \n")

    points = [(x - centroid.x, y - centroid.y) for x, y in points]  # Move to CG
    I = calculate_inertia_x(points)

    print(f"\n I {I} cm^4 \n")

    Ws = I / Ys
    Wi = I / Yi

    Tn = -N / area
    Tms = -(M * 100) / Ws
    Tmi = (M * 100) / Wi

    print(f"\n Tn {Tn} kN/cm² \n Tms {Tms} kN/cm² \n Tmi {Tmi} kN/cm² \n")

    Tfs = Tn + Tms
    Tfi = Tn + Tmi

    print(f"\n Tfs {Tfs} kN/cm² \n Tfi {Tfi} kN/cm² \n")

def main():
    script_path = sys.argv[0]
    script_name = os.path.basename(script_path)
    script_engine = 'python' if platform.system()=='windows' else 'python3'

    parser = argparse.ArgumentParser(
        description="Calculate inertia and stresses for a polygon.",
        epilog="Example:\n"
               f"{script_engine} {script_name} --points \"0,0 45,0 45,10 31,15 31,45 41,50 41,65 4,65 4,50 14,45 14,15 0,10\" --N 945 --M 320",
        formatter_class=argparse.RawTextHelpFormatter
    )
    parser.add_argument("--points", type=str, required=True, help="List of points as pairs of coordinates, e.g., '0,0 45,0 45,10 ...'")
    parser.add_argument("--N", type=float, required=True, help="Normal force in kN.")
    parser.add_argument("--M", type=float, required=True, help="Moment in kN.m.")

    args = parser.parse_args()

    points = [tuple(map(float, p.split(','))) for p in args.points.split()] # Parse points from string input

    solve_and_print(points, args.N, args.M)

if __name__ == "__main__":
    main()
