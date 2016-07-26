/*
 * Reset form fields
 */
function reset_form(){
   $('#roll_form').find('input[type=number]').val('0'); 
   $('#chosen_dices_list').children().remove();
   $('#comment').val('');
} 

$('#reset').click(function(){
    reset_form();
});

/*
 * Update results box every 4 sec
 */
setInterval(get_results, 4000);

/*
 * Select dices to roll
 */
 
// Add dices
$('#add_boost').click(function(){
    var counter = $('#boost').val(),
        max = 5;
        
    counter++;
    if ( counter > max ) 
        counter = max;
    else 
        $('#chosen_dices_list').append("<li class='del_dice del_boost'><img src='img/dices/boost.png'></li>");
    
    $('#boost').val(counter);
});

$('#add_setback').click(function(){
    var counter = $('#setback').val(),
        max = 5;
        
    counter++;
    if ( counter > max ) 
        counter = max;
    else 
        $('#chosen_dices_list').append("<li class='del_dice del_setback'><img src='img/dices/setback.png'></li>");
    $('#setback').val(counter);
});

$('#add_ab').click(function(){
    var counter = $('#ab').val(),
        max = 5;
        
    counter++;
    if ( counter > max ) 
        counter = max;
    else 
        $('#chosen_dices_list').append("<li class='del_dice del_ab'><img src='img/dices/ab.png'></li>");
    $('#ab').val(counter);
});

$('#add_dif').click(function(){
    var counter = $('#dif').val(),
        max = 5;
        
    counter++;
    if ( counter > max ) 
        counter = max;
    else 
        $('#chosen_dices_list').append("<li class='del_dice del_dif'><img src='img/dices/dif.png'></li>");
    $('#dif').val(counter);
});

$('#add_prof').click(function(){
    var counter = $('#prof').val(),
        max = 5;
        
    counter++;
    if ( counter > max ) 
        counter = max;
    else 
        $('#chosen_dices_list').append("<li class='del_dice del_prof'><img src='img/dices/prof.png'></li>");
    $('#prof').val(counter);
});

$('#add_ch').click(function(){
    var counter = $('#ch').val(),
        max = 5;
        
    counter++;
    if ( counter > max ) 
        counter = max;
    else 
        $('#chosen_dices_list').append("<li class='del_dice del_ch'><img src='img/dices/ch.png'></li>");
    $('#ch').val(counter);
});

$('#add_force').click(function(){
    var counter = $('#force').val(),
        max = 1;
        
    counter++;
    if ( counter > max ) 
        counter = max;
    else 
        $('#chosen_dices_list').append("<li class='del_dice del_force'><img src='img/dices/force.png'></li>");
    $('#force').val(counter);
});

$('#add_d10').click(function(){
    var counter = $('#d10').val(),
        max = 2;
        
    counter++;
    if ( counter > max ) 
        counter = max;
    else 
        $('#chosen_dices_list').append("<li class='del_dice del_force'><img src='img/dices/d10.png'></li>");
    $('#d10').val(counter);
});


// Del dices 
$('#chosen_dices_box').on('click', '.del_boost', function(){
    var counter = $('#boost').val();
    counter--;
    if (counter < 0)
        counter = 0;
    $('#boost').val(counter);
    $(this).closest('li').remove();

});

$('#chosen_dices_box').on('click', '.del_setback', function(){
    var counter = $('#setback').val();
    counter--;
    if (counter < 0)
        counter = 0;
    $('#setback').val(counter);
    $(this).closest('li').remove();

});

$('#chosen_dices_box').on('click', '.del_ab', function(){
    var counter = $('#ab').val();
    counter--;
    if (counter < 0)
        counter = 0;
    $('#ab').val(counter);
    $(this).closest('li').remove();

});

$('#chosen_dices_box').on('click', '.del_dif', function(){
    var counter = $('#dif').val();
    counter--;
    if (counter < 0)
        counter = 0;
    $('#dif').val(counter);
    $(this).closest('li').remove();

});

$('#chosen_dices_box').on('click', '.del_ch', function(){
    var counter = $('#ch').val();
    counter--;
    if (counter < 0)
        counter = 0;
    $('#ch').val(counter);
    $(this).closest('li').remove();

});

$('#chosen_dices_box').on('click', '.del_prof', function(){
    var counter = $('#prof').val();
    counter--;
    if (counter < 0)
        counter = 0;
    $('#prof').val(counter);
    $(this).closest('li').remove();

});

$('#chosen_dices_box').on('click', '.del_ch', function(){
    var counter = $('#ch').val();
    counter--;
    if (counter < 0)
        counter = 0;
    $('#ch').val(counter);
    $(this).closest('li').remove();

});

$('#chosen_dices_box').on('click', '.del_force', function(){
    var counter = $('#force').val();
    counter--;
    if (counter < 0)
        counter = 0;
    $('#force').val(counter);
    $(this).closest('li').remove();

});

$('#chosen_dices_box').on('click', '.del_d10', function(){
    var counter = $('#d10').val();
    counter--;
    if (counter < 0)
        counter = 0;
    $('#d10').val(counter);
    $(this).closest('li').remove();

});


/* 
 * Generate and send result to DB
 */
$('#roll_button').click(function( event ){
    event.preventDefault();
    
    var user = $('#user').val(), 
        boost_number = $('#boost').val(),
        setback_number = $('#setback').val(),
        ab_number = $('#ab').val(),
        dif_number =  $('#dif').val(),
        prof_number = $('#prof').val(),
        ch_number = $('#ch').val(),
        force_number = $('#force').val(), 
        d10_number = $('#d10').val(), 
        comment = $('#comment').val(),
        
        boost = new Boost(),
        setback = new Setback(),
        ab = new Ab(),
        dif = new Dif(),
        prof = new Prof(),
        ch = new Ch(),
        force = new Force(), 
        d10 = new D10(), 
        
        result_str = '', 
        dices_str = '',
        li_count;

    $('#roll_form').find('input[type=number]').val('0');

    // Boost
    for( var i=1; boost_number >= i; i++ ){
        result_str += boost.result()+"," ;
        dices_str +='boost,';
    }
    
    // Setback
    for( var i=1; setback_number >= i; i++ ){
        result_str += setback.result()+"," ;
        dices_str +='setback,';
    }
    
    // Ability
    for( var i=1; ab_number >= i; i++ ){
        result_str += ab.result()+"," ;
        dices_str +='ab,';
    }
    
    // Dificulty
    for( var i=1; dif_number >= i; i++ ){
        result_str += dif.result()+"," ;
        dices_str +='dif,';
    }
    
    // Proficiency
    for( var i=1; prof_number >= i; i++ ){
        result_str += prof.result()+"," ;
        dices_str +='prof,';
    }
    
    // Challenge
    for( var i=1; ch_number >= i; i++ ){
        result_str += ch.result()+"," ;
        dices_str +='ch,';
    }
    
    // Force
    for( i=1; force_number >= i; i++ ){
        result_str += force.result()+"," ;
        dices_str +='force,';
    }
    
    // D10
    for( i=1; d10_number >= i; i++ ){
        result_str += d10.result()+"," ;
        dices_str +='d10,';
    }
   
    // Send result to a DB
    // and delete the oldest entry in DB
    $.ajax({
        url: "send.php",
        type: 'post',
        data: 'user=' + user + '&dices=' + dices_str + '&result=' + result_str + '&comment=' + comment,
        success: function(){
            
            // Remove the oldest entry
            $('#roll_ok').fadeIn().delay(4000).fadeOut();
            
            li_count = $('#results_list').find('.result_item').length;
            if (li_count >= 5 ) {
                $('#results_list').find('.result_item').first().remove();
            }
            
        },
        error: function(http, status, error){
            $('#roll_err').fadeIn().delay(4000).fadeOut();
            console.log('An Error Occured. Sorry... ' + error);
        }

    }); // ajax call end

    reset_form();
    return false;
}); // function end


/*
 * Get Results 
 */
function get_results() {
            
    var id = $('#results_list').find('.id').last().text(), 
        dices_arr, 
        result_arr,
        
        success_count = 0,
        failure_count = 0,
        advantage_count = 0,
        threat_count = 0,
        triumph_count = 0,
        despair_count = 0,
        light_count = 0,
        dark_count = 0,
        d10_count = 0,
        d10_val = '';
        
    // If there is no id to get from the form
    if (!id) { 
        id = 0; 
    }

    $.ajax({
        url: "get_results.php",
        type: 'post',
        data: "id=" + id,
        dataType: 'json',
        
      success: function(response, status, http){
          

        // Set desitny points values
        var light_val = $('#light_val'),
            dark_val = $('#dark_val'), 
            has_destiny_changed = false;
            


        if( light_val.attr('light') != response.light ) {
            light_val.attr('light', response.light);
            light_val.text(response.light);
            has_destiny_changed = true;
        }
        
        if( dark_val.attr('dark') != response.dark ) {
            dark_val.attr('dark', response.dark);
            dark_val.text(response.dark);
            has_destiny_changed = true;
        }
        
        if ( has_destiny_changed ){
            $('#destiny_change').fadeIn().delay(4000).fadeOut();
        }
 
        // Check if result table needs update    
        if (response.returned_id > id ) {
            
              result_arr = response.result.split(',');
              dices_arr = response.dices.split(',');

            // Count results 
            for(var j=0; j<result_arr.length; j++){
                if (result_arr[j] == 'success' ){
                    success_count++;
                }
            }
            for(var j=0; j<result_arr.length; j++){
                if (result_arr[j] == 'failure' ){
                    failure_count++;
                }
            }
            for(var j=0; j<result_arr.length; j++){
                if (result_arr[j] == 'advantage' ){
                    advantage_count++;
                }
            }
            for(var j=0; j<result_arr.length; j++){
                if (result_arr[j] == 'threat' ){
                    threat_count++;
                }
            }
            for(var j=0; j<result_arr.length; j++){
                if (result_arr[j] == 'triumph' ){
                    triumph_count++;
                }
            }
            for(var j=0; j<result_arr.length; j++){
                if (result_arr[j] == 'despair' ){
                    despair_count++;
                }
            }
            for(var j=0; j<result_arr.length; j++){
                if (result_arr[j] == 'light' ){
                    light_count++;
                }
            }
            for(var j=0; j<result_arr.length; j++){
                if (result_arr[j] == 'dark' ){
                    dark_count++;
                }
            }
            for(var j=0; j<result_arr.length; j++){
                if (  ! isNaN( parseFloat( result_arr[j])  ) ){
                    d10_val += result_arr[j];
                    d10_count++;
                }
            }

            /*
             * Enter username and <li> item into results list
             */
            $('#results_list').append( "<li class='result_item'> <span class='id' style='display:none'>" + response.returned_id + "</span> <span class='username'>" + response.user + "</span> <ul class='dices'></ul> <ul class='result'></ul> <span class='result_comment'>"+response.comment+"</span></li>" );
        
            // Compare negative and positive results
            //  and enter into results list
            success_count = success_count - failure_count;
            advantage_count = advantage_count - threat_count;
            
            // successes and failures
            if( success_count > 0 ){
                for( var l=0; success_count > l; l++){
                   $('#results_list').find('.result').last().append("<li class='result_icon'><img src='img/icons/success.png'></li>");
                }
            } else if (success_count < 0  ) {
                for( var l=0; Math.abs(success_count) > l; l++ ){
                    $('#results_list').find('.result').last().append("<li class='result_icon'><img src='img/icons/failure.png'></li>");
                }
            }
            
            // advantages and threats
            if( advantage_count > 0 ){
                for( var l=0; advantage_count > l; l++){
                    $('#results_list').find('.result').last().append("<li class='result_icon'><img src='img/icons/advantage.png'></li>");
                }
            } else if (advantage_count < 0  ) {
                for( var l=0; Math.abs(advantage_count) > l; l++ ){
                    $('#results_list').find('.result').last().append("<li class='result_icon'><img src='img/icons/threat.png'></li>");
                }
            }
            
            // triumphs
            for( var l=0; triumph_count > l; l++ ){
                    $('#results_list').find('.result').last().append("<li class='result_icon'><img src='img/icons/triumph.png'></li>");
                }
             
            // despairs   
            for( var l=0; despair_count > l; l++ ){
                    $('#results_list').find('.result').last().append("<li class='result_icon'><img src='img/icons/despair.png'></li>");
                }
            // lights    
            for( var l=0; light_count > l; l++ ){
                    $('#results_list').find('.result').last().append("<li class='result_icon'><img src='img/icons/light.png'></li>");
                }
            
            // darks    
            for( var l=0; dark_count > l; l++ ){
                    $('#results_list').find('.result').last().append("<li class='result_icon'><img src='img/icons/dark.png'></li>");
                }
               
            // d10s    
            if ( d10_count > 0  ){
                    $('#results_list').find('.result').last().append("<li><span class='d10_result'>"+d10_val+"</span></li>");
                }
                
                // Insert dices 
                for( var n = 0; dices_arr.length > n; n++ ){
                    
                    if( dices_arr[n] == 'boost'){
                        $('#results_list').find('.dices').last().append("<li class='result_dice' class='result_icon'><img src='img/dices/boost.png'></li>");
                    }
                    
                    if( dices_arr[n] == 'setback'){
                        $('#results_list').find('.dices').last().append("<li class='result_dice' class='result_icon'><img src='img/dices/setback.png'></li>");
                    }
                                    
                    if( dices_arr[n] == 'ab'){
                        $('#results_list').find('.dices').last().append("<li class='result_dice' class='result_icon'><img src='img/dices/ab.png'></li>");
                    }
                    
                    if( dices_arr[n] == 'dif'){
                        $('#results_list').find('.dices').last().append("<li class='result_dice' class='result_icon'><img src='img/dices/dif.png'></li>");
                    }
                    
                    if( dices_arr[n] == 'prof'){
                        $('#results_list').find('.dices').last().append("<li class='result_dice' class='result_icon'><img src='img/dices/prof.png'></li>");
                    }
                    
                    if( dices_arr[n] == 'ch'){
                        $('#results_list').find('.dices').last().append("<li class='result_dice' class='result_icon'><img src='img/dices/ch.png'></li>");
                    }
                    
                    if( dices_arr[n] == 'force'){
                        $('#results_list').find('.dices').last().append("<li class='result_dice' class='result_icon'><img src='img/dices/force.png'></li>");
                    }

                } //  count dices for end
                
                for ( var x=0; d10_count > x; x++){
                    $('#results_list').find('.dices').last().append("<li class='result_dice' class='result_icon'><img src='img/dices/d10.png'></li>");
                }
                
            } // if statement end
            
            // scroll to the bottom of div (when overflow)
            $('#results_box').scrollTop(1E10);
            
        }, // success function end
        error: function(http, status, error){
            console.log('An Error Occured. Sorry... ' + error);
        }

    }); // ajax call end

   return false;
} // get results function end
