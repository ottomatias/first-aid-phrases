//= require_tree .
//= require 'bootstrap'
$('document').ready(function(){
	$('.translation_link').click(function(){
		$('#phrase_body').html($(this).data('translation'));
    virtual_url = window.location.pathname + "#modal-" + $(this).attr('id');
    ga('send','pageview', virtual_url);
	})
})
