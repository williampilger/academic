/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 * 
 * 2023.06.19 - Bom Princípio - RS
 * ♪ Rase em up | Alonestar
 */

import axios from 'axios';

import packageJson from '../../package.json';
import { employee_type, session_type } from './types';

const BACK_DEV = true;
const USE_REST_AUTH = true;
const HOST = BACK_DEV ? `http://${window.location.hostname}:8000` : `${packageJson.homepage}`;
const STORE_ROOT = `${HOST}${BACK_DEV ? '/' : ''}`;
let SSID = '';

const api = axios.create({
    withCredentials: !USE_REST_AUTH,
    baseURL: `${STORE_ROOT}`
});

/**
 * Requisição simples, sem tratamento.
 * @param endpoint 
 * @param params 
 * @returns Fetch
 */
const simpleBasicFetch = async (endpoint: string, params: string) => {

    let str = `/${endpoint}`;
    // if (USE_REST_AUTH && SSID != '') {
    //     params = `${params != '' ? `${params}&` : ''}SSID=${SSID}`;
    // }
    if (params !== '') {
        str = `${str}?${params}`;
    }
    // console.log('simple: ', str, 'request: ', encodeURI(str));
    return await api.get(encodeURI(str));
}

type resultType<T> = {
    conex: boolean,
    reqStat: number,
    success: boolean,
    data: T,
    msg: string
}

const basicFetch = async (method: string, endpoint: string, params: object, alertConex?: boolean, alertError?: boolean): Promise<resultType<any>> => {

    // const dict = useAppSelector((state)=>state.dictionary.api);
    if (USE_REST_AUTH && SSID !== '') {
        params = {
            ...params,
            SSID
        };
    }

    let result = {
        conex: true,//só fica em false quando cai no catch ou não responde nada
        reqStat: 0,
        success: false,//Setado em true quando tudo dá certo e status de retorno é 10
        data: false,//Conteúdo JSON recebido do servidor
        msg: ''//Inserido no Front -> Codigo de status que diz o que será carregado pra lá.
    }
    try {
        let r: any = false;
        try {
            r = method === 'POST' ? await api.post(`/${endpoint}`, buildParamString(params), { validateStatus: function (status) { return true; } }) : (method === 'GET' ? await simpleBasicFetch(endpoint, buildParamString(params)) : false);
        } catch (e: any) {
            r = e.response;
        }
        console.log('API_R: ', r);
        if (r) {
            result.reqStat = r.status;
            result.success = r.status === 200 || r.status === 201;
            if (USE_REST_AUTH && r.status === 200 && ('SSID' in r.data)) {
                //console.log(`SSID PRESENTE: ${r.data.user.SSID}`);
                SSID = r.data.SSID;
                delete r.data.SSID;
            }// else console.log('SSID USENTE -> ', USE_REST_AUTH, r.status, r.data.user);
            if (r.data) result.data = r.data;
            let msg = `HTTP ${r.status.toFixed(0)} ERR STATUS`;
            if (msg) result.msg = msg;
            else result.msg = `Erro de conexão desconhecido. Status: ${r.status.toFixed(0)}` ;
        } else {
            result.conex = false;
            result.msg = `Falha ao estabelecer conexão com o servidor. Tente novamente mais tarde.`;
        }
    } catch (e) {
        console.log('AXIOS ERR: ', e);
        result.conex = false;
        result.msg =  `Falha ao conectar: e: ${e}`;
    }
    if (alertConex && !result.conex) alert(`2306201544 - a requisição falhou`);
    if (alertError && result.conex && !result.success) alert(result.msg);

    // console.log('API_RESPONSE: ', result);
    return result;
}

/**
 * Montar string de parâmetros para URL.
 * @param params JSON com parâmetros para enviar.
 * @returns Parametros no formato para URL.
 */
const buildParamString = (params: any) => {//##VER## UM MONTE DE CAGADAS DO WILL PRA ARRUMAR AQUI

    let str = '';
    Object.keys(params).map((key) => {
        let value = params[key];
        if (Array.isArray(value)) {
            value = JSON.stringify(value);
        } else if (value && typeof value == 'object') {
            // value = value.toString();
            if (Object.keys(value).length > 0) {
                let micstr: string = '['
                Object.keys(value).map( item => {
                    micstr = `${micstr}"${item}"="${value[item]}",`;
                });
                micstr = micstr.slice(0, -1);//remove o último ',';
                value = micstr + ']';
            }
        }

        str = `${str}${key}=${value}&`;
    });
    str = str.slice(0, -1);//remove o último '&'
    return str;
}

/**
 * Abrir um link em nova guia
 * @param endpoint 
 * @param params
 */
const openInNewTab = async (endpoint: string, params: string) => {

    let url = `${packageJson.home}/ws/${endpoint}`;
    if (params != '') {
        url = `${url}?${params}`;
    }
    // console.log('url: ', url);
    window.open(url, '_blank');
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    general: {


    },

    auth: {

        /**
         * Logar usuário na PLATAFORMA! (Não será necessário se o usuário vier de outra tela logado.)
         * @param user Email do usuário 
         * @param pswd Senha
         * @returns JSON com informações básicas do usuário.
         */
        login: async (email: string, passwd: string): Promise<resultType<session_type>> => {

            return await basicFetch('POST', 'auth', {
                email,
                passwd
            });

        },

        /**
         * Destruir session do lado do servidor.
         * @returns JSON com status
         */
        logout: async () => {
            return await basicFetch('GET', 'auth/logout.php', {}, true, true);
        },

        /**
         * Verificar Login do usuário, e licença para o APP.
         * @returns JSON com dados do usuário (se logado), ou Status 0 (se não logado).
         */
        checkSession: async (): Promise<resultType< session_type >> => {

            return await basicFetch('GET', 'auth', {});
        }
    },

    account: {

        /**
         * Obter dados do usuário (página com tudo)
         * @returns JSON
         */
        getUserData: async (): Promise<resultType<{ user: employee_type, msg?: string }>> => {
            return await basicFetch('GET', 'account/get', {});
        },

        newUser: async (email: string, fullname: string, pswd: string, newslatter: boolean) => {
            return await basicFetch('POST', 'account/new', {
                email,
                name: fullname,
                pswd,
                newslatter
            });
        },

        getTimestamps: async ():Promise<resultType<{ timestamps: number[][] }>>  => {
            return await basicFetch('GET', 'timestamp/list', {});
        },

        newTimestamp: async ():Promise<resultType<{ timestamps: number[][] }>>  => {
            return await basicFetch('GET', 'timestamp/new', {});
        },
    },

    


    admin: {
        employees: {
            list: async ():Promise<resultType<{ employees: employee_type[] }>>  => {
                return await basicFetch('GET', 'admin/employees/list', {});
            },
            list_wtt: async ():Promise<resultType<{ employees: employee_type[] }>>  => {
                return await basicFetch('GET', 'admin/employees/list-timestamps', {});
            },
            get: async ( id:number ):Promise<resultType<{ employee: employee_type }>>  => {
                return await basicFetch('GET', 'admin/employees/get', {id});
            },
            update: async ( user: employee_type ): Promise<resultType<{ employee: employee_type }>>  => {
                return await basicFetch('POST', 'account/update', {user:JSON.stringify(user)});
            },
            new: async ( user: employee_type ): Promise<resultType<{ employee: employee_type }>>  => {
                return await basicFetch('POST', 'account/new', {user:JSON.stringify(user)});
            },
        }
    }
}
