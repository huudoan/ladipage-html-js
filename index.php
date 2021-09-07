<!DOCTYPE html>
<html lang="en">
<?php
session_start();
include('php/config.php');
include('php/function.php');
?>
<head>
    <!-- SEO Google -->
    <title><?php echo $metaTitle; ?></title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="description" content="<?php echo $metaDescription; ?>"/>
    <meta name="keywords" content="<?php echo $metaKeywords; ?>">
    <!-- End SEO Google -->

    <!-- SEO Facebook -->
    <meta property="og:locale" content="vi_VN"/>
    <meta property="og:site_name" content="<?php echo $domainName; ?>"/>
    <meta property="og:url" content="<?php echo $domainName; ?>" itemprop="url"/>
    <meta property="og:image" content="<?php echo $metaImage; ?>" itemprop="thumbnailUrl"/>
    <meta property="og:title" content="<?php echo $metaTitle; ?>" itemprop="headline"/>
    <meta property="og:description" content="<?php echo $metaDescription; ?>" itemprop="description"/>
    <meta property="og:type" content="website"/>
    <!-- End SEO Facebook -->

    <!-- SEO Twitter -->
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:url" content="<?php echo $domainName; ?>">
    <meta name="twitter:title" content="<?php echo $metaTitle; ?>"/>
    <meta name="twitter:description" content="<?php echo $metaDescription; ?>"/>
    <meta name="twitter:image" content="<?php echo $metaImage; ?>"/>
    <!-- End SEO Twitter -->

    <link rel="icon" href="./assets/images/favicon.ico">
    <link href="./assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css" rel="stylesheet">
    <link href="./assets/css/style.css" rel="stylesheet">
    <script>
        const expiresCookie = <?php echo $expiresCookie; ?>;
        const prefixKey = '<?php echo $prefixKey; ?>';
        const price = '<?php echo $price; ?>';
    </script>
</head>
<body class="">
    <div class="wrapper-landing">
        <?php include('templates/header.php'); ?>
        <?php include('templates/main.php'); ?>
        <?php include('templates/footer.php'); ?>
    </div>
<script src="./assets/js/jquery-3.1.1.min.js"></script>
<script src="./assets/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js"></script>
<script src="./assets/js/page_all.js"></script>
<!-- Action request data -->
<script src="./assets/js/jquery.cookie.min.js"></script>
<script src="./assets/js/jquery.validate.min.js"></script>
<script src="./assets/js/main.js"></script>
<!-- Action request data -->
</body>
</html>
