<?php
require_once ( 'server.php' );
$user = $_POST['user'];
$result = $_POST['result'];


// Insert result to the database
if( $db -> query("INSERT INTO rolls(user, result) VALUES('$user', '$result');") ) {
    
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

