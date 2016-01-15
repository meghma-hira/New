<?php

$options = getopt("d:p:f:");

$json_data = $options['d'];

$request = json_decode($json_data);



//The WSDL is not included with the sample code.
//Please include and reference in $path_to_wsdl variable.

$path_to_wsdl = $options['p'];

$my_function = $options['f'];



ini_set("soap.wsdl_cache_enabled", "0");

$client = new SoapClient($path_to_wsdl, array('trace' => 1));

try {
	$response = $client -> $my_function($request);
	$response  = json_encode($response);
    print_r($response);
} catch (SoapFault $exception) {

  print_r( $response) ;
}
?>
