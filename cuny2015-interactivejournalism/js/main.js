$(document).ready(function() {
	$(".menu > li").mouseenter(function(){			
		$(this).children().slideDown("fast");
	});
		
	$(".menu > li").mouseleave(function(){		
		$(".submenu").css("display", "none");
	});	
});