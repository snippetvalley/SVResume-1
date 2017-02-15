$(function(){
    $(".icons_block a").click(function(e){
        e.preventDefault();
        $(".icons_block a").removeClass('active');
        var blockId = $(this).attr('id');
        $(".content-block").removeClass('active');
        $("."+blockId).addClass('active');
        $(this).addClass('active');

    });
    $('a[data-toggle="tooltip"]').tooltip({placement: 'top',trigger:"hover"});
    setKnobSetting();


    $('.FlowupLabels').FlowupLabels({
    /*
     * These are all the default values
     * You may exclude any/all of these options
     * if you won't be changing them
     */
    
    // Handles the possibility of having input boxes prefilled on page load
    feature_onInitLoad: true, 
    
    // Class when focusing an input
    class_focused:    'focused',
    // Class when an input has text entered
    class_populated:  'populated' 
  });


});
function setKnobSetting(){
  var bgColor = $("body .hello-badge").css('backgroundColor');
   $(".knob-progressbar").knob(
      {
        readOnly: true,
        fgColor: bgColor
        
      });
}