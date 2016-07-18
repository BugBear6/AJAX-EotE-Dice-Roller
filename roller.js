/*$('#roll_form').submit(function( event ){
    event.preventDefault();
    return false;
    
});*/

$('#reset').click(function(){
   $('#roll_form').find('input[type=number]').val('0'); 
});