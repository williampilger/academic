import CONSTS from './CONSTANTS';
import input from './INPUT';
import * as ps from './ProtentionSolver';

const slab_l_m: number = input.slab.dimensions_cm.l / 100;
const slab_w_m: number = input.slab.dimensions_cm.w / 100;
const slabArea_m2: number = slab_w_m * slab_l_m;

console.log(`
    Área da laje: ${slabArea_m2} m²
    Peso próprio da laje: ${input.slab.ownWeight_kNpm2} kN/m²
    Carga permanente da laje: ${input.slab.permanentLoad_kNpm2} kN/m²
    Sobrecarga acidental da laje: ${input.slab.accidentalLoad_kNpm2} kN/m²
`);

const slabSelfWeight_kN: number = input.slab.ownWeight_kNpm2 * slabArea_m2;
const slabPermanentLoad_kN: number = input.slab.permanentLoad_kNpm2 * slabArea_m2;
const slabAccidentalLoad_kN: number = input.slab.accidentalLoad_kNpm2 * slabArea_m2;

const beam_l_m: number = input.beam.dimensions_cm.l / 100;
const beam_w_m: number = input.beam.dimensions_cm.w / 100;
const beam_h_m: number = input.beam.dimensions_cm.h / 100;

const beamSelfWeight_kN: number = (beam_w_m * beam_h_m * beam_l_m) * CONSTS.CONCRETE_SPECIFIC_WEIGHT;
const beamPermanentLoad_kN: number = ((slabPermanentLoad_kN + slabSelfWeight_kN) / slab_l_m / 2) + (beamSelfWeight_kN / slab_l_m);
const beamAccidentalLoad_kN: number = slabAccidentalLoad_kN / slab_l_m / 2;

console.log(`
Cargas na Viga:
    - Cargas Permanentes:
        Peso próprio da laje: ${slabSelfWeight_kN} kN / ${slab_l_m}m / 2
      + Peso próprio da viga: ${beamSelfWeight_kN} kN  / ${slab_l_m}m / 2
      + Carga permanente da laje: ${slabPermanentLoad_kN} kN  / ${slab_l_m}m / 2
      ----------------------------------------------------------------------------
            TOTAL: ${beamPermanentLoad_kN} kN/m

    - Sobrecarga Acidental:
        Sobrecarga acidental da laje: ${slabAccidentalLoad_kN} kN / ${slab_l_m}m / 2
      ----------------------------------------------------------------------------
            TOTAL: ${beamAccidentalLoad_kN} kN/m
`);


const Tn: number = ps.Tn((beamSelfWeight_kN + beamPermanentLoad_kN + beamAccidentalLoad_kN) * slabArea_m2, slabArea_m2);
const I: number = ps.I_rectangular(beam_w_m, beam_h_m);
const Ws: number = ps.W(I, beam_h_m / 2);
const Wi: number = ps.W(I, beam_h_m / 2);

