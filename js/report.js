  // 封装  点赞功能
  function dianZan() {
    // 点赞
    $('.mid_main_lfOneSpan')[0].bol = false;
    $('.mid_main_lfOneSpan').on('click', function () {
        $(this)[0].bol = !$(this)[0].bol;
        if ($(this)[0].bol) {
            $(this).removeClass('zan').addClass('zan_1');
        } else {
            $(this).removeClass('zan_1').addClass('zan');
        }
        var num = $(this).text() - 0;
        $(this)[0].bol ? $(this).text(num + 1) : $(this).text(num - 1);

    });
}

// 加载更多请求数据。。。。
function more(more_url) {
    $('.mid_main_lfJz>span').on('click', function () {
        $(this).hide();
        $('.mid_main_lfJz>span:last').show();
        setTimeout(function(){
            aj(more_url);
        },1000);
    });
}
// 默认数据
$.ajax({
    url: 'json/report_new.json',
    success: function (json) {
        console.log(json)
        // doT模板
        var dotText = doT.template($('#doT_list').text());
        $('.mid_main_lfDiv').html(dotText(json));
        dianZan();  // 点赞
        more('json/report_new.json'); //加载更多
    }
});


// 封装ajax----------
function aj(data_url) {
    $.ajax({
        url: data_url,
        beforeSend: function () {
            // var span_ = $('span').attr('class','remove_spen').text('正在连接中...');
            // $('.mid_main_lfDiv').append(span_);
        },
        success: function (json) {
            // $('.mid_main_lfDiv').remove($('.remove_spen'));
            // doT模板
            var dotText = doT.template($('#doT_list').text());
            $('.mid_main_lfDiv').append(dotText(json));
            // 点赞
            dianZan();
            // 改回更多样式
            $('.mid_main_lfJz>span:first').show();
            $('.mid_main_lfJz>span:last').hide();
        },
        error: function () {
            console.info("error: Not data");
        }
    });
}

// 点击最新-----------------------
$('.mid_top_twoV>span:first').on('click', function () {
    // 先清除
    $('.mid_main_lfDiv').empty();
    // 动态添加样式
    $('.mid_top_twoV>span').removeClass('mid_top_spanC');
    $(this).addClass('mid_top_spanC');
    aj('json/report_new.json');
    more('json/report_new.json'); //加载更多
});

// 点击最热----------------------------
$('.mid_top_twoV>span:last').on('click', function () {
    // 先清除
    $('.mid_main_lfDiv').empty();
    // 动态添加样式
    $('.mid_top_twoV>span').removeClass('mid_top_spanC');
    $(this).addClass('mid_top_spanC');
    aj('json/report_hot.json');
    more('json/report_hot.json'); //加载更多
});
