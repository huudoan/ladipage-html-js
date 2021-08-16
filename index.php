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

    <link rel="stylesheet" type="text/css" href="./public/css/app.css">
    <link rel="stylesheet" type="text/css" href="./public/css/reponsive_320.css">
    <link rel="stylesheet" type="text/css" href="./public/css/reponsive_375.css">
    <link rel="stylesheet" type="text/css" href="./public/css/reponsive_425.css">
    <link rel="stylesheet" type="text/css" href="./public/css/reponsive_768.css">
    <link rel="stylesheet" type="text/css" href="./public/css/reponsive_1024.css">
    <link rel="stylesheet" type="text/css" href="./public/css/reponsive_1200.css">
    <link rel="stylesheet" type="text/css" href="./public/css/bootstrap/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="./public/css/OwlCarousel/owl.carousel.min.css">
</head>
<body class="homev2">

<?php include('templates/header.php'); ?>
<?php include('templates/main.php'); ?>
<?php include('templates/footer.php'); ?>

<script src="./public/js/jquery.min.js"></script>
<script src="./public/js/jquery.cookie.min.js"></script>
<script src="./public/js/jquery.validate.min.js"></script>
<script src="./public/js/main.js"></script>
<script src="./public/js/lazyload.min.js"></script>
<script src="./public/js/bootstrap/bootstrap.min.js"></script>
<script src="./public/js/OwlCarousel/jquery.min.js"></script>
<script src="./public/js/OwlCarousel/owl.carousel.min.js"></script>
<script src="./public/js/bootstrap/bootstrap.min.js"></script>
<script src="./public/js/OwlCarousel/jquery.min.js"></script>
<script src="./public/js/OwlCarousel/owl.carousel.min.js"></script>
<script src="./public/js/app.js"></script>
<script>
    $(document).ready(function () {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            animateOut: 'fadeOut',
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1,
                },
                1200: {
                    items: 1
                }
            }
        });
    })
</script>
</body>
</html>
