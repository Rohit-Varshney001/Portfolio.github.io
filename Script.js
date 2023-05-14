$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toogle menu button
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });    
    $('.menu li a').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
    
    //Scroll-up-btn
    $('.scroll-up-btn').click(function(){
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
    });

});


