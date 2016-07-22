/*
 * Update destiny points (to the database)
 */
$('#destiny_update').click(function(){
   var destiny_light = $('#light_val').text(),
       destiny_dark = $('#dark_val').text();
       
    $.ajax({
        url: 'destiny_send.php',
        type: 'post',
        data: 'light=' + destiny_light + '&dark=' + destiny_dark,
        success: function(){
            $('#destiny_ok').fadeIn().delay(4000).fadeOut();
        },
        error: function(http, status, error){
           $('#destiny_err').fadeIn().delay(4000).fadeOut();
           console.log("Error " + error)
        
        }
    });
});

/*
 * Add and subtract control
 */
$('#light_add').click(function(){
    var count = $('#light_val').text();
    count++;
    if (count >= 10)
        count = 10;
    $('#light_val').text(count);
});

$('#light_sub').click(function(){
    var count = $('#light_val').text();
    count--;
    if (count <= 0)
        count = 0;
    $('#light_val').text(count);
});

$('#dark_add').click(function(){
    var count = $('#dark_val').text();
    count++;
    if (count >= 10)
        count = 10;
    $('#dark_val').text(count);
});

$('#dark_sub').click(function(){
    var count = $('#dark_val').text();
    count--;
    if (count <= 0)
        count = 0;
    $('#dark_val').text(count);
});
