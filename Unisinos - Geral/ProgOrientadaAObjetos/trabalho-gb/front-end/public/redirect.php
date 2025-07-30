<?php

    // require_once __DIR__.'/ws/_local/config.php';

    // $path = explode('/', $_GET['url']);
    // if(is_array($path) && count($path)>0)
    // {
    //     switch($path[0])
    //     {
    //         case 'product':
    //             require_once LOCAL_DIR.'/class.product.php';
    //             if(count($path)==2)
    //             {
    //                 try
    //                 {
    //                     $product = new Product( intval($path[1]) );
    //                 }
    //                 catch(Exception $e)
    //                 {
    //                     $product = false;
    //                 }

    //                 if($product)
    //                 {
    //                     header("");
    //                 }
    //             }
    //             break;
    //         case 'course':
    //             require_once LOCAL_DIR.'/class.scholar.course.php';

    //             break;
    //     }
    // }

    header('Location: https://'.$_SERVER['HTTP_HOST'].'/home?url='.$_GET['url']);
?>