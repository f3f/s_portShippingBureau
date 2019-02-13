/**
 * Created by ly on 2017/3/7.
 */
$(function(){
    var obj = {
        centerPoint: {
            point: [116.841898, 34.856751]
        },
        Resources: [{
            point: [116.722316, 35.098097],
            type: "Fire"
        }, {
            point: [116.792456, 35.020566],
            type: "Ambulance"
        }, {
            point: [116.880993, 34.949588],
            type: "Fire"
        }, {
            point: [116.979303, 34.87997],
            type: "Fire"
        }, {
            point: [116.829825, 35.114633],
            type: "Fire"
        }, {
            point: [116.868919, 35.071158],
            type: "Fire"
        }, {
            point: [116.925261, 35.00401],
            type: "Ambulance"
        }, {
            point: [116.986202, 34.951008],
            type: "Fire"
        }, {
            point: [117.178224, 34.671233],
            type: "Fire"
        }, {
            point: [117.189722, 34.585687],
            type: "Fire"
        }, {
            point: [117.27136, 34.545735],
            type: "Fire"
        }, {
            point: [117.212719, 34.719669],
            type: "Fire"
        }, {
            point: [117.288608, 34.675983],
            type: "Ambulance"
        }, {
            point: [117.356448, 34.61136],
            type: "Fire"
        }]
    }
    CreateMap("bMap", obj);

    $(".bMapSearch .bMapSearchRadio:first-child dt").click(function(){
        $(this).parent(".bMapSearchRadio").addClass("active").siblings().removeClass("active");
        var obj = {
            centerPoint: {
                point: [116.841898, 34.856751]
            },
            Resources: [{
                point: [116.722316, 35.098097],
                type: "Fire"
            }, {
                point: [116.792456, 35.020566],
                type: "Ambulance"
            }, {
                point: [116.880993, 34.949588],
                type: "Fire"
            }, {
                point: [116.979303, 34.87997],
                type: "Fire"
            }, {
                point: [116.829825, 35.114633],
                type: "Fire"
            }, {
                point: [116.868919, 35.071158],
                type: "Fire"
            }, {
                point: [116.925261, 35.00401],
                type: "Ambulance"
            }, {
                point: [116.986202, 34.951008],
                type: "Fire"
            }, {
                point: [117.178224, 34.671233],
                type: "Fire"
            }, {
                point: [117.189722, 34.585687],
                type: "Fire"
            }, {
                point: [117.27136, 34.545735],
                type: "Fire"
            }, {
                point: [117.212719, 34.719669],
                type: "Fire"
            }, {
                point: [117.288608, 34.675983],
                type: "Ambulance"
            }, {
                point: [117.356448, 34.61136],
                type: "Fire"
            }]
        }
        CreateMap("bMap", obj);
        $(".BMap_Marker").removeClass("animationHx");
    })
    $(".bMapSearch .bMapSearchRadio:last-child dt").click(function(){
        $(this).parent(".bMapSearchRadio").addClass("active").siblings().removeClass("active");
        var obj = {
            centerPoint: {
                point: [116.841898, 34.856751]
            },
            Resources: [{
                point: [117.156448, 34.76136],
                type: "gangkou"
            }, {
                point: [116.792456, 35.020566],
                type: "gangkou"
            }, {
                point: [116.880993, 34.949588],
                type: "gangkou"
            }, {
                point: [116.979303, 34.87997],
                type: "gangkou"
            }, {
                point: [116.829825, 35.114633],
                type: "gangkou"
            }]
        }
        CreateMap("bMap", obj);
        $(".BMap_Marker").addClass("animationHx");
    })

    var obj1 = {
        centerPoint: {
            point: [116.879268, 35.006848]
        },
        Resources: [{
            point: [116.656201, 35.245861],
            type: "Ambulance"
        }, {
            point: [116.740138, 35.126915],
            type: "Ambulance"
        }, {
            point: [116.756236, 35.044684],
            type: "Ambulance"
        }, {
            point: [116.891916,34.994548],
            type: "Ambulance"
        }, {
            point: [116.881568, 34.888498],
            type: "Ambulance"
        }, {
            point: [117.048293, 34.892288],
            type: "Ambulance"
        }]
    }
    CreateMap1("bMapPop", obj1);

})

function CreateMap(id, obj) {
    // 百度地图API功能
    //console.log(obj);
    var map = new BMap.Map(id);
    var point = new BMap.Point(obj.centerPoint.point[0], obj.centerPoint.point[1]);
    map.centerAndZoom(point, 11);
    //定义标注样式
    var FireIcon = new BMap.Icon("../images/yellowIcon.png", new BMap.Size(49, 49));
    var AmbulanceIcon = new BMap.Icon("../images/whiteIcon.png", new BMap.Size(49, 49));
    var gangkouIcon = new BMap.Icon("../images/eightGk2.png", new BMap.Size(41, 41));
    /*// 创建中心标注
     var marker = new BMap.Marker(point, {icon: myIcon});
     map.addOverlay(marker);*/
    map.enableScrollWheelZoom();
    //设置地图主题颜色
    map.setMapStyle({
        styleJson: [{"label":"水域","featureType":"water","elementType":"all","stylers":{"color":"#000c26"}},{"label":"公路填充","featureType":"highway","elementType":"geometry.fill","stylers":{"color":"#1d4794"}},{"label":"公路线条","featureType":"highway","elementType":"geometry.stroke","stylers":{"color":"#1d4794"}},{"label":"主干道填充","featureType":"arterial","elementType":"geometry.fill","stylers":{"color":"#113766"}},{"label":"主干道线条","featureType":"arterial","elementType":"geometry.stroke","stylers":{"color":"#113766"}},{"label":"局部?","featureType":"local","elementType":"geometry","stylers":{"color":"#08375a"}},{"label":"陆地","featureType":"land","elementType":"all","stylers":{"color":"#051f44"}},{"label":"铁路填充","featureType":"railway","elementType":"geometry.fill","stylers":{"color":"#0c1340"}},{"label":"铁路线条","featureType":"railway","elementType":"geometry.stroke","stylers":{"color":"#0c1340"}},{"label":"建筑填充","featureType":"building","elementType":"geometry.fill","stylers":{"color":"#021736"}},{"label":"建筑默认","featureType":"building","elementType":"geometry","stylers":{"color":"#021736"}},{"label":"标签填充","featureType":"all","elementType":"labels.text.fill","stylers":{"color":"#3b80c2"}},{"label":"标签线条","featureType":"all","elementType":"labels.text.stroke","stylers":{"weight":"normal","color":"#000000"}},{"label":"绿化","featureType":"green","elementType":"geometry","stylers":{"color":"#154756"}},{"label":"边界","featureType":"boundary","elementType":"all","stylers":{"color":"#154756"}},{"label":"人造物","featureType":"manmade","elementType":"all","stylers":{"color":"#05365a"}}]
    });
    //添加交通路况
    var Markers = [];
    for (var i = 0; i < obj.Resources.length; i++) {
        if (obj.Resources[i].type == "Fire") {
            Markers.push(addFireMarker(obj.Resources[i].point));
        } else if (obj.Resources[i].type == "Ambulance") {
            Markers.push(addAmbulanceMarker(obj.Resources[i].point));
        }else if (obj.Resources[i].type == "gangkou") {
            Markers.push(addgangkouMarker(obj.Resources[i].point));
        }
    }
    function addFireMarker(point) {
        var pin = new BMap.Point(point[0], point[1]);
        var FireMarker = new BMap.Marker(pin, {icon: FireIcon});
        map.addOverlay(FireMarker);
        addClickHandler(FireMarker);
        return FireMarker;

    }

    function addAmbulanceMarker(point) {
        var pin = new BMap.Point(point[0], point[1]);
        var AmbulanceMarker = new BMap.Marker(pin, {icon: AmbulanceIcon});
        map.addOverlay(AmbulanceMarker);
        addClickHandler(AmbulanceMarker);
        return AmbulanceMarker;
    }

    function addgangkouMarker(point) {
        var pin = new BMap.Point(point[0], point[1]);
        var gangkouMarker = new BMap.Marker(pin, {icon: gangkouIcon});
        map.addOverlay(gangkouMarker);
        addClickHandler(gangkouMarker);
        return gangkouMarker;
    }

    function addClickHandler(marker) {
        marker.addEventListener("click", function () {
            if(obj.Resources[0].type == "gangkou"){
                show('cover','pop_gkjk');
            }else{
                show('cover','pop_czxx');
            }
            //console.log(obj.Resources[0].type == "gangkou");
        });
    }
}

function CreateMap1(id, obj1) {
    // 百度地图API功能
    var map1 = new BMap.Map(id);
    var point1 = new BMap.Point(obj1.centerPoint.point[0], obj1.centerPoint.point[1]);

    map1.centerAndZoom(point1, 11);
    //定义标注样式
    var FireIcon1 = new BMap.Icon("../images/yellowIcon.png", new BMap.Size(49, 49));
    var AmbulanceIcon1 = new BMap.Icon("../images/whiteIcon.png", new BMap.Size(49, 49));
    var ArrowIcon1 = new BMap.Icon("../images/arrowIcon.png", new BMap.Size(22, 14));

    //增加折线
    var polyline = new BMap.Polyline([
        new BMap.Point(obj1.Resources[0].point[0], obj1.Resources[0].point[1]),
        new BMap.Point(obj1.Resources[1].point[0], obj1.Resources[1].point[1]),
        new BMap.Point(obj1.Resources[2].point[0], obj1.Resources[2].point[1]),
        new BMap.Point(obj1.Resources[3].point[0], obj1.Resources[3].point[1]),
        new BMap.Point(obj1.Resources[4].point[0], obj1.Resources[4].point[1]),
        new BMap.Point(obj1.Resources[5].point[0], obj1.Resources[5].point[1])
    ], {strokeColor: "#3579f8", strokeWeight: 2, strokeOpacity: 1});   //创建折线
    map1.addOverlay(polyline);   //增加折线
    map1.enableScrollWheelZoom();
    //设置地图主题颜色
    map1.setMapStyle({
        styleJson: [{"label":"水域","featureType":"water","elementType":"all","stylers":{"color":"#000c26"}},{"label":"公路填充","featureType":"highway","elementType":"geometry.fill","stylers":{"color":"#1d4794"}},{"label":"公路线条","featureType":"highway","elementType":"geometry.stroke","stylers":{"color":"#1d4794"}},{"label":"主干道填充","featureType":"arterial","elementType":"geometry.fill","stylers":{"color":"#113766"}},{"label":"主干道线条","featureType":"arterial","elementType":"geometry.stroke","stylers":{"color":"#113766"}},{"label":"局部?","featureType":"local","elementType":"geometry","stylers":{"color":"#08375a"}},{"label":"陆地","featureType":"land","elementType":"all","stylers":{"color":"#051f44"}},{"label":"铁路填充","featureType":"railway","elementType":"geometry.fill","stylers":{"color":"#0c1340"}},{"label":"铁路线条","featureType":"railway","elementType":"geometry.stroke","stylers":{"color":"#0c1340"}},{"label":"建筑填充","featureType":"building","elementType":"geometry.fill","stylers":{"color":"#021736"}},{"label":"建筑默认","featureType":"building","elementType":"geometry","stylers":{"color":"#021736"}},{"label":"标签填充","featureType":"all","elementType":"labels.text.fill","stylers":{"color":"#3b80c2"}},{"label":"标签线条","featureType":"all","elementType":"labels.text.stroke","stylers":{"weight":"normal","color":"#000000"}},{"label":"绿化","featureType":"green","elementType":"geometry","stylers":{"color":"#154756"}},{"label":"边界","featureType":"boundary","elementType":"all","stylers":{"color":"#154756"}},{"label":"人造物","featureType":"manmade","elementType":"all","stylers":{"color":"#05365a"}}]
    });
    var jMax, jMin, wMax, wMin, arc;
    for (var i = 0; i < 5; i++) {
        jMax = Math.max(obj1.Resources[i].point[0], obj1.Resources[i + 1].point[0]);
        jMin = Math.min(obj1.Resources[i].point[0], obj1.Resources[i + 1].point[0]);
        wMax = Math.max(obj1.Resources[i].point[1], obj1.Resources[i + 1].point[1]);
        wMin = Math.min(obj1.Resources[i].point[1], obj1.Resources[i + 1].point[1]);
        arc = getAngle(obj1.Resources[i].point[0], obj1.Resources[i].point[1], obj1.Resources[i + 1].point[0], obj1.Resources[i + 1].point[1]);
        var pin = new BMap.Point((jMin + (jMax - jMin) / 2), (wMin + (wMax - wMin) / 2));
        var arrowMarker = new BMap.Marker(pin, {icon: ArrowIcon1, rotation: (arc + 276)});
        map1.addOverlay(arrowMarker);
    }
    function getAngle(lat_a, lng_a, lat_b, lng_b) {
        var y = Math.sin(lng_b - lng_a) * Math.cos(lat_b);
        var x = Math.cos(lat_a) * Math.sin(lat_b) - Math.sin(lat_a) * Math.cos(lat_b) * Math.cos(lng_b - lng_a);
        var brng = Math.atan2(y, x);
        brng = 180 / Math.PI * brng;
        if (brng < 0)brng = brng + 360;
        return brng;
    }

    //添加marker
    var Markers = [];
    for (var i = 0; i < obj1.Resources.length; i++) {
        if (obj1.Resources[i].type == "Fire") {
            Markers.push(addFireMarker(obj1.Resources[i].point));
        } else if (obj1.Resources[i].type == "Ambulance") {
            Markers.push(addAmbulanceMarker(obj1.Resources[i].point));
        }
    }
    function addFireMarker(point) {
        var pin = new BMap.Point(point[0], point[1]);
        var FireMarker = new BMap.Marker(pin, {icon: FireIcon1});
        map1.addOverlay(FireMarker);
        addClickHandler(FireMarker);
        return FireMarker;
    }

    function addAmbulanceMarker(point) {
        var pin = new BMap.Point(point[0], point[1]);
        var AmbulanceMarker = new BMap.Marker(pin, {icon: AmbulanceIcon1});
        map1.addOverlay(AmbulanceMarker);
        addClickHandler(AmbulanceMarker);
        return AmbulanceMarker;

    }

    function addClickHandler(marker) {
        marker.addEventListener("click", function () {
            //console.log(marker)
            //hide('cover','pop_czxx');
            show('cover','pop_czgj');
        });
    }
}
