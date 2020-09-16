//接口封装
$.ajax({  
   url:adress+"/play/new",
   dataType: "json",
   data: "get",
   success:function(res){
      var shownew_one = doT.template($('#newone').text());
      $('.new_one').html(shownew_one(res[0]));
   }
})

$('.new').on('click',function(){
    $(this).addClass('bottom');//下划线
    $('.hot').removeClass('bottom');
    $('.sort').removeClass('bottom');
    $('.there').hide();
    $('.one').show();
    $('.two').hide();

    $.ajax({  
     url:adress+"/play/new",
     dataType: "json",
     data: "get",
     success:function(res){
        var shownew_one = doT.template($('#newone').text());
        $('.new_one').html(shownew_one(res[0]));
        var shownew_two = doT.template($('#newtwo').text());
        $('.new_two').html(shownew_two(res[1]));
     }
    });
 });
/* 最热 */
 $('.hot').on('click',function(){
    $(this).addClass('bottom');//下划线
    $('.one').show();  //最新
    $('.new').removeClass('bottom'); 
    $('.sort').removeClass('bottom');
    $('.there').hide();
    $.ajax({
        url:adress+"/play/new",
        dataType:"json",
        data:"get",
        success:function(res){
            var showhot_one = doT.template($('#hotone').text());
            $('.new_one').html(showhot_one(res[2]));
            var showhot_two = doT.template($('#hottwo').text());
            $('.new_two').html(showhot_two(res[3]));


        }
 })
 })

 /* 品类 */
 $('.sort').on('click',function(){
    $(this).addClass('bottom');//下划线
    $('.one').hide();
    $('.two').hide();  //最热
    $('.new').removeClass('bottom');
    $('.hot').removeClass('bottom');
    $('.there').show();   //品类
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
          more_again();
      },2000);
  });
  function more_again(){
      $.ajax({  
      url:adress+"/play/new",
      dataType: "json",
      data: "get",
      success:function(res){
          console.log(res);
         var innerT_1 = doT.template($('#hotmore').text());
         var old = $('.new_more').html();
         $('.new_more').html(old+innerT_1(res[parseInt(Math.random()*4)]));
      }
     });
  }