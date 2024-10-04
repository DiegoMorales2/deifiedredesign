<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $project = $_POST['project'];

    // Send the email (you might need to configure your server or use an email API like PHPMailer)
    $to = "youremail@example.com"; // Change this to your email address
    $subject = "New Contact Request from $name";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\n\nProject Description:\n$project";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was an issue sending your message.";
    }
}
?>