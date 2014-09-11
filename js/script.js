

//responsive menu
// DOM ready
	 $(function() {
	   
      // Create the dropdown base
      $("<select />",{
		 "onchange": "moveTo(this.value)"
      })
	  .appendTo(".navigation");
      
      // Create default option "Go to..."
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Select Navigation.."
      }).appendTo(".navigation select");
      
      // Populate dropdown with menu items
      $(".navi a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo(".navigation select");
      });
      
	   // To make dropdown actually work
	   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
      $(".navigation select").change(function() {
        window.location = $(this).find("option:selected").val();
      });
	 
	 });

//Page scrolling
$(document).ready(function() {
	$('.navi').onePageNav({
	scrollThreshold: 0.25
	});
	
});

//Carousel carousel
		
    $('.carousel').carousel({
    interval: 6000
    })
	
//Tooltip	
$('.ani,.tip').tooltip('hide')

// script prettyphoto 
  $(document).ready(function(){
    $("a[data-rel^='prettyPhoto']").prettyPhoto({ social_tools: false ,deeplinking: false
    });
  }); 
  
 
//Animation
 $('.home-inner').hover(
       function(){ $(this).find('.ani').addClass('animated tada') },
       function(){ $(this).find('.ani').removeClass('animated tada') }
)
 $('.circle-anim,.anim').hover(
       function(){ $(this).addClass('animated tada') },
       function(){ $(this).removeClass('animated tada') }
)


// Video responsive
        $(".container").fitVids();
		
//sticky navigation
  $(document).ready(function(){
    $(".menu").sticky({topSpacing:0});
  });		
  
// flexslider script
 $(window).load(function() {
				$('.flexslider').flexslider({
				  animation: "slide",
				  controlsContainer: ".flex-container"
			  });
			});
	

  