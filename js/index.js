$(document).ready(function () {
    //首页倒计时

    function autoplay() {
        var timer_1 = null;
        timer_1 = setInterval(function () {
            var now = new Date();
            var now_time = now.getTime();
            var f_n = new Date(2020, 10, 11);
            var f_n_time = f_n.getTime();
            var time_1 = f_n_time - now_time;
            var d = Math.floor(time_1 / 1000 / 60 / 60 / 24);
            var h = Math.floor(time_1 / 1000 / 60 / 60 % 24);
            var m = Math.floor(time_1 / 1000 / 60 % 60);
            var s = Math.floor(time_1 / 1000 % 60);
            $('.main_first .main_first_1 .main_first_2 .say_3').text('申请时间剩余：' + d + '天' + h + '小时' + m + '分钟' + s + '秒');
        }, 1000);
    }
    autoplay();

    //倒计时移入动画
    $('.main_first_2').animate({
        right: 0,
        top: 0,

    }, 1000);

    //轮播图
    var timer_2 = null,
        timer_3 = null;
    var index = 1;
    $('.lunbo_scroll').scrollLeft($('.lunbo_img ul').eq(0).css('width').split('p')[0]);

    function autochange_(m) {
        var step_ = 0;
        var maxstep_ = 80;
        var start_ = $('.lunbo_scroll').scrollLeft();
        var end_ = $('.lunbo_img ul').eq(0).css('width').split('p')[0] * m;
        var everystep_ = (end_ - start_) / maxstep_;
        timer_2 = setInterval(function () {
            step_++;
            if (step_ >= maxstep_) {
                step_ = 0;
                clearInterval(timer_2);
            }
            start_ += everystep_;
            $('.lunbo_scroll').scrollLeft(start_);
        }, 10);
    }

    function automove_() {
        clearInterval(timer_3)
        timer_3 = setInterval(function () {
            clearInterval(timer_2);
            index++;
            if (index >= $('.lunbo_img ul').length) {
                index = 1;
                $('.lunbo_scroll').scrollLeft(0);
            }
            autochange_(index);
        }, 3000);
    }

    function mouse() {
        $('.lunbo_img ul').each(function (index_2, item) {
            $(item).hover(function () {
                clearInterval(timer_2);
                clearInterval(timer_3);
            }, function () {
                automove_();
                autochange_(index_2);
            });
        });
    }

    function clicked() {
        $('.prev').on('click', function () {
            clearInterval(timer_2)
            clearInterval(timer_3)
            index--;
            if (index == 0) {
                index = $('.lunbo_img ul').length;
            }
            automove_();
            autochange_(index);
        });
        $('.next').on('click', function () {
            clearInterval(timer_2)
            clearInterval(timer_3)
            index++;
            if (index == $('.lunbo_img ul').length) {
                index = 0;
            }
            automove_();
            autochange_(index);
        });
    }
    automove_();
    mouse();
    clicked();

    // 移入图片变模糊

    $('li').hover(function () {
        $(this).find('img').toggleClass('img_l');
    }, function () {
        $(this).find('img').toggleClass('img_l');
    });

    //点心心

    $('.third_p2 .span_2').next().next().each(function (index, item) {
        var flag_1 = true;
        $(item).on('click', function (e) {
            e = e || window.event;
            e.preventDefault();
            var num = $(this).text();
            if (flag_1 == true) {
                $(this).removeClass().addClass('p_a2_1').end().css('color', '#ff6951');
                num++;
                $(this).text(num);
                flag_1 = !flag_1;
            } else {
                $(this).removeClass().addClass('p_a2').end().css('color', '');
                num--;
                $(this).text(num);
                flag_1 = !flag_1;
            }
        });
    });


    //返回顶部
    $(window).scroll(function(){   
        if ($(document).scrollTop()> 500) {
            $('.footer_return').show()
        } else {
            $('.footer_return').hide()
        };
    
    });
    var timer_4 = null;
    $('.footer_return').on('click', function () {
        timer_4 = setInterval(function () {
            var scoll_y = $(document).scrollTop();
            var v = parseInt(scoll_y / (Math.random() + 4));
             $(document).scrollTop(scoll_y - v);
            if (scoll_y <= 5) {
                clearInterval(timer_4);
            }
        }, 100);
    });

    //加载更多
    var timer_5 = null;
    $('.main_more>p').on('click', function () {
        clearTimeout(timer_5);
        $(this).removeClass().addClass('main_loading');
        $(this).text('正在加载......');
        timer_5 = setTimeout(function () {

            $('.main_more>p').removeClass().addClass('nomain_loading');
            $('.main_more>p').text('点击加载更多');
            more_again();
        }, 2000);
    });

    function more_again() {
        $.ajax({
            url: adress + "/play/new",
            dataType: "json",
            data: "get",
            success: function (res) {
                console.log(res);
                var innerT_1 = doT.template($('#more_free_1').text());
                var old = $('#free_list').html();
                $('#free_list').html(old + innerT_1(res[parseInt(Math.random() * 4)]));
            }
        });
    }


});