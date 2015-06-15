$(document).ready(function() {
	var isHelpActive = false;

	$('#closeHelp').click(function openHelpScreen() {
		$('.helpScreen').show();
		$('.tooltips').show();
		$('.tooltipsTarget').addClass('tooltipsActivated');
	});
	
	$('#openHelp').click(function closeHelpScreen() {
		$('.helpScreen').hide();
		$('.tooltips').hide();
		$('.tooltipsTarget').removeClass('tooltipsActivated');
	});
});

