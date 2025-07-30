// ===============================================================================
// Script Name : polygonInertiaStressCalculator.ts
// Author      : williampilger - github.com/wiliampilger
// Thanks      : thanks ChatGPT 4o for the start of this script
// Created     : 03/09/2024
// Version     : 1.0
// Description : This script calculates inertia and stresses for a given polygon 
//               using points coordinates provided by the user, along with a normal 
//               force (N) and a moment (M).
//
// Usage       : node polygonInertiaStressCalculator.js --help
//               to see the usage and usage example
//
// Requirements: 
//     - Node.js
//     - commander library: npm install commander
//     - mathjs library: npm install mathjs
//
// Notes       : 
//     - Ensure that the points form a closed polygon by providing the coordinates 
//       correctly.
//     - Calculations are based on the input coordinates and the geometric properties 
//       of the generated polygon.
//     - Use the --help flag for more information on how to use the script.
//
// License     : MIT License
//
// ===============================================================================

import { Command } from 'commander';

// Function to calculate the inertia in the x direction
function calculateInertiaX(points: Array<[number, number]>): number {
    const n = points.length;
    let inertiaX = 0;

    for (let i = 0; i < n; i++) {
        const [x0, y0] = points[i];
        const [x1, y1] = points[(i + 1) % n];  // Connect the last point to the first

        inertiaX += (y0 ** 2 + y0 * y1 + y1 ** 2) * (x0 * y1 - x1 * y0);
    }

    inertiaX = Math.abs(inertiaX) / 12;
    return inertiaX;
}

// Function to calculate the centroid of a polygon
function calculateCentroid(points: Array<[number, number]>): [number, number] {
    let xSum = 0;
    let ySum = 0;
    let area = 0;

    for (let i = 0; i < points.length; i++) {
        const [x0, y0] = points[i];
        const [x1, y1] = points[(i + 1) % points.length];
        const a = x0 * y1 - x1 * y0;
        area += a;
        xSum += (x0 + x1) * a;
        ySum += (y0 + y1) * a;
    }

    area = area / 2;
    const cx = xSum / (6 * area);
    const cy = ySum / (6 * area);

    return [cx, cy];
}

// Function to calculate the area of a polygon
function calculateArea(points: Array<[number, number]>): number {
    let area = 0;
    for (let i = 0; i < points.length; i++) {
        const [x0, y0] = points[i];
        const [x1, y1] = points[(i + 1) % points.length];
        area += (x0 * y1 - x1 * y0);
    }
    return Math.abs(area / 2);
}

// Function to calculate the stresses and inertia and print them
function solveAndPrint(points: Array<[number, number]>, N: number, M: number): void {
    console.log(" SOLVE FOR POLYGON: ");
    points.forEach(point => console.log(`X: ${point[0]}, Y: ${point[1]}`));
    console.log(`\n\n M:${M} kN.m \n N:${N} kN\n\n`);

    const area = calculateArea(points);
    const [cgX, cgY] = calculateCentroid(points);

    console.log(`\n Area ${area} cm² \n CgX: ${cgX} cm \n CgY: ${cgY} cm \n`);

    // Bounding box
    const minX = Math.min(...points.map(p => p[0]));
    const minY = Math.min(...points.map(p => p[1]));
    const maxX = Math.max(...points.map(p => p[0]));
    const maxY = Math.max(...points.map(p => p[1]));
    const width = maxX - minX;
    const height = maxY - minY;
    const Ys = height - cgY;
    const Yi = cgY;

    console.log(`\n Ys ${Ys} cm \n Yi: ${Yi} cm \n`);

    const shiftedPoints = points.map(([x, y]) => [x - cgX, y - cgY] as [number, number]);  // Move to CG
    const I = calculateInertiaX(shiftedPoints);

    console.log(`\n I ${I} cm^4 \n`);

    const Ws = I / Ys;
    const Wi = I / Yi;

    const Tn = -N / area;
    const Tms = -(M * 100) / Ws;
    const Tmi = (M * 100) / Wi;

    console.log(`\n Tn ${Tn} kN/cm² \n Tms ${Tms} kN/cm² \n Tmi ${Tmi} kN/cm² \n`);

    const Tfs = Tn + Tms;
    const Tfi = Tn + Tmi;

    console.log(`\n Tfs ${Tfs} kN/cm² \n Tfi {Tfi} kN/cm² \n`);
}

// Main function to parse arguments and call solveAndPrint
function main(): void {
    const program = new Command();
    program
        .requiredOption('--points <points>', 'List of points as pairs of coordinates, e.g., "0,0 45,0 45,10 ..."')
        .requiredOption('--N <N>', 'Normal force in kN.', parseFloat)
        .requiredOption('--M <M>', 'Moment in kN.m.', parseFloat);

    program.parse(process.argv);
    const options = program.opts();

    const points: Array<[number, number]> = options.points.split(' ').map((p: string) => {
        const [x, y] = p.split(',').map(parseFloat);
        return [x, y];
    });

    solveAndPrint(points, options.N, options.M);
}

main();
