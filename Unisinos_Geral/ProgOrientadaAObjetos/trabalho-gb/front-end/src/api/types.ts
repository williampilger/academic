/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */




export type user_type = {
    id: number, 
    fullname: string,
    email: string,
    cpf: string,
    role: ''
}

export type session_type = {
    id: number,
    user: {
        id: number,
        fullname: string
    },
    ip: string,
    browser: string,
    os: string,
    licenses:{
        id: number,
        sessionID: number,
        purchaseID: number,
        levelID: number,
        productID: number,
        level: number
    }[]
}