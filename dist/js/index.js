/**
 * Created by ly on 2017/3/7.
 */

$(function(){
    $(".bMapTypeControl li:nth-child(1)").click(function(){
        $(this).addClass("hover").siblings().removeClass("hover");
        bMaInfo(BMAP_NORMAL_MAP);
    })
    $(".bMapTypeControl li:nth-child(2)").click(function(){
        $(this).addClass("hover").siblings().removeClass("hover");
        bMaInfo(BMAP_HYBRID_MAP);
    })

    $(".bMapTypeControl li:last-child").click(function(){
        $(".bMapTypeControlCj").slideDown();
    })
    $(".bMapTypeControlCj_tit span").click(function(){
        $(".bMapTypeControlCj").slideUp();
        return false;
    })

    bMaInfo(BMAP_NORMAL_MAP);

    var chart_hwtj = charts.init({id:903,container:"chart_hwtj",option:{}})
    var chart_cbtj = charts.init({id:904,container:"chart_cbtj",option:{}})
    var chart_ttl = charts.init({id:905,container:"chart_ttl",option:{}})
})
function bMaInfo(maptypeNew){
    var map = new BMap.Map("bMap",{mapType:maptypeNew});          // 创建地图实例

    var jininggangPosition=new BMap.Point(116.564239, 35.384455),
        qingdaogangPosition=new BMap.Point(120.243591,36.057281),
        xiamengangPosition=new BMap.Point(118.117984,24.342753),
        ningbogangPosition=new BMap.Point(121.501614,29.532305),
        shanghaigangPosition=new BMap.Point(121.490259,31.058378),
        guangzhougangPosition=new BMap.Point(113.537884,23.02506),
        zhanjianggangPosition=new BMap.Point(110.422488,21.18728),
        tianjingangPosition=new BMap.Point(117.603435,38.780506),
        daliangangPosition=new BMap.Point(121.580925,38.883453);

    map.centerAndZoom(new BMap.Point(121.564239, 32.384455), 7);                 // 初始化地图，设置中心点坐标和地图级别

    map.enableScrollWheelZoom();                    // 支持缩放效果

    map.setMapStyle({
        styleJson: [{"label":"水域","featureType":"water","elementType":"all","stylers":{"color":"#000c26"}},{"label":"公路填充","featureType":"highway","elementType":"geometry.fill","stylers":{"color":"#1d4794"}},{"label":"公路线条","featureType":"highway","elementType":"geometry.stroke","stylers":{"color":"#1d4794"}},{"label":"主干道填充","featureType":"arterial","elementType":"geometry.fill","stylers":{"color":"#113766"}},{"label":"主干道线条","featureType":"arterial","elementType":"geometry.stroke","stylers":{"color":"#113766"}},{"label":"局部?","featureType":"local","elementType":"geometry","stylers":{"color":"#08375a"}},{"label":"陆地","featureType":"land","elementType":"all","stylers":{"color":"#051f44"}},{"label":"铁路填充","featureType":"railway","elementType":"geometry.fill","stylers":{"color":"#0c1340"}},{"label":"铁路线条","featureType":"railway","elementType":"geometry.stroke","stylers":{"color":"#0c1340"}},{"label":"建筑填充","featureType":"building","elementType":"geometry.fill","stylers":{"color":"#021736"}},{"label":"建筑默认","featureType":"building","elementType":"geometry","stylers":{"color":"#021736"}},{"label":"标签填充","featureType":"all","elementType":"labels.text.fill","stylers":{"color":"#3b80c2"}},{"label":"标签线条","featureType":"all","elementType":"labels.text.stroke","stylers":{"weight":"normal","color":"#000000"}},{"label":"绿化","featureType":"green","elementType":"geometry","stylers":{"color":"#154756"}},{"label":"边界","featureType":"boundary","elementType":"all","stylers":{"color":"#154756"}},{"label":"人造物","featureType":"manmade","elementType":"all","stylers":{"color":"#05365a"}}]
    })

    //map.addControl(new BMap.MapTypeControl());  //地图模式切换插件

    var points1 = [jininggangPosition,qingdaogangPosition];
    var points2 = [jininggangPosition,xiamengangPosition];
    var points3 = [jininggangPosition,ningbogangPosition];
    var points4 = [jininggangPosition,shanghaigangPosition];
    var points5 = [jininggangPosition,guangzhougangPosition];
    var points6 = [jininggangPosition,zhanjianggangPosition];
    var points7 = [jininggangPosition,tianjingangPosition];
    var points8 = [jininggangPosition,daliangangPosition];

    var curve1 = new BMapLib.CurveLine(points1, {strokeColor:"#4effe8", strokeWeight:2, strokeOpacity:0.7}); //创建弧线对象
    var curve2 = new BMapLib.CurveLine(points2, {strokeColor:"#4effe8", strokeWeight:2, strokeOpacity:0.7});
    var curve3 = new BMapLib.CurveLine(points3, {strokeColor:"#4effe8", strokeWeight:2, strokeOpacity:0.7});
    var curve4 = new BMapLib.CurveLine(points4, {strokeColor:"#4effe8", strokeWeight:2, strokeOpacity:0.7});
    var curve5 = new BMapLib.CurveLine(points5, {strokeColor:"#4effe8", strokeWeight:2, strokeOpacity:0.7});
    var curve6 = new BMapLib.CurveLine(points6, {strokeColor:"#4effe8", strokeWeight:2, strokeOpacity:0.7});
    var curve7 = new BMapLib.CurveLine(points7, {strokeColor:"#4effe8", strokeWeight:2, strokeOpacity:0.7});
    var curve8 = new BMapLib.CurveLine(points8, {strokeColor:"#4effe8", strokeWeight:2, strokeOpacity:0.7});
    map.addOverlay(curve1); //添加到地图中
    map.addOverlay(curve2);
    map.addOverlay(curve3);
    map.addOverlay(curve4);
    map.addOverlay(curve5);
    map.addOverlay(curve6);
    map.addOverlay(curve7);
    map.addOverlay(curve8);
    //curve1.enableEditing(); //开启编辑功能

    var myIcon1 = new BMap.Icon("../images/eightGk1.png", new BMap.Size(41, 41));
    var myIcon2 = new BMap.Icon("../images/eightGk2.png", new BMap.Size(41, 41));
    var marker = new BMap.Marker(jininggangPosition, {icon: myIcon1});
    var marker1 = new BMap.Marker(qingdaogangPosition, {icon: myIcon2});
    var marker2 = new BMap.Marker(xiamengangPosition, {icon: myIcon2});
    var marker3 = new BMap.Marker(ningbogangPosition, {icon: myIcon2});
    var marker4 = new BMap.Marker(shanghaigangPosition, {icon: myIcon2});
    var marker5 = new BMap.Marker(guangzhougangPosition, {icon: myIcon2});
    var marker6 = new BMap.Marker(zhanjianggangPosition, {icon: myIcon2});
    var marker7 = new BMap.Marker(tianjingangPosition, {icon: myIcon2});
    var marker8 = new BMap.Marker(daliangangPosition, {icon: myIcon2});
    map.addOverlay(marker);
    map.addOverlay(marker1);
    map.addOverlay(marker2);
    map.addOverlay(marker3);
    map.addOverlay(marker4);
    map.addOverlay(marker5);
    map.addOverlay(marker6);
    map.addOverlay(marker7);
    map.addOverlay(marker8);

    marker.addEventListener("click", function(){
        //alert("您点击了济宁港标注");
        window.location='eightPort1.html'
    });
}