/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022.02 - Bom Princípio - RS
 * ♪ - / -
 */

/**
 * Get Object values by key
 * @param {object} obj 
 * @param {string|number} key 
 * @returns 
 */
export const getObjValueByKey = (obj, key) => {
    if(key in obj) return obj[key];
    else return false;
}