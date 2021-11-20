$(document).ready(function () {

    $('[data-fancybox="data"]').fancybox({
        touch: {
            vertical: false, // Allow to drag content vertically
            momentum: false // Continue movement after releasing mouse/touch when panning
          }
    });

    $('.quiz_buttons .prevb').click(function () {

        $('.quiz_buttons .nextb').removeClass('dis');

        if (!$('.active_step').is(':first-child')) {

            $('.active_step').prev().addClass('active_step');
            $('.active_step').next().removeClass('active_step');
            num = $('.progress input').val();
            $('.progress input').val(+num - 1);
            $('.progress .cur_steps span').text(+num - 1);

            $('.quiz_buttons .nextb').attr('style', 'display:block;');

            if (num == 2) {
                $('.quiz_buttons .prevb').attr('style', 'display:none;');
            }

        }

    })

    $('.quiz_buttons .nextb').click(function () {

        

            check = 0;

            $('.active_step').next('.quiz_step').find('input').each(function () {

                if ($(this).is(':checked')) {
                    check = check + 1;
                }

            })

            if (check < 1) {
                $('.quiz_buttons .nextb').addClass('dis');
            }




        if (!$('.active_step').is(':last-child')) {

            $('.active_step').next().addClass('active_step');
            $('.active_step').prev().removeClass('active_step');
            num = $('.progress input').val();
            $('.progress input').val(+num + 1);
            $('.progress .cur_steps span').text(+num + 1);

            $('.quiz_buttons .prevb').attr('style', 'display:block;');

            if (num == 6) {
                $('.quiz_buttons .prevb').attr('style', 'display:none;');
                $('.quiz_buttons .nextb').attr('style', 'display:none;');
                $('.progress').attr('style', 'display:none;');
                $('.quiz_form_h').attr('style', 'display:none;');
                $('.quiz_zigzag').attr('style', 'display:none;');
            }

        }

    })

    $('.quiz_step input').change(function () {
        if ($(this).is(':checked')) {
            $('.quiz_buttons .nextb').removeClass('dis');
            $('.quiz_buttons .nextb').click();
        } else {
            $(this).closest('.quiz_step').find('input').each(function () {
                if (!$('.quiz_step input').is(':checked')) {
                    $('.quiz_buttons .nextb').addClass('dis');
                }
            })
        }
    })

    $('#fancybox-close').click(function () {
        setTimeout(() => {
            num = 1;
            $('.progress .cur_steps span').text(num);
            $('.progress input').val(num);
            $('.quiz_buttons .nextb').addClass('dis');

            $('.quiz_step input').each(function () {
                $('.quiz_step input').prop('checked', false);
            })

            $('.quiz_form_wrap .wpcf7-form-control-wrap .wpcf7-list-item label').each(function () {
                $(this).attr('style', 'border: 1px solid #E2E2E2;');
            })

            $('.quiz_step').each(function () {
                $('.quiz_step').removeClass('active_step');
            })

            $('.quiz_buttons .prevb').attr('style', 'display:none;');

            $('.step1').addClass('active_step');
        }, 500);
    })

    $('#fancybox-overlay').click(function () {
        setTimeout(() => {
            num = 1;
            $('.progress .cur_steps span').text(num);
            $('.progress input').val(num);
            $('.quiz_buttons .nextb').addClass('dis');

            $('.quiz_step input').each(function () {
                $('.quiz_step input').prop('checked', false);
            })

            $('.quiz_form_wrap .wpcf7-form-control-wrap .wpcf7-list-item label').each(function () {
                $(this).attr('style', 'border: 1px solid #E2E2E2;');
            })

            $('.quiz_step').each(function () {
                $('.quiz_step').removeClass('active_step');
            })

            $('.quiz_buttons .prevb').attr('style', 'display:none;');

            $('.step1').addClass('active_step');
        }, 500);
    })

    $('.quiz_form_wrap .wpcf7-form-control-wrap .wpcf7-list-item label').click(function () {
        if ($(this).find('input').is(':checked')) {
            $(this).attr('style', 'border: 1px solid #2F9BFF;')
        } else {
            $(this).attr('style', 'border: 1px solid #E2E2E2;')
        }
    })

    $("form").submit(function(){
        $.ajax({
                url: 'mail.php',
                type: "POST",
                dataType: 'html',
                data: $(this).serialize(),
                success: function(){
                    $('.done').show();
                    setTimeout(function(){
                        $('.done').hide();
                        window.location.replace("");
                        }, 3000);
                }
            });
            return false;
      });

});