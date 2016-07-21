<?php
require_once ( 'server.php' );
$user = htmlentities( $_POST['user'], ENT_QUOTES, "UTF-8");
$result = htmlentities( $_POST['result'], ENT_QUOTES, "UTF-8");
$dices = htmlentities( $_POST['dices'], ENT_QUOTES, "UTF-8");

// Insert result into the database
if( $db -> query("INSERT INTO rolls(user, result, dices) VALUES('$user', '$result', '$dices');") ) {
    
        // get the oldest id from the database
        if( $temp = $db -> query("SELECT id FROM rolls LIMIT 1") ) {
            $id_to_del = $temp -> fetch_object() ->id;
            
            // delete the oldes id from the database
            if( $db -> query("DELETE FROM rolls WHERE id = $id_to_del") ){
                
            } else {
                echo "DELETE ERROR ".$db->errno;
            }
        
        } else{
            echo "SELECT ERROR ".$db->errno;
        }
    
} else {
    die ("Błąd połączenia ".$db->errno);
}

