jQuery(document).ready(listo);

function listo() {
    /* alert("hola mundo") */
    jQuery(".menu__hamburguer").click(function(e){
        e.preventDefault();
        jQuery(".menu__list").toggleClass("open");
        jQuery(".menu__hamburguer i").toggleClass("fa-times");
    });

    jQuery(".menu__list a").click(function() {
        jQuery(".menu__list").removeClass("open");
        jQuery(".menu__hamburguer i").removeClass("fa-times");
        var dev = jQuery(this).attr("href");
        jQuery("html, body").animate({
            "scrollTop": jQuery(dev).offset().top -70
        })
    })
}  
