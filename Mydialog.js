//small jquery plugin for open the target dialog window
(function($){
   $.fn.mydialog = function(){
        var $this = $(this);     
        var options =  ['Remove','No'],
            currentPage = $.mobile.activePage,
            menuPage = $( '<div data-role=\'dialog\' data-theme=\'a\'>' +
                        '<div data-role=\'header\' data-theme=\'b\'>' +
                            '<div class=\'ui-title\'>Remove Item?</div>'+
                        '</div>'+
                        '<div data-role=\'content\' data-theme=\'c\'><ul data-role=\'listview\' data-inset=\'true\'></ul></div>'+
                    '</div>' )
                    .appendTo( $.pageContainer ),
            menu = menuPage.find('ul');    
        
        //menu items    
        $.each(options, function(i){
            $('<li class='+options[i].toLowerCase()+'><a href=\'#\'>' + options[ i ].charAt(0).toUpperCase() + options[ i ].substr(1) + '</a></li>')
                .bind('click', function(event){                    
                    //your click event functions
                    alert("clicked me");

                    //go back to previous page when click dialog buttons
                    $.mobile.changePage([menuPage, currentPage], 'pop', true);                        
                    event.preventDefault();
                    return false;
                })
                .appendTo(menu);
        });    
            
        //create page, listview
        menuPage.page();
        
        //change page now    
        $.mobile.changePage([currentPage, menuPage], 'pop', false);
    };    
})(jQuery);

/*$('a').live('click', function(){    
        $(this).mydialog();
        return false;
})*/
