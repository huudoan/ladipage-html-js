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
    <meta property="og:site_name" content="<?php echo $siteName; ?>"/>
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

    <link rel="icon" href="./assets/images/favicon.png">
	<style>
        .loading-start{
            width: 100%;
            height: 100%;
            background-color: #000000f2;
            position: fixed;
            z-index: 999;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .donut {
            width: 5rem;
            height: 5rem;
            margin: 2rem;
            border-radius: 50%;
            border: 0.3rem solid rgba(108, 180, 56, 0.3);
            border-top-color: #6CB438;
            animation: 1.5s spin infinite linear;
        }
        .donut.multi {
            border-bottom-color: #6CB438;
        }
        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }
    </style>
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
        <!--//$('#modal-success').modal();-->
        <div class=" modal" tabindex="-1" role="dialog" id="modal-success">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-uppercase w-100 text-center ">Hoàn tất</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        <h4 class="rs title-1 font-weight-bold">Yêu cầu tư vấn của quý khách</h4>
                        <p class="rs">đã được gửi đến Xịt họng Nhất Nhất Plus</p>
                        <div class="content">
                            Số điện thoại <span class="font-weight-bold">0818.122.122</span> sẽ liên hệ với quý khách trong thời gian sớm nhất.
                        </div>
                    </div>
                    <div class="modal-footer border-top-0 flex-column align-items-center">
                        <button id="btn-continue" type="button" class="btn btn-continue">Tiếp tục tìm hiểu sản phẩm</button>
                        <!--                <button type="button" class="btn btn-back" data-dismiss="modal">Quay về trang</button>-->
                    </div>
                </div>
            </div>
        </div>
        <!--modal thông báo lỗi-->
        <!--$('#modal-notif').modal();-->
        <div class=" modal modal-notif" tabindex="-1" role="dialog" id="modal-notif">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-uppercase w-100 text-center">Thông báo</h5>
                        <button id="close-modal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        <p class="rs font-weight-bold">Gửi yêu cầu thất bại!</p>
                    </div>

                </div>
            </div>
        </div>
        <!--loading-->
        <div id="loading-request" class="loading" style="display: none">
            <div class="donut"></div>
        </div>
		<div class="loading-start">
			<div class="donut"></div>
		</div>
        <!--loading-->
    </div>
	
<link href="./assets/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css" rel="stylesheet">
<link href="./assets/css/style.css" rel="stylesheet">
	
<script src="./assets/js/jquery-3.1.1.min.js"></script>
<script src="./assets/js/bootstrap.min.js"></script>
<script src="./assets/js/jquery.lazyload.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js"></script>
<script src="./assets/js/page_all.min.js"></script>

<!-- Action request data -->
<script src="./assets/js/jquery.cookie.min.js"></script>
<script src="./assets/js/jquery.validate.min.js"></script>
<script src="./assets/js/main.min.js"></script>
<!-- Action request data -->
<script>
	$("img.lazy").lazyload();
    if ('loading' in HTMLIFrameElement.prototype) {
        const iframes = document.querySelectorAll('iframe[loading="lazy"]');
        iframes.forEach(iframe => {
            iframe.src = iframe.dataset.src;
        });
    } else {
        // Dynamically import the LazySizes library
        const script = document.createElement('script');
        script.src = '/assets/js/lazysizes.min.js';
        document.body.appendChild(script);
    }
</script>
</body>
</html>
