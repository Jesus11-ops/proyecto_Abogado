<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userEmail = $_POST["email"];
    $message = $_POST["message"];
    $recipientEmail = "gerson.salab02@gmail.com"; // Dirección de correo preestablecida

    $to = $recipientEmail;
    $subject = "Nuevo mensaje desde el sitio web";
    $headers = "From: $userEmail";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>



<?php
// En un sistema real, aquí se manejaría la reserva en la base de datos
// y se enviaría una respuesta adecuada al cliente

// Simulación de respuesta exitosa
$response = array('status' => 'success');
echo json_encode($response);
?>


