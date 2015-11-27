/**
 * Created by aff on 6/11/15.
 */
var click;

jQuery(document).ready(function(){

    click=0;
    //$("#myP").click(function () {
    //    $(".menu--mobile__item").hide();
    //});
    //jQuery("#myP").click(function(){
    //    jQuery(".menu--mobile__item").toggle();
    //});
    jQuery("#myP").click(function(){
        if(click==0){
            jQuery(".menu--mobile").css({'opacity': '1.0'});
            jQuery(".menu--mobile__item").show();

            click =1;
        }
        else {
            jQuery(".menu--mobile").css({'opacity': '0.2'});
            jQuery(".menu--mobile__item").hide();

            click=0;
        }


    });
    //
    //$(function () {
    //    $('#picture-accordion').on('shown.bs.collapse', function (e) {
    //        var offset = $('.panel.panel-default > .panel-collapse.in').offset();
    //        if(offset) {
    //            $('html,body').animate({
    //                scrollTop: $('.panel-title a').offset().top -50
    //            });
    //        }
    //    });
    //});
    $(function () {
        $('#picture-accordion').on('shown.bs.collapse', function (e) {
            var offset = $(this).find('.collapse.in').prev('.panel-heading');
            if(offset) {
                $('html,body').animate({
                    scrollTop: $(offset).offset().top -20
                }, 100);
            }
        });
    });

});