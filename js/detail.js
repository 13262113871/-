/*
 * @Descripttion: 
 * @version: 
 * @Author: 痞子贤
 * @Date: 2020-09-16 07:57:00
 * @LastEditTime: 2020-09-16 11:45:00
 */
$(document).ready(function(){

    //小心心
    var flag_2 = true;
    $('.detail_right_1').on('click',function(){
        var num = $(this).children('p').children('span').text();
        if(flag_2 == true){
            $(this).children('div').removeClass().addClass('hongxinxin');
            $(this).children('p').css('color','#ff6951')
            $(this).children('p').children('span').css('color','#ff6951')
            num++;
            $(this).children('p').children('span').text(num);
            flag_2 = !flag_2;
        }
        else{
            $(this).children('div').removeClass().addClass('baixinxin');
            $(this).children('p').css('color','#a5adc0')
            $(this).children('p').children('span').css('color','#a5adc0')
            num--;
            $(this).children('p').children('span').text(num);
            flag_2 = !flag_2;
        }
    });


    //分享

    $('.detail_right_2').hover(function(){
        $(this).children('div').removeClass().addClass('click_share_r');
        $(this).children('p').css('color','#ff6951');
    },function(){
        $(this).children('div').removeClass().addClass('click_share_w');
        $(this).children('p').css( 'color', '#a5adc0');
    });
});
$('.detail_right_2').on('click',function(e){
    e = e || window.event;
    e.stopPropagation();
    $('.share_1').fadeIn(300);
    $('.share_1').animate({
        right: 170,
        top: 168
    },500);
});
$(document).on('click',function(){
    $('.share_1').animate({
        right: 0,
        top: 0
    },500);
    $('.share_1').fadeOut(300);
});