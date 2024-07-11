<?php
// Incluir el archivo de configuración
require_once('config.php');

// Crear conexión
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Leer el valor actual del contador
$sql = "SELECT contador FROM visitas WHERE id = 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Obtener el valor actual
    $row = $result->fetch_assoc();
    $contador = $row['contador'];
} else {
    // Si no hay registros, inicia el contador en 0
    $contador = 0;
}

// Incrementar el contador
$contador++;

// Actualizar el contador en la base de datos
$sql = "UPDATE visitas SET contador = $contador WHERE id = 1";
$conn->query($sql);

// Devolver el número de visitas
echo $contador;

// Cerrar la conexión
$conn->close();
