<?php
/*
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022.08.11 - Bom Princípio - RS
 * ♪ - / -
 *  
 * Class responsible for intermediate API calls for MercadoPago's API.
 * 
 */

class MercadoPago
{

    private const BASE = 'https://api.mercadopago.com/v1';

    public $authToken;

    /**
     * Instantiate a MarcadoPago object.
     * @param string $accesstoken You application's Access Token.
     */
    public function __construct( string $accesstoken )
    {
        if(isset($accesstoken) && $accesstoken != '')
        {
            $this->authToken = $accesstoken;
            return;
        }
        throw new Exception('Code 2208111515. Impossible instantiate a MercadoPago object.');
    }

    // #####################################################################################################################
    // # PUBLIC Methods - PUBLIC Methods - PUBLIC Methods - PUBLIC Methods - PUBLIC Methods - PUBLIC Methods - PUBLIC Meth #
    // #####################################################################################################################

    public function Customer_getByID( string $id )
    {
        $resp = $this->doRequest('POST', "customers/$id", []);
        return $resp;
    }

    public function Customer_new( string $email, string $cpf, array $address )
    {
        $data = [
            'email' => $email,
            'identification' => [
              'type' => 'CPF',
              'number' => $cpf
            ],
            'address' => $address
        ];
        $resp = $this->doRequest('POST', 'customers', $data );
        
        return $resp;
    }

    public function Customer_search( array $find )
    {
        $resp = $this->doRequest('GET', 'customers/search', $find );
        
        return $resp;
    }

    public function Customer_get( string $id )
    {
        $resp = $this->doRequest('GET', "customers/$id", []);

        return $resp;
    }

    public function Customer_update( string $id, array $changes )
    {
        $resp = $this->doRequest('PUT', "customers/$id", $changes);

        return $resp;
    }

    // #####################################################################################################################
    // # STATIC PUBLIC Methods - STATIC PUBLIC Methods - STATIC PUBLIC Methods - STATIC PUBLIC Methods - STATIC PUBLIC Met #
    // #####################################################################################################################

    // #####################################################################################################################
    // # PRIVATE Methods - PRIVATE Methods - PRIVATE Methods - PRIVATE Methods - PRIVATE Methods - PRIVATE Methods - PRIVA #
    // #####################################################################################################################

    /**
     * ##VER##AQUI##FAZER## Descrever bem essa função.
     */
    private function doRequest( string $type, string $endpoint, array $fields )
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer {$this->authToken}", 'Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        switch($type)
        {
            case 'POST':
                curl_setopt($ch, CURLOPT_URL, MercadoPago::BASE."/$endpoint" );
                curl_setopt($ch, CURLOPT_POST, 1);
                curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields) );
                break;
            case 'GET':
                $params = MercadoPago::buildParamString($fields);
                curl_setopt($ch, CURLOPT_URL, MercadoPago::BASE."/$endpoint?$params" );
                break;
            case 'PUT':
                curl_setopt($ch, CURLOPT_URL, MercadoPago::BASE."/$endpoint" );
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
                curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
                break;
            default:
                throw new Exception('Code 2208121434. Invalid request type informed.');
                break;
        }

        $response = curl_exec($ch);
        curl_close ($ch);

        if($response) $response = json_decode($response, true);
        
        return $response;
    }


    // #####################################################################################################################
    // # STATIC PRIVATE Methods - STATIC PRIVATE Methods - STATIC PRIVATE Methods - STATIC PRIVATE Methods - STATIC PRIVAT #
    // #####################################################################################################################

    /**
     * Transform an associative array (key=>value) in an URL paramethers string.
     * @param array $fields Assiative Array.
     * @return string URL param strig.
     */
    private static function buildParamString( array $fields )
    {
        $str = '';
        foreach ($fields as $key=>$value)
        {
            $str .= "$key=$value&";
        }
        return substr($str, 0, -1);
    }
}

?>