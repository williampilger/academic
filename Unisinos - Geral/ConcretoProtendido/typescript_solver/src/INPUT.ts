export default {
    slab : {
        dimensions_cm:{
            w: 790 + 60 * 2,
            l: 1115
        },
        ownWeight_kNpm2: 4.8,
        permanentLoad_kNpm2: 1.5,
        accidentalLoad_kNpm2: 6
    },
    beam: {
        dimensions_cm:{
            w: 40,
            h: 70,
            l: 1115
        },
        concrete:{
            fck: 35
        },
        prestressing:{
            diamether: 12,
            position: 4.5 + 6 + 12/2,//cobrimento + stirrup + cable/2
        }
    },
    ambient:{
        agressiveness: 3
    }
}