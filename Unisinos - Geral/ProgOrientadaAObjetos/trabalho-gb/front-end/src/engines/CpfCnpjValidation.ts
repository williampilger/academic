/*
    Adaptado de https://www.todoespacoonline.com/w/2014/08/validar-cnpj-com-php/
    By: William Pilger -> Authenty AE.
 */



export function getType_cpf_cnpj ( valor: string ): string {

    valor = valor.toString();
    valor = valor.replace(/[^0-9]/g, '');

    switch(valor.length){
        case 11:
            return 'CPF';
        case 14:
            return 'CNPJ';
        default:
            return 'INVALID_FORMAT';
    }
}


/**
 * Validate CNPJ or CPF
 * @param {string} valor 
 * @returns boolean
 */
export function valida_cpf_cnpj ( valor:string ):boolean {


    function calc_digitos_posicoes( digitos:string, posicoes:number = 10, soma_digitos:number = 0 ) {

        // Faz a soma dos dígitos com a posição
        // Ex. para 10 posições:
        //   0    2    5    4    6    2    8    8   4
        // x10   x9   x8   x7   x6   x5   x4   x3  x2
        //   0 + 18 + 40 + 28 + 36 + 10 + 32 + 24 + 8 = 196
        for ( var i = 0; i < digitos.length; i++  ) {
            // Preenche a soma com o dígito vezes a posição
            soma_digitos = soma_digitos + ( Number(digitos[i]) * posicoes );

            // Subtrai 1 da posição
            posicoes--;

            // Parte específica para CNPJ
            // Ex.: 5-4-3-2-9-8-7-6-5-4-3-2
            if ( posicoes < 2 ) {
                // Retorno a posição para 9
                posicoes = 9;
            }
        }

        // Captura o resto da divisão entre soma_digitos dividido por 11
        // Ex.: 196 % 11 = 9
        soma_digitos = soma_digitos % 11;

        // Verifica se soma_digitos é menor que 2
        if ( soma_digitos < 2 ) {
            // soma_digitos agora será zero
            soma_digitos = 0;
        } else {
            // Se for maior que 2, o resultado é 11 menos soma_digitos
            // Ex.: 11 - 9 = 2
            // Nosso dígito procurado é 2
            soma_digitos = 11 - soma_digitos;
        }

        // Concatena mais um dígito aos primeiro nove dígitos
        // Ex.: 025462884 + 2 = 0254628842
        var cpf = digitos + soma_digitos;

        // Retorna
        return cpf;
        
    }

    function valida_cpf( valor:string ): boolean {
    
        // Captura os 9 primeiros dígitos do CPF
        // Ex.: 02546288423 = 025462884
        var digitos = valor.substr(0, 9);
    
        // Faz o cálculo dos 9 primeiros dígitos do CPF para obter o primeiro dígito
        var novo_cpf = calc_digitos_posicoes( digitos );
    
        // Faz o cálculo dos 10 dígitos do CPF para obter o último dígito
        var novo_cpf = calc_digitos_posicoes( novo_cpf, 11 );
    
        // Verifica se o novo CPF gerado é idêntico ao CPF enviado
        if ( novo_cpf === valor ) {
            // CPF válido
            return true;
        }
    
        return false;
    }
    
    function valida_cnpj ( valor:string ): boolean {
    
        var cnpj_original = valor;
    
        // Captura os primeiros 12 números do CNPJ
        var primeiros_numeros_cnpj = valor.substr( 0, 12 ); console.log(`2302271454.1: ${primeiros_numeros_cnpj}`);
    
        // Faz o primeiro cálculo
        var primeiro_calculo = calc_digitos_posicoes( primeiros_numeros_cnpj, 5 ); console.log(`2302271454.2: ${primeiro_calculo}`);
    
        // O segundo cálculo é a mesma coisa do primeiro, porém, começa na posição 6
        var segundo_calculo = calc_digitos_posicoes( primeiro_calculo, 6 ); console.log(`2302271454.3: ${segundo_calculo}`);
    
        // Concatena o segundo dígito ao CNPJ
        var cnpj = segundo_calculo;
    
        // Verifica se o CNPJ gerado é idêntico ao enviado
        if ( cnpj === cnpj_original ) {
            return true;
        }
        
        return false;
    }

    valor = valor.toString();
    valor = valor.replace(/[^0-9]/g, '');

    switch( getType_cpf_cnpj( valor ) ){
        case 'CPF':
            return valida_cpf( valor );
            break;
        case 'CNPJ':
            return valida_cnpj( valor );
            break;
    }
    
    return false;
}

export function formata_cpf_cnpj( valor:string ) {

    let formatado = valor;
    valor = valor.toString();
    valor = valor.replace(/[^0-9]/g, '');

    switch(getType_cpf_cnpj( valor ))
    {
        case 'CPF':
            // Formata o CPF ###.###.###-##
            formatado  = valor.substr( 0, 3 ) + '.';
            formatado += valor.substr( 3, 3 ) + '.';
            formatado += valor.substr( 6, 3 ) + '-';
            formatado += valor.substr( 9, 2 ) + '';
            return formatado;
            break;
        case 'CNPJ':
            // Formata o CNPJ ##.###.###/####-##
            formatado  = valor.substr( 0,  2 ) + '.';
            formatado += valor.substr( 2,  3 ) + '.';
            formatado += valor.substr( 5,  3 ) + '/';
            formatado += valor.substr( 8,  4 ) + '-';
            formatado += valor.substr( 12, 14 ) + '';
            break;
    }

    return formatado;
}