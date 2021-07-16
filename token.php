<?php
// Step 6
$data = 'client_id=' . '7415eb3be51e7222a91c' . '&' .
                                'client_secret=' . 'f43a1da2796648bb8f8d98a166ff3278d7843624' . '&' .
                                'code=' . urlencode($_GET['code']);

$ch = curl_init('https://github.com/login/oauth/access_token');
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);

preg_match('/access_token=([0-9a-f]+)/', $response, $out);
echo $out[1];
curl_close($ch);
?>
