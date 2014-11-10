<?php 
/* gets the data from a URL */

$api_key = $_POST['api_key'];
$domain_name = $_POST['domain_name'];
$url = "http://freedomainapi.com?key={$api_key}&domain={$domain_name}";

$ch = curl_init();
$timeout = 5;
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
$data = curl_exec($ch);
curl_close($ch);
echo $data;