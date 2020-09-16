function flowchange_(){
    $.ajax({
        url:'./json/useing_one.json',
        success:function(msg){
            // console.log(msg);
            var innerT = doT.template($('#free_list_3').text());
            $('#flow_1').html(innerT(msg.splice(0,4)));
       }
    });
    }
    flowchange_();

    
    //倒计时移入动画
    $('.main_first_2').animate({
        right: 0,
        top: 0,
        
    },1000);