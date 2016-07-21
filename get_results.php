<?php
require_once('server.php');

if( isset($_POST['id'])){
    $id = $_POST['id'];
} elseif ( ! is_numeric($_POST['id']) ) {
    $id =  0;
} else {
    $id =  0;
}

// Get the last result
$query = "SELECT id, user, result, dices 
          FROM rolls
          WHERE id > $id
          ORDER BY id DESC
          LIMIT 1";
          
if ( $data = $db -> query( $query ) ){
    
    if ($x = $data -> fetch_object() ){
        $result = $x->result;
        $user = $x->user;
        $returned_id = $x->id;
        $dices = $x->dices;
        
        $db -> close();
         
        $arr = array('user' => $user, 
                     'returned_id' => $returned_id, 
                     'result' => $result, 
                     'dices' => $dices
        );
    
        echo json_encode($arr);
        
    } else {
        
        // if query returns empty
        //  (to avoid ajax error response)
        $db -> close();
        echo "{}";
    }
    
} else {
    die("Error ". $db->errno);
}




