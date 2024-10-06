<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $company = htmlspecialchars($_POST['company']);
    $project = htmlspecialchars($_POST['project']);

    if (!empty($name) && !empty($email) && !empty($phone) && !empty($project)) {
        $to = "info@deifieddesign.com";  // Replace with your email address
        $subject = "New Contact Request from $name";
        $message = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\n\nProject Description:\n$project";
        $headers = "From: $name <$email>\r\nReply-To: $email\r\n";

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(['status' => 'success', 'message' => 'Message sent successfully!']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'There was an issue sending your message.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Please fill in all required fields.']);
    }
}
?>