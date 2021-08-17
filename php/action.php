<?php
include ('config.php');
include ('function.php');

$dataPost = [];
if (!empty($_POST['phone'])) {
    $dataPost['phone'] = $_POST['phone'];
    $dataPost['fullName'] = isset($_POST['fullName']) ? filter_var($_POST['fullName'], FILTER_SANITIZE_STRING) : '';
    $dataPost['email'] = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_STRING) : '';
    $dataPost['provinceCode'] = isset($_POST['provinceCode']) ? filter_var($_POST['provinceCode'], FILTER_SANITIZE_STRING) : '';
    $dataPost['districtCode'] = isset($_POST['districtCode']) ? filter_var($_POST['districtCode'], FILTER_SANITIZE_STRING) : '';
    $dataPost['subDistrictCode'] = isset($_POST['subDistrictCode']) ? filter_var($_POST['subDistrictCode'], FILTER_SANITIZE_STRING) : '';
    $dataPost['address'] = isset($_POST['address']) ? filter_var($_POST['address'], FILTER_SANITIZE_STRING) : '';
    $dataPost['quantity'] = isset($_POST['quantity']) ? filter_var($_POST['quantity'], FILTER_SANITIZE_STRING) : 1;
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
?>
