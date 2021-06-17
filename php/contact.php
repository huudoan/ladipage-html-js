<?php
include 'config.php';

$dataPost = [];
file_put_contents('./logOrder.txt', print_r($_POST, true) . PHP_EOL, FILE_APPEND);
if (!empty($_POST['phone'])) {
    $dataPost['phone'] = $_POST['phone'];
    $dataPost['fullName'] = isset($_POST['fullName']) ? $_POST['fullName'] : '';
    $dataPost['email'] = isset($_POST['email']) ? $_POST['email'] : '';
    $dataPost['provinceCode'] = isset($_POST['provinceCode']) ? $_POST['provinceCode'] : '';
    $dataPost['districtCode'] = isset($_POST['districtCode']) ? $_POST['districtCode'] : '';
    $dataPost['subDistrictCode'] = isset($_POST['subDistrictCode']) ? $_POST['subDistrictCode'] : '';
    $dataPost['address'] = isset($_POST['address']) ? $_POST['address'] : '';
    $dataPost['quantity'] = isset($_POST['quantity']) ? $_POST['quantity'] : '';
    $dataPost['productId'] = $productId;
    $dataPost['source'] = $source;
    $dataPost['promotionCode'] = $promotionCode;
    $result = createOpportunity($api, $dataPost);
    header('Content-type: application/json');
    if ($result) {
        echo json_encode(array('success' => 'true'));
    } else {
        echo json_encode(array('success' => 'false'));
    }
    exit;
} else {
    header('Content-type: application/json');
    echo json_encode(array('success' => 'false'));
    exit;
}

function callAPI($url, $data, $method = 'POST')
{
    $curl = curl_init();
    switch ($method) {
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);
            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            break;
        case "PUT":
            curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }
    // OPTIONS:
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('APIKEY: 111111111111111111111', 'Content-Type: application/json'));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    // EXECUTE:
    $result = curl_exec($curl);
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
        'email' => $dataPost['fullName'],
        'phone' => $dataPost['fullName'],
        'provinceCode' => $dataPost['fullName'],
        'districtCode' => $dataPost['fullName'],
        'subDistrictCode' => $dataPost['fullName'],
        'address' => $dataPost['fullName'],
        'promotionCode' => $dataPost['fullName'],
        'items' => [
            ['productId' => $dataPost['productId'], 'quantity' => $dataPost['quantity']]
        ],
        'source' => $dataPost['source']
    );

    return callAPI($url, $data, $method);
}
