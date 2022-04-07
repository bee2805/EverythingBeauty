<?php 
if(isset($_POST['submit'])){
    $to = "feedback@everythingbeautyapp.co.za"; // this must be the email address from your hosting provider

    $subject = "SEO Project Feedback";
    $message = $_POST['feedback'];

    mail($to,$subject,$message);

    header('Location: https://everythingbeautyapp.co.za'); // you can add a thank you page if you like, this redirects to home
    }
?>