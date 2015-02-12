
$(document).ready( function(){
	
	$('#reviewButton').click(function(){
		var getString = document.getElementById("textfield").value;
		$('#postArea').prepend(getString + '<Br/>' + '<Br/>'); 
		$('#textfield').val(' ');
		
	});
	
	
	
});	