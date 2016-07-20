<?php
require_once ( 'server.php' );
$user = $_POST['user'];
$result = $_POST['result'];


// Send result to a database
if( $stmt = $db -> prepare("INSERT INTO rolls(user, result) VALUES(?, ?)") ) {
    $stmt -> bind_param("ss", $user, $result); 
    $stmt -> execute();
    $stmt -> close();
} else {
    die ("Błąd połączenia");
}