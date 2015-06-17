var carousel = (function(){
    'use strict';
    
    var options = {
        continuous: true,
        auto: true,
        autoTime: '2000'
    };
    
        //Set the classes if the carousel has 3 or 4 cards
    var smallCarousel = function(x){
        $(x[0]).addClass('left');
        $(x[1]).addClass('front');
        $(x[2]).addClass('right');
        for(var i=0; i<=2; i++){
            x[i].style.visibility = 'visible';
        }
    }
    
    //sets the classes if the carousel has 5 or more classes
    var largeCarousel = function(x){
        $(x[0]).addClass('leftest');
        $(x[1]).addClass('left');
        $(x[2]).addClass('front');
        $(x[3]).addClass('right');
        $(x[4]).addClass('rightest');
        for(var i=0; i<=2; i++){
            x[i].style.visibility = 'visible';
        }
    }
    
    //brings the card at the right to front, left disappears and right is made acc to conditions
    function right(){        
        var newCard;
        var x = $(this).find('.carousel-card');
        
        //IF checks and works only if there is a right card
        if($(this).find('.right').length!=0){
            
            $(this).find('.left').removeClass('left');
        
            $(this).find('.front').addClass('left').removeClass('front');
        
            $(this).find('.right').addClass('front').removeClass('right');
        }
        
        if($(this).find('.front').next('.carousel-card').length==0){
            if(options.continuous===true){
                $(x[0]).addClass('right');
            }
        }
        else{
            newCard = $(this).find('.front').next('.carousel-card')[0];
            $(newCard).addClass('right');
        }
    }
    
    //brings the card at the left to the front, right disappers and left is made acc to conditions
    function left(){        
        var newCard;
        var x = $(this).find('.carousel-card');
        
        //IF checks and works only if there is a left card
        if($(this).find('.left').length!=0){
            
            $(this).find('.right').removeClass('right');
            
            $(this).find('.front').addClass('right').removeClass('front');
        
            $(this).find('.left').addClass('front').removeClass('left');
        }
        
        if($(this).find('.front').prev('.carousel-card').length==0){
            if(options.continuous===true){
                $(x[x.length-1]).addClass('left');
            }
        }
        else{
            newCard = $(this).find('.front').prev('.carousel-card')[0];
            $(newCard).addClass('left');
        }
    }
    
    //same as RIGHT, but used when cards are more than 4
    function rightLarge(){
        var smaller = right.bind(this);
        smaller();
        
        var newCard;
        var x = $(this).find('.carousel-card');
        
        $(this).find(".right").removeClass('rightest');
        
        if($(this).find('.right').length!=0){
            $(this).find('.leftest').removeClass('leftest');
            newCard = $(this).find('.left').prev('.carousel-card')[0];
            $(newCard).addClass('leftest');
            if($(this).find('.left').prev('.carousel-card').length==0){
                $(x[x.length-1]).addClass('leftest');
            }
            
            if($(this).find('.right').next('.carousel-card').length==0){
                if(options.continuous==true){
                    $(x[0]).addClass('rightest');
                }
            }
            else{
                newCard = $(this).find('.right').next('.carousel-card')[0];
                $(newCard).addClass('rightest');
            }
        }
        else{
            newCard = $(this).find('.leftest').next('.carousel-card')[0];
            if(!$(newCard).hasClass('left')){
                $(this).find('.leftest').removeClass('leftest');
                newCard = $(this).find('.left').prev('.carousel-card')[0];
                $(newCard).addClass('leftest');
            }
        }
    }
    
    //same as LEFT, but used when cards are more than 4
    function leftLarge(){
        var smaller = left.bind(this);
        smaller();

        var newCard;
        var x = $(this).find('.carousel-card');
        
        $(this).find(".left").removeClass('leftest');
        
        if($(this).find('.left').length!=0){
            $(this).find('.rightest').removeClass('rightest');
            newCard = $(this).find('.right').next('.carousel-card')[0];
            $(newCard).addClass('rightest');
            if($(this).find('.right').next('.carousel-card').length==0){
                $(x[0]).addClass('rightest');
            }
            
            if($(this).find('.left').prev('.carousel-card').length==0){
                if(options.continuous==true){
                    $(x[x.length-1]).addClass('leftest');
                }
            }
            else{
                newCard = $(this).find('.left').prev('.carousel-card')[0];
                $(newCard).addClass('leftest');
            }
        }
        else{
            newCard = $(this).find('.rightest').prev('.carousel-card')[0];
            if(!$(newCard).hasClass('right')){
                $(this).find('.rightest').removeClass('rightest');
                newCard = $(this).find('.right').next('.carousel-card')[0];
                $(newCard).addClass('rightest');
            }
        }
    }

    $.fn.carousel = function(){
        var x = $(this).find('.carousel-card');
        
        if(x.length<5){
            smallCarousel(x);
            $(this).find('.right-click')[0].addEventListener('click',right.bind(this));
            $(this).find('.left-click')[0].addEventListener('click',left.bind(this));
        }
        else{
            largeCarousel(x);
            $(this).find('.right-click')[0].addEventListener('click',rightLarge.bind(this));
            $(this).find('.left-click')[0].addEventListener('click',leftLarge.bind(this));
        }
        
        //This snippet automatically changes the cards after the interval specified
        if((options.continuous==true)&&(options.auto==true)){
        var auto = setInterval(rightLarge.bind(this),options.autoTime);
        }
        
        $(this).mouseenter(function(){
            clearInterval(auto);
        });
        $(this).mouseleave(function(){
            auto = setInterval(rightLarge.bind(this),options.autoTime);
        });
    }
})();

$('#c1').carousel();
$('#c2').carousel();