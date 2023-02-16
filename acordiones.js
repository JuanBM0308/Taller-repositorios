$(document).ready(function(){

    $(".contenedor_nav_responsive").hide()

    $(".boton_responsive").on("click", function(){

        $(".contenedor_nav_responsive").slideToggle(500)

        d3.slideToggle(500)

    })

    $(".informacion").hide()

    $(".acordion").on("click", function(){

        let ind = $(".acordion").index(this)

        let d3 = $(".informacion").eq(ind)

        d3.slideToggle(500)

    })

})