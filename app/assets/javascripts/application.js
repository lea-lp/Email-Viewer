// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//


//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_self
//= require_tree .


// alert($cat.prop('nodeName'));


$(document).ready(function() {

    $(".container:eq(1) .card").hide();

    $(".container:eq(1) > ul:eq(0) > li").on('click', function(){
        $(".container:eq(1) .card").hide();
        $(this).next().toggle();
    });

    $(".drop").hide();

    $("nav > div > img").on('click', function(){
        $(".drop").toggle();
    });

    $("#nav_1").on('click', function(){
        $("#log_in").show();
    });

    $("#nav_2").on('click', function(){
        $("#sign_up").show();
    });

    $("#nav_3").on('click', function(){
        $("#log_out").show();
    });

    $("#nav_4").on('click', function(){
        $("#new_task").show();
    });


    $(".close").on('click', function(){
        $(".modal").hide();
    });




    var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
        $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
        indexImg = $img.length - 1, // on définit l'index du dernier élément
        i = 0, // on initialise un compteur
        $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    
    $img.css('display', 'none'); // on cache les images
    $currentImg.css('display', 'block'); // on affiche seulement l'image courante
    
    $carrousel.append('<div class="controls"> <span class="prev btn btn-start-order">Precedent</span> <span class="next btn btn-start-order">Suivant</span> </div>');
    
    $('.next').click(function(){ // image suivante
    
        i++; // on incrémente le compteur
    
        if( i <= indexImg ){
            $img.css('display', 'none'); // on cache les images
            $currentImg = $img.eq(i); // on définit la nouvelle image
            $currentImg.css('display', 'block'); // puis on l'affiche
        }
        else{
            i = indexImg;
        }
    
    });
    
    $('.prev').click(function(){ // image précédente
    
        i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"
    
        if( i >= 0 ){
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        }
        else{
            i = 0;
        }
    
    });
    
    function slideImg(){
        setTimeout(function(){ // on utilise une fonction anonyme
                            
            if(i < indexImg){ // si le compteur est inférieur au dernier index
            i++; // on l'incrémente
        }
        else{ // sinon, on le remet à 0 (première image)
            i = 0;
        }
    
        $img.css('display', 'none');
    
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    
        slideImg(); // on oublie pas de relancer la fonction à la fin
    
        }, 7000); // on définit l'intervalle à 7000 millisecondes (7s)
    }
    
    slideImg(); // enfin, on lance la fonction une première fois



// ....................................................................................................




    // var email = ["kag@hdui.fr", "esfsdfg@hdui.fr", "fsdfdsg@hdui.fr", "kagrgrgggg@hdui.fr", "kafezfezf@hdui.fr"];
    

    // $(".id_mail").on('click', function(){
    //     email.forEach(function(element) {
    //         console.log(element);
    //     })}); 



});
