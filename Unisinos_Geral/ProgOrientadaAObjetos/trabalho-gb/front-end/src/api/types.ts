/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */




export type employer_type = {
    id: number, 
    fullname: string,
    email: string,
    cpf: string,
    phone:string,
    role: 'Generic Employer' | 'Administrator' | 'Software Developper' | 'Secretary' | 'Marketer' | 'Owner' | 'Director'
}

export type session_type = {
    SSID: string,
    employer: employer_type
}