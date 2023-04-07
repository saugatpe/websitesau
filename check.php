<?php
session_start();
include 'connect.php';
$email = $_POST["email"];
$password = $_POST["password"];


if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Get username and password from form
        $email = mysqli_real_escape_string($conn, $_POST["email"]);
        $password = mysqli_real_escape_string($conn, $_POST["password"]);


$sql = "SELECT * FROM users WHERE email = '$email' AND pass = '$password'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){
    header('location: index.php');
    exit();
}else{
    $error = "</script>alert('invalite email or password');</script>";
    header('location: loginin.php');
}
}
mysqli_close($conn);
?>