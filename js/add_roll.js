/* 
 * Generate and send result to DB
 */
$('#roll_form').submit(function( event ){
    event.preventDefault();
    console.clear();

    var user = $('#user').val(),
        boost_number = $('#boost').val(),
        setback_number = $('#setback').val(),
        ab_number = $('#ab').val(),
        dif_number =  $('#dif').val(),
        prof_number = $('#prof').val(),
        ch_number = $('#ch').val(),
        force_number = $('#force').val();

    $('#roll_form').find('input[type=number]').val('0');

    var boost = new Boost(),
        setback = new Setback(),
        ab = new Ab(),
        dif = new Dif(),
        prof = new Prof(),
        ch = new Ch(),
        force = new Force(), 
        result_str = '';
    
    // Boost
    for( var i=1; boost_number >= i; i++ ){
        result_str += boost.result()+"," ;
    }
    
    // Setback
    for( var i=1; setback_number >= i; i++ ){
        result_str += setback.result()+"," ;
    }
    
    // Ability
    for( var i=1; ab_number >= i; i++ ){
        result_str += ab.result()+"," ;
    }
    
    // Dificulty
    for( var i=1; dif_number >= i; i++ ){
        result_str += dif.result()+"," ;
    }
    
    // Proficiency
    for( var i=1; prof_number >= i; i++ ){
        result_str += prof.result()+"," ;
    }
    
    // Challenge
    for( var i=1; ch_number >= i; i++ ){
        result_str += ch.result()+"," ;
    }
    
    // Force
    for( i=1; force_number >= i; i++ ){
        result_str += force.result()+"," ;
    }
   

    // Send result to a DB
    // and delete the oldest entry in DB
    $.ajax({
        url: "send.php",
        type: 'post',
        data: "user=" + user + '&result=' + result_str,
        error: function(http, status, error){
            console.log('An Error Occured. Sorry... ' + error);
        }

    }); // ajax call end

    return false;
}); // function end

/*
 * Get Results 
 */
$(document).ready(function(){
   get_results() ;
});
 
function get_results() {
            
    var id = $('#results_list').find('.id').last().text(), 
        result, 
        result_arr, 
        id_returned;

    $.ajax({
        url: "get_results.php",
        type: 'post',
        data: "id=" + id,
        dataType: 'json',
      success: function(response, status, http){
          
        if (response.returned_id > id ) {
              
              result_arr = response.result.split(',');
    
            // Count results 
            var success_count = 0,
                failure_count = 0,
                advantage_count = 0,
                threat_count = 0,
                triumph_count = 0,
                despair_count = 0,
                light_count = 0,
                dark_count = 0;
    
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
            /* // Console.log individual results console.log("------------------"); console.log( "succe " + success_count, "\nfailu " + failure_count, "\nadvan " + advantage_count, "\nthrea " + threat_count, "\ntrium " + triumph_count, "\ndespa " + despair_count, "\nlight " + light_count, "\ndark_ " + dark_count );*/
            
            // Enter username and id into results list
            $('#results_list').append( "<li> <span class='id' style='display:none'>" + response.returned_id + "</span> <span class='username'>" + response.user + ":</span> <span class='result'></span> </li>" );
        
            // Compare negative and positive results
            //  and enter into results list
            success_count = success_count - failure_count;
            advantage_count = advantage_count - threat_count;
            
            // successes and failures
            if( success_count > 0 ){
                for( var l=0; success_count > l; l++){
                    console.log("SUCCESS");
                    $('#results_list').find('.result').last().append("<img src='img/icons/success.png'>");
                }
            } else if (success_count < 0  ) {
                for( var l=0; Math.abs(success_count) > l; l++ ){
                    console.log("FAILURE");
                    $('#results_list').find('.result').last().append("<img src='img/icons/failure.png'>");
                }
            }
            
            // advantages and threats
            if( advantage_count > 0 ){
                for( var l=0; advantage_count > l; l++){
                    console.log("ADVANTAGE");
                    $('#results_list').find('.result').last().append("<img src='img/icons/adv.png'>");
                }
            } else if (advantage_count < 0  ) {
                for( var l=0; Math.abs(advantage_count) > l; l++ ){
                    console.log("THREAT");
                    $('#results_list').find('.result').last().append("<img src='img/icons/threat.png'>");
                }
            }
            
            // triumphs
            for( var l=0; triumph_count > l; l++ ){
                    console.log("TRIUMPH");
                    $('#results_list').find('.result').last().append("<img src='img/icons/triumph.png'>");
                }
             
            // despairs   
            for( var l=0; despair_count > l; l++ ){
                    console.log("DESPAIR");
                    $('#results_list').find('.result').last().append("<img src='img/icons/despair.png'>");
                }
            // lights    
            for( var l=0; light_count > l; l++ ){
                    console.log("LIGHT");
                    $('#results_list').find('.result').last().append("<img src='img/icons/light.png'>");
                }
            
            // darks    
            for( var l=0; dark_count > l; l++ ){
                    console.log("DARK");
                    $('#results_list').find('.result').last().append("<img src='img/icons/dark.png'>");
                }
                
            } // if statement end
        }, // success function end
        error: function(http, status, error){
            console.log('An Error Occured. Sorry... ' + error);
        }

    }); // ajax call end

   return false;
} // get results function end


// Reset form fields
$('#reset').click(function(){
   $('#roll_form').find('input[type=number]').val('0'); 
});