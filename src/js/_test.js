
(function () {
    var app = new JiningHarbourApp();

    function window_resizeHandler() {
        app.resize(
            //window.innerWidth, window.innerHeight - 3
            document.body.scrollWidth,
            document.body.scrollHeight - 3
        );
    }

    function window_blurHandler() {
        app.stop();
    }

    function window_focusHandler() {
        app.start();
    }

    app.on("zuoyequ", function(e){
        //window.location='singleOperat.html';
        app.changeScene(2);
        $(".footer").hide(300);
    });
    app.on("cangku", function(e){
        show('cover','pop_ck');
    });
    app.on("matou", function(e){
        show('cover','pop_mt');
    });
    app.on("qiye", function(e){
        show('cover','pop_qy');
    });
    app.on("chuguan", function(e){
        show('cover','pop_cg');
    });
    app.on("duichang", function(e){
        show('cover','pop_dc');
    });
    app.on("chuanbo", function(e){
        show('cover','pop_czxx');
    });

    app.on("chuqiguan", function(e){
        show('cover','pop_cqg');
    });
    app.on("chuyouguan", function(e){
        show('cover','pop_cyg');
    });
    app.on("huagongchang", function(e){
        show('cover','pop_hgc');
    });
    app.on("weixianpin", function(e){
        show('cover','pop_wxp');
    });
    app.on("sensor", function(e){
        show('cover','pop_gd');
    });

    window.addEventListener("resize", window_resizeHandler);
    window.addEventListener("blur", window_blurHandler);
    window.addEventListener("focus", window_focusHandler);

    document.getElementById("map3d").appendChild(app.domElement);
    window_resizeHandler();

    app.appear();

    //app.changeScene(2);
    window.app = app;
})();