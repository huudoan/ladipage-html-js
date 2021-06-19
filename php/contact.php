<?php
include 'config.php';

$dataPost = [];
file_put_contents('./logOrder.txt', print_r($_POST, true) . PHP_EOL, FILE_APPEND);
if (!empty($_POST['phone'])) {
    $dataPost['phone'] = $_POST['phone'];
    $dataPost['fullName'] = isset($_POST['fullName']) ? filter_var($_POST['fullName'], FILTER_SANITIZE_STRING) : '';
    $dataPost['email'] = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_STRING) : '';
    $dataPost['provinceCode'] = isset($_POST['provinceCode']) ? filter_var($_POST['provinceCode'], FILTER_SANITIZE_STRING) : '';
    $dataPost['districtCode'] = isset($_POST['districtCode']) ? filter_var($_POST['districtCode'], FILTER_SANITIZE_STRING) : '';
    $dataPost['subDistrictCode'] = isset($_POST['subDistrictCode']) ? filter_var($_POST['subDistrictCode'], FILTER_SANITIZE_STRING) : '';
    $dataPost['address'] = isset($_POST['address']) ? filter_var($_POST['address'], FILTER_SANITIZE_STRING) : '';
    $dataPost['quantity'] = isset($_POST['quantity']) ? filter_var($_POST['quantity'], FILTER_SANITIZE_STRING) : '';
    $dataPost['productId'] = $productId;
    $dataPost['source'] = $source;
    $dataPost['promotionCode'] = $promotionCode;
    $dataPost['tags'] = isset($_POST['tags']) ? filter_var($_POST['tags'], FILTER_SANITIZE_STRING) : [];
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
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
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
        'tags' => $dataPost['tags'],
        'items' => [
            ['productId' => $dataPost['productId'], 'quantity' => $dataPost['quantity']]
        ],
        'source' => $dataPost['source']
    );

    return callAPI($url, $data, $method);
}
