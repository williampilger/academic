<?php

    require_once __DIR__.'/../vendor/autoload.php';
    require_once __DIR__.'/../vendor/mercadopago/sdk/lib/mercadopago.php';
    require_once __DIR__.'/../_local/cred.php';

    MercadoPago\SDK::setAccessToken(MP_credentials['ENV_ACCESS_TOKEN']);

    $json = isset($_POST['json']);

    $customer = MercadoPago\Customer::find_by_id($_POST['id']);

    if($customer)
    {
        $response = [
            'vars' => get_object_vars($customer),
            'methods' => get_class_methods($customer),
            'toArray' => $customer->toArray()
        ];
    }
    else
    {
        $response = null;
    }

    if($json)
    {
        echo json_encode($response);
    }
    else
    {
        $arr = [];
        foreach ( $response['iterator'] as $item )
        {
            $arr[] = [
                'email'=>$item['toArray']['email'],
                'id'=>$item['toArray']['id']
            ];
        }

        echo json_encode($arr);
    }

?>