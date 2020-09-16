/*
 * @Author: your name
 * @Date: 2020-09-14 14:04:32
 * @LastEditTime: 2020-09-14 14:25:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VS_Coded:\AAA\VS_project\shop\js\public_head.js
 */
// 点击弹出登录
$('.head_login').on('click',function(){
    $('.login_zz').toggle(); //遮罩
    $('.login').toggle();
});
$('#closd').on('click',function(){
    $('.login_zz').toggle(); //遮罩
    $('.login').toggle();
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
$('.footer_return').on('click',function(){
    timer_4 = setInterval(function(){
    var scoll_y = $(document).scrollTop();
    var v = parseInt(scoll_y/(Math.random()+4));
    // 
    $(document).scrollTop(scoll_y - v);
    if(scoll_y <= 5){clearInterval(timer_4);}
    },100);
});



/* 登录的 */

$('#phone').on('focus',function(){
    $(this).val('');
    $(this).css('color','black');
});
$('#phone').on('blur',function(){
    if($('#phone').val().search(/^1[3578]\d{9}$/)==-1){
    $(this).val('手机号格式不正确！');
    $(this).css('color','red');
    return;
};
});
$('#password').on('focus',function(){
    $(this).val('');
    $(this).css('color','black');
});
$('#password').on('blur',function(){
    if($('#password').val().search(/^[^\s\u4e00-\u9fa5]{6,16}$/)==-1){
    $(this).val('');    
    alert('密码格式不正确！');
    $(this).css('color','red');
    return;
};
});

$('#login').on('click',function(){
    var phone=$('#phone').val();
    var pass=$('#password').val();
    if(phone==''&&pass==''){
        alert('请输入手机号和密码');
    }else if($('#phone').css('color')=='rgb(255, 0, 0)'||$('#password').css('color')=='rgb(255, 0, 0)'){
        alert('手机号码或者密码格式不正确！')
    } else{
        $.ajax({
            url:adress+'/users',
            type:'post',
            data:{
                type:'login',
                phone:phone,
                pass:pass
            },
            success:function (json) {
                json=JSON.parse(json);
                console.log(json);
                alert(json.msg);
                if($('#checkbox').is(':checked')){
                            localStorage.setItem('phone',$('#phone').val());
                            localStorage.setItem('psd',$('#password').val());
                            localStorage.setItem('tick',$('#checkbox').is(':checked'));
                        }   
                        else{
                            localStorage.clear();
                }
            }
        })
   }
   
});

//记住密码
    if(localStorage.getItem('tick')){
        $('#phone').val(localStorage.getItem('phone'));
        $('#password').val(localStorage.getItem('psd'));
        $('#checkbox').attr('checked',localStorage.getItem('tick'));
    }