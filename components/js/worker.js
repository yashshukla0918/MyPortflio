$(document).ready(function () {
    console.log($('.intro').width());
    var x = 0;
    if (localStorage.getItem("mode") != null || localStorage.getItem("mode") != undefined) {
        var data = JSON.parse(localStorage.getItem("mode"));
        $("#main_nav").removeClass(data['remove']);
        $("#main_nav").addClass(data['add']);
        $("body").css("background-color", data['body_color']);
        $("#sidebar").css("background-color", data['sidebar_color']);
        $(".link").css("color", data['link']);
        $("#information").css("color", data['info']);
        $(".para").css("background-color", data['para-bg']);
        $(".para").css("color", data['para-col']);
        x=data['x'];
    }
    var ur = "https://script.google.com/macros/s/AKfycbwi1CH-KOYCOiyo7IjUOjVeHqfcH3uFVMf-bCkwXQVsmI51oAjI/exec";
    var applications={};
    $.post(ur, { req: 'r' }, function (data, status) {
        $("#load").remove();
        data.forEach(element => {
            applications['link']=element['link'];
            applications['name']=element['name'];
            applications['description']=element['description'];
            localStorage.setItem(element['link'].toString(), JSON.stringify(applications));
            $("#link").append("<li><a class='link' data-description='" + element['description'] + "' id='" + element['link'] + "' onclick='show(this);' >" + element['name'] + "</a></li>");
        });
    });


   
    if(x==0){
        if($('.intro').width()<=542){
            $(".para").css("color", "black");
        }
        else{
            $(".para").css("color", "white");
        }
    }
    else{
        if($('.intro').width()<=542){
            $(".para").css("color", "white");
        }
        else{
            $(".para").css("color", "white");
        }   
    }




    $(window).resize(function(){
        if(x==0){
            console.log('light');
        if($('.intro').width()<=542){
            $(".para").css("color", "black");
        }
        else{
            $(".para").css("color", "white");
        }}
        else{
            console.log('dark');
            if($('.intro').width()<=542){
                $(".para").css("color", "white");
            }
            else{
                $(".para").css("color", "white");
            }   
        }
    });
    $("#colormode").click(function () {
        var d = {};
        if (x == 0) {
            x = 1;
            $(".para").css("background-color", "rgba(255, 255, 255, 0.2)");
            $(".para").css("color", "white");
            $("#main_nav").removeClass("navbar-default");
            $("#main_nav").addClass("navbar-inverse");
            $("body").css("background-color", "rgb(0, 0, 0,0.8)");
            $("#sidebar").css("background-color", "rgb(0, 0, 10,0.8)");
            $(".link").css("color", "white");
            $("#information").css("color","white");
            d['remove'] = "navbar-default";
            d['add'] = "navbar-inverse";
            d['info'] = "white";
            d['body_color'] = "rgb(0, 0, 0,0.8)";
            d['sidebar_color'] = "rgb(0, 0, 10,0.8)";
            d['link'] = "white";
            d['para-col'] = "white";
            d['para-bg'] = "rgba(255, 255, 255, 0.2)";
            d['x']=1;
            localStorage.setItem("mode", JSON.stringify(d));
        } else {
            x = 0;
            $(".para").css("background-color", "rgba(0, 0, 0, 0.1)");
            if($('.intro').width()<=542){
                $(".para").css("color", "black");
                d['para-col'] = "black";
            }
            else{
                $(".para").css("color", "white");
                d['para-col'] = "white";
            }
            $("#sidebar").css("background-color", "white");
            $("#main_nav").removeClass();
            $("#main_nav").addClass("navbar navbar-default");
            $("body").css("background-color", "white");
            $(".link").css("color", "black");
            $("#information").css("color","rgb(0, 0, 0,0.8)");
            d['remove'] = "navbar-inverse";
            d['add'] = "navbar-default";
            d['body_color'] = "white";
            d['sidebar_color'] = "white";
            d['info'] = "rgb(0, 0, 0,0.8)";
            d['link'] = "black";
            d['para-bg'] = "rgba(0, 0, 0, 0.1)";
            d['x']=0;
            localStorage.setItem("mode", JSON.stringify(d));
        }
    });
    $("#mob-1").click(function () {
        $("#phn-1").css("width", "460px");
        $("#phn-1").css("height", "877px");
        $("#screen-1").css("width", "400px");
        $("#screen-1").css("height", "677px");
    });
    $("#tab-1").click(function () {
        $("#phn-1").css("width", "1048px");
        $("#phn-1").css("height", "877px");
        $("#screen-1").css("width", "900px");
        $("#screen-1").css("height", "700px");
    });
    var y = 0;
    $("#sidebar-toggle").click(function () {
        if (y == 0) {
            y = 1;
            $("#sidebar-container").animate({ width: "250px" });
            $("#icon").removeClass("glyphicon-arrow-right");
            $("#icon").addClass("glyphicon-arrow-left");
        } else {
            y = 0;
            $("#sidebar-container").animate({ width: "100px" });
            $("#icon").removeClass("glyphicon-arrow-left");
            $("#icon").addClass("glyphicon-arrow-right");
        }
        $("#sidebar").slideToggle();
    });
    $('screen-1').contextmenu(function(){
        alert('invalid Function');
    });
    $("#information").click(function(){
        $("#modal-body").html(JSON.parse(localStorage.getItem($("#information").attr('data-id').toString()))['description']);
    });
    // $("#toogleb").click(function(){
    //     setTimeout(300);
    //     console.log();
    // });
    // $(document).scroll(function(){
    //     var offseth=$(window).scrollTop();
    //     if(offseth>=$("#sidebar-container").offset().top || $('.collapse').offset().top >= 480){
    //         $("#sidebar-container").css("z-index",'-1');
    //     }
    //     else{
    //         $("#sidebar-container").css("z-index",'1');
    //     }
    // });
    
});
function show(button) {
    document.getElementById('information').setAttribute("data-id",button.id.toString());
    document.getElementById('information').style.display='block';
    //document.getElementById("web-1").href = button.id;
    document.getElementById("screen-1").style.backgroundImage='url(./components/img/gif3.gif)';
    document.getElementById("screen-1").src = button.id.toString();
}
