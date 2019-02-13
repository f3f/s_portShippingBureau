/**
 * Created by ly on 2017/3/8.
 */

$(function(){
    var chart_wxpyj = charts.init({id:910,container:"chart_wxpyj",option:{}});
    var chart_wxpsj = charts.init({id:906,container:"chart_wxpsj",option:{}});
    $(".easyTab li:first-child").click(function(){
        $(this).addClass("hover").siblings().removeClass("hover");
        var chart_wxpsj = charts.init({id:906,container:"chart_wxpsj",option:{}});
    })
    $(".easyTab li:nth-child(2)").click(function(){
        $(this).addClass("hover").siblings().removeClass("hover");
        var chart_wxpsj = charts.init({id:906,container:"chart_wxpsj",option:{
            xAxis:  {
                data: ['2017-1-15 ','2017-1-22 ','2017-1-29 ','2017-2-5','2017-2-12','2017-2-19','2017-2-26']
            },
        }});
    })
    $(".easyTab li:last-child").click(function(){
        $(this).addClass("hover").siblings().removeClass("hover");
        var chart_wxpsj = charts.init({id:906,container:"chart_wxpsj",option:{
            xAxis:  {
                data: ['2016-9 ','2016-10 ','2016-11 ','2016-12','2017-1','2017-2','2017-3']
            }
        }});
    })
})