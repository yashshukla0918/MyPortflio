$(document).ready(function () {
    $("#project-container").html('<img src="components/img/gif5.gif" alt="Loading.." id="load">');

    //console.log($('.intro').width());
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
        $("#load").css("filter",data['load']);
        x=data['x'];
    }

    var ur = "https://script.google.com/macros/s/AKfycbwi1CH-KOYCOiyo7IjUOjVeHqfcH3uFVMf-bCkwXQVsmI51oAjI/exec";
    var applications={};
    $.post(ur, { req: 'r' }, function (data, status) {
        $("#load").remove();
        var i=0;
        data.forEach(element => {
            var iid=Math.floor(Math.random() * 1000) + 1;
            applications['link']=element['link'];
            applications['name']=element['name'];
            applications['t1']=element['text1'];
            applications['t2']=element['text2'];
            applications['description']=element['description'];
            localStorage.setItem('app'+i.toString(), JSON.stringify(applications));
            //$("#link").append("<li><a class='link' data-description='" + element['description'] + "' id='" + element['link'] + "' onclick='show(this);' >" + element['name'] + "</a></li>");
            var c1=ranColor();
            var c2=ranColor();
            
            $("#project-container").append('<div class="column"><div class="card proj-card"><center><span  class="proj-heading ">'+element["name"]+'</span><br><span id="'+iid+'" class="des-svg"></span></center><div><a class="btn btn-primary proj-btn" href="pages/projects.html?id='+'app'+i.toString()+'" >View Project</a></div></div> </div>');
            $('#'+iid).html(svg(color1=c1,
            color2=c2,
            
            text1=element['text1'],
            text2=element['text2'],
            t1col=lightOrDark(c1),
            t2col=lightOrDark(c2)
            
            ));
            i++;
        });
        var body=document.getElementsByTagName('body')[0];
        var color=document.defaultView.getComputedStyle(body, null).getPropertyValue('background-color');
        console.log(lightOrDark(color));
        $('.proj-heading').css('color',lightOrDark(color).toString());

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


   
// Test code

// for(var i=0;i<10;i++){
//     $("#project-container").append('<div class="column"><div class="card proj-card"><center><span class="proj-heading">Application Name</span><br><span class="des-svg"></span></center><div><a class="btn btn-primary proj-btn" >See Project</a></div></div> </div>');
// }
// $('.des-svg').html(svg(color1='red',color2='blue',text1='test',text2='100%'));

// 



    $(window).resize(function(){
        if(x==0){
            // console.log('light');
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
            $("#load").css("filter", "invert(80%)");
            $("#information").css("color","white");
            $(".proj-heading").css("color","white");
            d['remove'] = "navbar-default";
            d['add'] = "navbar-inverse";
            d['load']='invert(80%)';
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
            $(".proj-heading").css("color","black");
            $("#sidebar").css("background-color", "white");
            $("#main_nav").removeClass();
            $("#load").css("filter", "invert(0%)");
            $("#main_nav").addClass("navbar navbar-default");
            $("body").css("background-color", "white");
            $(".link").css("color", "black");
            $("#information").css("color","rgb(0, 0, 0,0.8)");
            d['remove'] = "navbar-inverse";
            d['load']='invert(0%)';
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


function svg(color1='white',color2='black',text1="Technology",text2='name',t1col='black',t2col='black'){
    return ' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="114" height="20" role="img" aria-label="custom svg"><title>custom svg</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="114" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="69" height="20" fill="'+color1+'"/><rect x="69" width="45" height="20" fill="'+color2+'"/><rect width="114" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="355" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="590">'+text1+'</text><text x="355" y="140" transform="scale(.1)" fill="'+t1col+'" textLength="590">'+text1+'</text><text aria-hidden="true" x="905" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">'+text2+'</text><text x="905" y="140" transform="scale(.1)" fill="'+t2col+'" textLength="350">'+text2+'</text></g></svg>';
}


function lightOrDark(color) {

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
  
      // If HEX --> store the red, green, blue values in separate variables
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
  
      r = color[1];
      g = color[2];
      b = color[3];
    } 
    else {
  
      // If RGB --> Convert it to HEX: http://gist.github.com/983661
      color = +("0x" + color.slice(1).replace( 
        color.length < 5 && /./g, '$&$&'
      )
               );
  
      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;
    }
  
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );
  
    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {
  
      return 'black';//for light color
    } 
    else {
  
      return 'white';//for dark color
    }
  }


  function ranColor(){
    var color='#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    return color.toString();
  }