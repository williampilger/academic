<?php

    require_once __DIR__.'/../_local/cred.php';
    require_once __DIR__.'/../_local/MercadoPago.class.php';

    $mp = new MercadoPago(MP_credentials['ENV_ACCESS_TOKEN'], MP_credentials['APP_ID']);

    function getParams($paramArr)
    {
        $arr = [];
        foreach( $paramArr as $param)
        {
            if(isset($_POST[$param]) && $_POST[$param] != '') $arr[$param] = $_POST[$param];
        }
        return $arr;
    }

    $data = getParams(['installments', 'issuer_id', 'payment_method_id', 'token', 'transaction_amount']);
    $data['transaction_amount'] = (float)$data['transaction_amount'];
    $data['installments'] = (int)$data['installments'];

    $data['payer'] = [
        'entity_type' => 'individual',
        'type' => 'customer',
        'id' => $_POST['payer']
    ];


    $response = $mp->Payment_new($data);
    
    echo json_encode($response);
    
?>