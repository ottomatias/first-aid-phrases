//= require_tree .
//= require 'bootstrap'
$('document').ready(function(){
	$('.translation_link').click(function(){
		$('#phrase_body').html($(this).data('translation'));
	})
})
