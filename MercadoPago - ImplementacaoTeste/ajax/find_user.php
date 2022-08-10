<?php

    require_once __DIR__.'/../vendor/autoload.php';
    require_once __DIR__.'/../vendor/mercadopago/sdk/lib/mercadopago.php';
    require_once __DIR__.'/../_local/cred.php';

    MercadoPago\SDK::setAccessToken(MP_credentials['ENV_ACCESS_TOKEN']);

    $customers = MercadoPago\Customer::search(['email'=>$_POST['find']]);

    $response = array(
        'success' => $r,
        'customer' => $customer->id,
        'error' => $customer->Error(),
        'customer_objdetails' => [
            'vars' => get_object_vars($customer),
            'methods' => get_class_methods($customer)
        ]
    );

    echo json_encode($response);

?>