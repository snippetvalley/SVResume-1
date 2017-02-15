
$(function(){

	$(".theme-panel-setting").click(function(){
		$(".theme-option-block").show('100');
	});
	$(".theme-colors-list li a").click(function(){
		var bgColor = $(this).attr('class');
		$("body").attr('class',bgColor);
		triggerKnob();
	});
	$(".theme-option-close").click(function(){
		$(".theme-option-block").hide('100');
	});





});
function triggerKnob(){
	var bgColor = $("body .hello-badge").css('backgroundColor');
	$(".knob-progressbar").trigger(
        'configure',
        {
            
            readOnly: true,
        	fgColor: bgColor
        }
    );
    $(".knob-progressbar").css("color",bgColor);
}