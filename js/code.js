$(document).ready(function(){
	$("jumbotron").hide(4000);

	$('#nav-all').click(function(){
		$('.gamedesign').show();
		$('.3d').show();
		$('.webdesign').show();
	});
	$('#nav-games').click(function(){
		$('.gamedesign').show();
		$('.3d').hide();
		$('.webdesign').hide();

	});
	$('#nav-3d').click(function(){
		$('.gamedesign').hide();
		$('.3d').show();
		$('.webdesign').hide();

	});
	$('#nav-webdesign').click(function(){
		$('.gamedesign').hide();
		$('.3d').hide();
		$('.webdesign').show();
	});

});
