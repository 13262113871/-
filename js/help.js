$(document).ready(function(){
var a1 = './json/useing_one.json';
var a2 = './json/useing_two.json';
var a3 = './json/useing_three.json';
var a4 = './json/useing_four.json';
var a5 = './json/useing_five.json';
var arr_1 = [a1,a2,a3,a4];
var arr_2 = [a2,a1,a2,a3];
var arr_3 = [a1,a2,a3,a4,a5];
function clickchange(m){
$.ajax({
    url:m,
    success:function(msg){
        // console.log(msg);
        var innerT = doT.template($('#free_list_1').text());
        $('#free_list').html(innerT(msg));
   }
});
}
// 默认
$('.free_2_1 li').eq(0).addClass('li_active_1');
$('.free_3_1 li').eq(0).addClass('li_active_2');
clickchange(a1);

// 点击切换
$('.free_2_1 li').on('click',function(){
    $('#free_list').empty();
    clickchange(a1);
    $('.free_2_1 li').removeClass();
    $('.free_3_1 li').removeClass();
    $(this).addClass('li_active_1');
    $('.free_3_1 li').eq(0).addClass('li_active_2');
if($('.free_2_1 li').eq(0).css('li_active_1') != 'undefind'){
    $('.free_3_1 li').each(function(index,item){
        $(item).on('click',function(){
            $('#free_list').empty();
            $('.free_3_1 li').removeClass();
            $(this).addClass('li_active_2');
            clickchange(arr_1[index]);
        });
    });
}else{
    $('.free_3_1 li').each(function(index,item){
        $(item).on('click',function(){
            $('#free_list').empty();
            $('.free_3_1 li').removeClass();
            $(this).addClass('li_active_2');
            clickchange(arr_2[index]);
        });
    });
}
});
$('.free_3_1 li').each(function(index,item){
    $(item).on('click',function(){
        $('#free_list').empty();
        $('.free_3_1 li').removeClass();
        $(this).addClass('li_active_2');
        clickchange(arr_1[index]);
    });
});


//加载更多
var timer_5 =null;
$('.main_more>p').on('click',function(){
    clearTimeout(timer_5);
    $(this).removeClass().addClass('main_loading');
    $(this).text('正在加载......');
    timer_5 = setTimeout(function(){
        $('.main_more>p').removeClass().addClass('nomain_loading');
        $('.main_more>p').text('点击加载更多');  
        clickchange_1(arr_3[parseInt(Math.random()*6)]);
    },2000);
});
function clickchange_1(n){
    $.ajax({
        url:n,
        success:function(msg){
            var innerT = doT.template($('#free_list_2').text());
            var old = $('#free_more_more').html();
            $('#free_more_more').html(old + innerT(msg));
       }
    });
    }

   

});

