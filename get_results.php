<?php
require_once('server.php');

if( isset($_POST['id']) ){
    $id = $_POST['id'];
} else {
    $id =  0;
}

// Get the last result
$query = "SELECT result, user, id 
          FROM rolls
          WHERE id > $id
          ORDER BY id DESC
          LIMIT 1";
          
if ( $data = $db -> query( $query ) ){
    
    if ($x = $data -> fetch_object() ){
        $result = $x->result;
        $user = $x->user;
        $returned_id = $x->id;
        $db -> close();
         
        $arr = array('user' => $user, 
                     'returned_id' => $returned_id, 
                     'result' => $result);
         
        echo json_encode($arr) ;

    }
} else {
    die("Error ". $db->errno);
}




