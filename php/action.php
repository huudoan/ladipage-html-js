<?php
include ('config.php');
include ('function.php');

$dataPost = [];
if (!empty($_POST['phone'])) {
    $dataPost['phone'] = $_POST['phone'];
    $dataPost['fullName'] = isset($_POST['fullName']) ? filter_var($_POST['fullName'], FILTER_SANITIZE_STRING) : '';
    $dataPost['email'] = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_STRING) : '';
    $dataPost['advertisingSource'] = isset($_POST['advertisingSource']) ? filter_var($_POST['advertisingSource'], FILTER_SANITIZE_STRING) : '';
    $dataPost['provinceCode'] = isset($_POST['provinceCode']) ? filter_var($_POST['provinceCode'], FILTER_SANITIZE_STRING) : '';
    $dataPost['districtCode'] = isset($_POST['districtCode']) ? filter_var($_POST['districtCode'], FILTER_SANITIZE_STRING) : '';
    $dataPost['subDistrictCode'] = isset($_POST['subDistrictCode']) ? filter_var($_POST['subDistrictCode'], FILTER_SANITIZE_STRING) : '';
    $dataPost['address'] = isset($_POST['address']) ? filter_var($_POST['address'], FILTER_SANITIZE_STRING) : '';
    $dataPost['quantity'] = isset($_POST['quantity']) ? filter_var($_POST['quantity'], FILTER_SANITIZE_STRING) : 1;
    $dataPost['productId'] = $productId;
    $dataPost['source'] = $source;
    $dataPost['promotionCode'] = $promotionCode;

    if (!empty($_POST['tags']))  {
        foreach ($_POST['tags'] as $v) {
            $dataPost['tags'][] = ['tagId' => $v];
        }
    } else {
        $dataPost['tags'] = [];
    }

    $result = createOpportunity($api, $dataPost);
    $result = json_decode($result, true);
//    file_put_contents('./logOrder.txt', print_r($result, true) . PHP_EOL, FILE_APPEND);
    header('Content-type: application/json');
    if (isset($result['statusCode']) && $result['statusCode'] === 200) {
        echo json_encode(array('success' => true));
    } else {
        echo json_encode(array('success' => false));
    }
    exit;
} else {
    header('Content-type: application/json');
    echo json_encode(array('success' => false));
    exit;
}
?>
