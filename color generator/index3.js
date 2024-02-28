$(document).ready(function() {
	$('#generateColor').click(function() {
		var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
		$('#colorBox').css('background-color', randomColor);
		$('#colorBox').text(randomColor);
	});
});