/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */


export type role_type = 'Generic Employee' | 'Administrator' | 'Software Developper' | 'Secretary' | 'Marketer' | 'Owner' | 'Director'

export type employee_type = {
    id: number, 
    fullname: string,
    email: string,
    cpf: string,
    phone:string,
    passwd?: string,
    role: role_type,
    isAdm: boolean,
    timestamps?: number[][]
}

export type session_type = {
    SSID: string,
    employee: employee_type
}