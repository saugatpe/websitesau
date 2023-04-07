<?php
$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];

include 'connect.php';
$sql = "INSERT INTO users(name, email, pass) VALUES('$name','$email','$password')";
$result = mysqli_query($conn, $sql);

if($result){
  header('location: loginin.php');
}

?>