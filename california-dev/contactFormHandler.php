<?php

$recipient = "leodaniels@californiadev.com";

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
  // Get the form data
  $name = $_POST['firstName'] . ' ' . $_POST['lastName'];
  $email = $_POST['email'];
  $phoneNumer = $_POST['phoneNumber'];
  $inquryType = $_POST['inquiryType'];
  $message = $_POST['message'];

  $subject = "New Contact Form Submission from " . $name;

  $body = $body = "Name: $name\n";
  $body .= "Email: $email\n";
  $body .= "Phone Number: $phoneNumber\n";
  $body .= "Inquiry Type: $inquiryType\n";
  $body .= "Message: $message\n";

  $headers = "From: $email";

  
  
  $body = "Name: $name\nEmail: $email\n\n$message";
  $headers = "From: $email";
  
  if (mail($recipient, $subject, $body, $headers)) {
    // Handle successful email send
    echo 'Thank you for your message!';
  } else {
    // Handle email send error
    echo 'There was a problem sending your message. Please try again later.';
  }
} else {
  // Handle non-POST requests
  echo 'Invalid request method.';
  exit;
}
?>