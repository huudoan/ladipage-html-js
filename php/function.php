<?php
function callAPI($url, $data, $method = 'POST')
{
    $curl = curl_init();
    switch ($method) {
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);
            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
            break;
        case "PUT":
            curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }

    // OPTIONS:
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    // EXECUTE:
    $result = curl_exec($curl);
//	file_put_contents('./logOrder.txt', print_r($result, true) . PHP_EOL, FILE_APPEND);
    if (!$result) {
        die("Connection Failure");
    }

    curl_close($curl);
    return $result;
}

function createOpportunity($url, $dataPost, $method = 'POST')
{
    $data = array(
        'customerId' => 0,
        'fullName' => $dataPost['fullName'],
        'email' => $dataPost['email'],
        'phone' => $dataPost['phone'],
		'description' => $dataPost['description'],
        'advertisingSource' => $dataPost['advertisingSource'],
        'provinceCode' => $dataPost['provinceCode'],
        'districtCode' => $dataPost['districtCode'],
        'subDistrictCode' => $dataPost['subDistrictCode'],
        'address' => $dataPost['address'],
        'promotionCode' => $dataPost['promotionCode'],
        'tags' => $dataPost['tags'],
        'items' => [
            ['productId' => $dataPost['productId'], 'quantity' => $dataPost['quantity']]
        ],
        'source' => $dataPost['source']
    );

//	file_put_contents('./logOrder.txt', print_r($url, true) . PHP_EOL, FILE_APPEND);
    return callAPI($url, $data, $method);
}
?>
