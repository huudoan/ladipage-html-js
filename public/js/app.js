
/*Scroll to top when arrow up clicked BEGIN*/
  $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {
          $('#back2Top').fadeIn();
      } else {
          $('#back2Top').fadeOut();
      }
      
  });
  $('#heaader-menu').addClass('d-none');
  $('.groupFormDeal').addClass('d-none');
  $(window).scroll(function () {

      if ($('#formDeal213').length > 0) {
          if ($(this).scrollTop() + 100 < $('#formDeal213').position().top) {
              $('#lienhe').removeClass('d-mr');

          } else {
              $('#lienhe').addClass('d-mr');
          }
      }
      if ($('#consultation').length > 0) {
        if ($(this).scrollTop() + 100 < $('#consultation').position().top) {
            $('#formDeal213').removeClass('d-none');

        } else {
            $('#formDeal213').addClass('d-none');
        }
    }
      if ($('#disadvantage').length > 0) {
          if ($(this).scrollTop() + 900 < $('#disadvantage').position().top) {
              $('#heaader-menu').addClass('d-none');
              $('.header-menu').removeClass('fixed');
          } else {
              $('#heaader-menu').removeClass('d-none');
              $('.header-menu').addClass('fixed');
          }
      }
      if ($('#recommended').length > 0) {
          if ($(this).scrollTop() - 500 < $('#recommended').position().top) {
              $('.Group_677_i').addClass('d-none');
              $('.groupFormDeal').removeClass('d-none');
          } else {
              $('.Group_677_i').removeClass('d-none');
              $('.groupFormDeal').addClass('d-none');
          }
          if ($(this).scrollTop() + 600 < $('#recommended').position().top) {
              $('#formDeal211').removeClass('d-none');
          } else {
              $('#formDeal211').addClass('d-none');
          }
      }
  });

  $(document).ready(function() {
      $("#back2Top").click(function(event) {
          event.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
      });
      $(".form-register").change(function() {
          $(this).closest('p').addClass("active", this.checked);
      });
      /*
      $(".form-register").on('click', 'p', function() {
        $(this).closest('p').toggleClass('active', this.checked);
    });*/
      $(".form-register").on('click', 'input:checkbox', function() {
          $(this).closest('p').toggleClass('active', this.checked);
      });

      
      $('.form-register input:checkbox:checked').closest('p').addClass('active');

      $(".row-8").on('click', 'input:checkbox', function() {
          $(this).closest('p').toggleClass('active', this.checked);
      });
      $('.row-8 input:checkbox:checked').closest('p').addClass('active');

      $(".row-10").on('click', 'input:checkbox', function() {
          $(this).closest('div').toggleClass('active', this.checked);
      });
      $('.row-10 input:checkbox:checked').closest('div').addClass('active');

      $(".check").on('click', 'input:checkbox', function() {
          $(this).closest('div').toggleClass('active', this.checked);
      });
      $('.check input:checkbox:checked').closest('div').addClass('active');

      $('.circle.minus').click(function () {
        if (parseInt($('input[name="amount_order"]').val()) > 1) {
            $('input[name="amount_order"]').val(parseInt($('input[name="amount_order"]').val()) - 1);
            displayCombo();
        }
        });
   

      $('.circle.plus').click(function () {
          $('input[name="amount_order"]').val(parseInt($('input[name="amount_order"]').val()) + 1);
          displayCombo();
      });
      $('.form-deal .ic_close').click(function () {
          $('.form-deal').addClass('d-none');
      });
      
      });

/*Scroll to top when arrow up clicked END*/
