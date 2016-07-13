// JavaScript Document

$(document).ready(function(){
	
var aud = document.getElementById("adio_beep");
	
	$('#reader').html5_qrcode(function(data){
		
			//alert(data, "Variable = (data)");
			
			// Input value
			$('input[name=qr]').val(data);
			
			// play sound
			 aud.play();
			 

			 $("#check").css("display", "block");
			 
			 //wait 2 seconds and submit the form
			 
			 setInterval(function () {
				 
				
                $('#sb').submit();
				
			
			   }, 2000);
			
			
				
			//submit the form -- $('#sb').submit();
			
			//Stop video scan 
		    $('#reader').html5_qrcode_stop()
			
	
		 
   											},
	
	function(error){
		
        //show read errors 
		
    				}, 
					
	function(videoError){
		
        //the video stream could be opened
		
   						}
	
	);
	
});

//Refresh the web

$(document).ready(function(){
	
$('#refrescar').click(function() {
	
    location.reload();
});




});


//input automatico

//numero de caracteres
var x=4;

function submitT(t,f){ 

	if(t.value.length==x){ 
	
		f.submit() 
	} 

}