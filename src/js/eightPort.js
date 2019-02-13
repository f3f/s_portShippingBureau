/**
 * Created by Jeason on 2017/3/10.
 */
function CreateMap(id, obj) {
    // 百度地图API功能
    var map = new BMap.Map(id);
    var point = new BMap.Point(obj.centerPoint.point[0], obj.centerPoint.point[1]);
    var myIcon = new BMap.Icon("../images/localtionIcon.png", new BMap.Size(49, 49));
    map.centerAndZoom(point, 11);
    //定义标注样式
    var FireIcon = new BMap.Icon("../images/locIcon0.png", new BMap.Size(59, 88));
    var AmbulanceIcon = new BMap.Icon("../images/locIcon2.png", new BMap.Size(59, 88));
    var locIcon3Icon = new BMap.Icon("../images/locIcon3.png", new BMap.Size(59, 88));
    var ArrowIcon = new BMap.Icon("../images/arrowIcon.png", new BMap.Size(22, 14));
    /*// 创建中心标注
     var marker = new BMap.Marker(point, {icon: myIcon});
     map.addOverlay(marker);*/
    //增加折线
    var polyline = new BMap.Polyline([
        new BMap.Point(obj.Resources[0].point[0], obj.Resources[0].point[1]),
        new BMap.Point(obj.Resources[1].point[0], obj.Resources[1].point[1]),
        new BMap.Point(obj.Resources[2].point[0], obj.Resources[2].point[1]),
        new BMap.Point(obj.Resources[3].point[0], obj.Resources[3].point[1]),
        new BMap.Point(obj.Resources[4].point[0], obj.Resources[4].point[1]),
        new BMap.Point(obj.Resources[5].point[0], obj.Resources[5].point[1])
    ], {strokeColor: "#3579f8", strokeWeight: 2, strokeOpacity: 1, strokeStyle: "dashed"});   //创建折线
    map.addOverlay(polyline);   //增加折线
    map.enableScrollWheelZoom();
    //设置地图主题颜色
    map.setMapStyle({
        styleJson: [{
            "label": "水域",
            "featureType": "water",
            "elementType": "all",
            "stylers": {"color": "#000c26"}
        }, {
            "label": "公路填充",
            "featureType": "highway",
            "elementType": "geometry.fill",
            "stylers": {"color": "#1d4794"}
        }, {
            "label": "公路线条",
            "featureType": "highway",
            "elementType": "geometry.stroke",
            "stylers": {"color": "#1d4794"}
        }, {
            "label": "主干道填充",
            "featureType": "arterial",
            "elementType": "geometry.fill",
            "stylers": {"color": "#113766"}
        }, {
            "label": "主干道线条",
            "featureType": "arterial",
            "elementType": "geometry.stroke",
            "stylers": {"color": "#113766"}
        }, {
            "label": "局部?",
            "featureType": "local",
            "elementType": "geometry",
            "stylers": {"color": "#08375a"}
        }, {
            "label": "陆地",
            "featureType": "land",
            "elementType": "all",
            "stylers": {"color": "#051f44"}
        }, {
            "label": "铁路填充",
            "featureType": "railway",
            "elementType": "geometry.fill",
            "stylers": {"color": "#0c1340"}
        }, {
            "label": "铁路线条",
            "featureType": "railway",
            "elementType": "geometry.stroke",
            "stylers": {"color": "#0c1340"}
        }, {
            "label": "建筑填充",
            "featureType": "building",
            "elementType": "geometry.fill",
            "stylers": {"color": "#021736"}
        }, {
            "label": "建筑默认",
            "featureType": "building",
            "elementType": "geometry",
            "stylers": {"color": "#021736"}
        }, {
            "label": "标签填充",
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": {"color": "#3b80c2"}
        }, {
            "label": "标签线条",
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": {"weight": "normal", "color": "#000000"}
        }, {
            "label": "绿化",
            "featureType": "green",
            "elementType": "geometry",
            "stylers": {"color": "#154756"}
        }, {
            "label": "边界",
            "featureType": "boundary",
            "elementType": "all",
            "stylers": {"color": "#154756"}
        }, {"label": "人造物", "featureType": "manmade", "elementType": "all", "stylers": {"color": "#05365a"}}]

    });
    var jMax, jMin, wMax, wMin, arc;
    for (var i = 0; i < 5; i++) {
        jMax = Math.max(obj.Resources[i].point[0], obj.Resources[i + 1].point[0]);
        jMin = Math.min(obj.Resources[i].point[0], obj.Resources[i + 1].point[0]);
        wMax = Math.max(obj.Resources[i].point[1], obj.Resources[i + 1].point[1]);
        wMin = Math.min(obj.Resources[i].point[1], obj.Resources[i + 1].point[1]);
        arc = getAngle(obj.Resources[i].point[0], obj.Resources[i].point[1], obj.Resources[i + 1].point[0], obj.Resources[i + 1].point[1]);
        var pin = new BMap.Point((jMin + (jMax - jMin) / 2), (wMin + (wMax - wMin) / 2));
        var arrowMarker = new BMap.Marker(pin, {icon: ArrowIcon, rotation: (arc + 276)});
        map.addOverlay(arrowMarker);
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
    for (var i = 0; i < obj.Resources.length; i++) {
        if (obj.Resources[i].type == "Fire") {
            Markers.push(addFireMarker(obj.Resources[i].point));
        } else if (obj.Resources[i].type == "Ambulance") {
            Markers.push(addAmbulanceMarker(obj.Resources[i].point));
        } else if (obj.Resources[i].type == "locIcon3") {
            Markers.push(addlocIcon3Marker(obj.Resources[i].point));
        }
    }
    function addFireMarker(point) {
        var pin = new BMap.Point(point[0], point[1]);
        var FireMarker = new BMap.Marker(pin, {icon: FireIcon});
        map.addOverlay(FireMarker);
        addClickHandler1(FireMarker);
        return FireMarker;
    }

    function addAmbulanceMarker(point) {
        var pin = new BMap.Point(point[0], point[1]);
        var AmbulanceMarker = new BMap.Marker(pin, {icon: AmbulanceIcon});
        map.addOverlay(AmbulanceMarker);
        addClickHandler2(AmbulanceMarker);
        return AmbulanceMarker;

    }

    function addlocIcon3Marker(point) {
        var pin = new BMap.Point(point[0], point[1]);
        var locIcon3Marker = new BMap.Marker(pin, {icon: locIcon3Icon});
        map.addOverlay(locIcon3Marker);
        addClickHandler3(locIcon3Marker);
        return locIcon3Marker;

    }

    function addClickHandler1(marker) {
        marker.addEventListener("click", function () {
            show('cover','eightPortPop1');
        });
    }
    function addClickHandler2(marker) {
        marker.addEventListener("click", function () {
            show('cover','eightPortPop2');
        });
    }
    function addClickHandler3(marker) {
        marker.addEventListener("click", function () {
            show('cover','eightPortPop3');
        });
    }
}