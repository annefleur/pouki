/**
 * Created by aff on 27/10/15.
 */
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop || document.documentElement.scrollTop > 350) {
        document.getElementById("myP").className = "menu--mobile--scroll";
        document.getElementById("lg-top").className = "language--hidden";

    } else {
        document.getElementById("myP").className = "menu--mobile";
        document.getElementById("lg-top").className = "language__selector";
    }
}