const LOG_CALCS: boolean = true;

/**
 * Calculate the Normal Force
 * @param normalForce Normal Force, em kN
 * @param area Área, in m²
 * @returns Normal Tension, in kN/m².
 */
export function Tn(normalForce: number, area: number): number {
    const tension = normalForce / area;
    resPrint('T', 'N/A', `${normalForce} / ${area}`, `${tension}kN/m²`, 'Tensão devida à força normal');
    return tension;
}

/**
 * Calculate the Flexion Tension
 * @param moment Moment, in kN.m
 * @param W Modulus of Section, in cm³
 * @returns Flexion Tension, in kN/m².
 */
export function Tm(moment: number, W: number): number {
    const tension = moment / W;
    resPrint('T', 'M/W', `${moment} / ${W}`, `${tension}kN/m²`, 'Tensão devida ao momento fletor');
    return tension;
}

/**
 * Calculate the Inertia for a rectangular section
 * @param b Base, in cm
 * @param h Altura, in cm
 * @returns Inertia, in cm⁴
 */
export function I_rectangular(b: number, h: number): number {
    const inertia = (b * h ** 2) / 12;
    resPrint('I', '(b*h²)/12', `(${b}*${h}²) / 12`, `${inertia}cm⁴`, 'Inércia (para seção retangular)');
    return inertia;
}

/**
 * Calculate the W (Modulus of Section) for a section
 * @param inertia Inércia, em cm⁴
 * @param y Distance from the beam centroide to the extreme fiber, in cm
 * @returns 
 */
export function W(inertia: number, y: number): number {
    const W = inertia / y;
    resPrint('W', 'I/y', `${inertia} / ${y}`, `${W}cm³`, 'Módulo de resistência à flexão');
    return W;
}


export function resPrint(varName: string, calcSample: string, calc: string, result: string, explain: string): void {
    if (LOG_CALCS) {
        console.log(
            `\x1b[1;34m${varName}\x1b[0m = \x1b[1;32m${calcSample}\x1b[0m = \x1b[1;31m${calc}\x1b[0m = \x1b[1;36m${result}\x1b[0m -> \x1b[1;33m${explain}\x1b[0m`
        );
    }
}
