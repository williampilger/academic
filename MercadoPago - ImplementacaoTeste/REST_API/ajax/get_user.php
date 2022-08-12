<?php

    require_once __DIR__.'/../_local/cred.php';
    require_once __DIR__.'/../_local/MercadoPago.class.php';

    $mp = new MercadoPago(MP_credentials['ENV_ACCESS_TOKEN']);
    $response = $mp->Customer_get($_POST['id']);
    

    echo json_encode($response);
    
?>