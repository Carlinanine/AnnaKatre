
jQuery('document').ready(function($){
   
    var menuBtn = $('.menu'),
        menuq = $('.opciones ul');
   
    menuBtn.click(function() {
                 
        if ( menuq.hasClass('show') ) {
           
            menuq.removeClass('show');
        }  else {
           
        menuq.addClass('show');      
        }
                  });
});
