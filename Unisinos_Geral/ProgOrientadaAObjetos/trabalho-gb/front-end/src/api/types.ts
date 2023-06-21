/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */




export type employee_type = {
    id: number, 
    fullname: string,
    email: string,
    cpf: string,
    phone:string,
    role: 'Generic Employee' | 'Administrator' | 'Software Developper' | 'Secretary' | 'Marketer' | 'Owner' | 'Director',
    isAdm: boolean
}

export type session_type = {
    SSID: string,
    employee: employee_type
}