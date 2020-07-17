jQuery(document).ready(function($) {
  	$("select").change(function() {
        	$("iframe").attr("src", $(this).val())
    	})
	$("#player1").fancybox({
		width: 800,
  		height: 450,
		scrolling : 'no',
   		openEffect  : 'none',
		closeEffect : 'none',
    		aspectRatio : true,
    		scrolling   : 'no',
  		openSpeed: 50,
  		closeSpeed: 50,
    		type: "iframe"
  	}); 
}); 
