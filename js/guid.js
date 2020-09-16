//默认最新
$.ajax({
    url:adress+"/guid/new",
    dataType:"json",
    data:"get",
    success:function(res){
       var shownew_one = doT.template($('#newone').text());
       $('#new').html(shownew_one(res));
   }
   });

$('.new').on('click',function(){
    $('#new').show();
    $(this).addClass('bottom');//下划线
    $('.hot').removeClass('bottom');
    $('#hot').hide();
    $.ajax({
     url:adress+"/guid/new",
     dataType:"json",
     data:"get",
     success:function(res){
        var shownew_one = doT.template($('#newone').text());
        $('#new').html(shownew_one(res));
    }
    });
 });
/* 最热 */
 $('.hot').on('click',function(){
    $(this).addClass('bottom');//下划线
    $('.new').removeClass('bottom');
    $('#hot').show();
    $('#new').hide();
    $.ajax({
        url:adress+"/guid/hot",
        dataType:"json",
        data:"get",
        success:function(res){
            var showhot_one = doT.template($('#hotone').text());
            $('#hot').html(showhot_one(res));
        }
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
         var innerT_1 = doT.template($('#more_more').text());
         var old = $('.new_more').html();
         $('.new_more').html(old+innerT_1(res[parseInt(Math.random()*4)]));
      }
     });
  }