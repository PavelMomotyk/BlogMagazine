/**
 * Created by prog on 05.04.15.
 */






$(document).ready(function(){

    $('.coll2').mouseleave(function(){
        $('.coll2').hide();
    });

    $('.MenuButton').click(function(){
        if($('.menuBlock').css("display") !="block"){
       $('.menuBlock').show();}else{$('.menuBlock').hide();}
    });

    $('.NavMenu1' ).hover(function(){
        $('.NavMenu1').css("background", "#56ccc8");
        $('.NavMenu1 img').attr("src", "Image/side_menu/home_icon_selected.png");
        $('.NavMenu1 a').css("color", "white");
        $('.coll2').show();

    },function(){
        $('.NavMenu1 img').attr("src", "Image/side_menu/home_icon.png");
        $('.NavMenu1').css("background", "white");
        $('.NavMenu1 a').css("color", "black");


    });
    $('.NavMenu2' ).hover(function(){
        $('.NavMenu2').css("background", "#56ccc8");
        $('.NavMenu2 img').attr("src", "Image/side_menu/note_icon_selected.png");
        $('.NavMenu2 a').css("color", "white");

    },function(){
        $('.NavMenu2 img').attr("src", "Image/side_menu/note_icon.png");
        $('.NavMenu2').css("background", "white");
        $('.NavMenu2 a').css("color", "black");
    });
    $('.NavMenu3' ).hover(function(){
        $('.NavMenu3').css("background", "#56ccc8");
        $('.NavMenu3 img').attr("src", "Image/side_menu/users_icon_selected.png");
        $('.NavMenu3 a').css("color", "white");

    },function(){
        $('.NavMenu3 img').attr("src", "Image/side_menu/users_icon.png");
        $('.NavMenu3').css("background", "white");
        $('.NavMenu3 a').css("color", "black");
    });
    $('.NavMenu4' ).hover(function(){
        $('.NavMenu4').css("background", "#56ccc8");
        $('.NavMenu4 img').attr("src", "Image/side_menu/trophy_icon_selected.png");
        $('.NavMenu4 a').css("color", "white");
    },function(){
        $('.NavMenu4 img').attr("src", "Image/side_menu/trophy_icon.png");
        $('.NavMenu4').css("background", "white");
        $('.NavMenu4 a').css("color", "black");
    });
    $('.NavMenu5' ).hover(function(){
        $('.NavMenu5').css("background", "#56ccc8");
        $('.NavMenu5 img').attr("src", "Image/side_menu/info_icon_selected.png");
        $('.NavMenu5 a').css("color", "white");
    },function(){
        $('.NavMenu5 img').attr("src", "Image/side_menu/info_icon.png");
        $('.NavMenu5').css("background", "white");
        $('.NavMenu5 a').css("color", "black");
    });
    $('.NavMenu6' ).hover(function(){
        $('.NavMenu6').css("background", "#56ccc8");
        $('.NavMenu6 img').attr("src", "Image/side_menu/email_icon_selected.png");
        $('.NavMenu6 a').css("color", "white");
    },function(){
        $('.NavMenu6 img').attr("src", "Image/side_menu/email_icon.png");
        $('.NavMenu6').css("background", "white");
        $('.NavMenu6 a').css("color", "black");
    });

    $('.social1').hover(function(){
    $('.social1 a').css("color", "#56ccc8");
    $('.social1 img').attr("src","Image/rss/facebook_icon_active.png");
}, function(){
    $('.social1 a').css("color", "black");
    $('.social1 img').attr("src","Image/rss/facebook_icon_normal.png");
});
    $('.social2').hover(function(){
        $('.social2 a').css("color", "#56ccc8");
        $('.social2 img').attr("src","Image/rss/twitter_icon_active.png");
    }, function(){
        $('.social2 a').css("color", "black");
        $('.social2 img').attr("src","Image/rss/twitter_icon_normal.png");
    });
    $('.social3').hover(function(){
        $('.social3 a').css("color", "#56ccc8");
        $('.social3 img').attr("src","Image/rss/g+_icon_active.png");
    }, function(){
        $('.social3 a').css("color", "black");
        $('.social3 img').attr("src","Image/rss/g+_icon_normal.png");
    });
    $('.social4').hover(function(){
        $('.social4 a').css("color", "#56ccc8");
        $('.social4 img').attr("src","Image/rss/rss_icon_active.png");
    }, function(){
        $('.social4 a').css("color", "black");
        $('.social4 img').attr("src","Image/rss/rss_icon_normal.png");
    });
    $('.social5').hover(function(){
        $('.social5 a').css("color", "#56ccc8");
        $('.social5 img').attr("src","Image/rss/pinterest_icon_active.png");
    }, function(){
        $('.social5 a').css("color", "black");
        $('.social5 img').attr("src","Image/rss/pinterest_icon_normal.png");
    });

    $('.FacebookBlock').click(function () {

        $(this).fadeTo("fast", Math.random());

    });
    $(".TwiterBlock").click(function () {
        $(".FacebookBlock").slideToggle("slow");
    });

    $('#mailText').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '1px solid green'});

            } else {
                $(this).css({'border' : '1px solid red'});

            }
        } else {


        }
    });

    $('.bxslider').bxSlider(100);

    $('.videoPost1').hover(function(){
        $('.video').css("display","inherit");
    },function(){
        $('.video').css("display","none");
    });

    $('.read_more').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400, //
            function(){
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '30%'}, 200);
            });
    });
    $('#modal_close, #overlay').click( function(){
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
    });






});
