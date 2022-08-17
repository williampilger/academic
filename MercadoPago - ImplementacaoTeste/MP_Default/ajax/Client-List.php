<?php

    require_once __DIR__.'/../vendor/autoload.php';
    require_once __DIR__.'/../vendor/mercadopago/sdk/lib/mercadopago.php';
    require_once __DIR__.'/../_local/cred.php';

    MercadoPago\SDK::setAccessToken(MP_credentials['ENV_ACCESS_TOKEN']);

    $search = [];
    if(isset( $_POST['email']) && $_POST['email']!='' ) $search['email'] = $_POST['email'];
    if(isset( $_POST['id']) && $_POST['id']!='' ) $search['id'] = $_POST['id'];

    $json = isset($_POST['json']);

    $customers = MercadoPago\Customer::search($search);

    $resarr = [];
    foreach( $customers->getArrayCopy() as $result )
    {
        $obj = [
            'vars' => get_object_vars($result),
            'methods' => get_class_methods($result),
            'toArray' => $result->toArray()
        ];
        array_push($resarr, $obj);
    }
    $response = [
        'customers' => [
            'vars' => get_object_vars($customers),
            'methods' => get_class_methods($customers),
        ],
        'iterator' => $resarr
    ];

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