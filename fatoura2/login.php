<?php

// Allow from any origin (you can replace * with a specific domain in production)
header("Access-Control-Allow-Origin: *");

// Allow specific HTTP methods
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle pre-flight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Set content-type to application/json
header("Content-Type: application/json");

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form-encoded input
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Replace with your database connection details
    $servername = "localhost";
    $db_username = "root";
    $db_password = "@123456789";
    $dbname = "fatoura";

    // Create connection
    $conn = new mysqli($servername, $db_username, $db_password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        echo json_encode(['status' => 'error', 'message' => 'Database connection failed']);
        exit;
    }

    // Prepare SQL query to verify user
    $stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($stored_password);
    $stmt->fetch();

    // Verify password
    if ($stmt->num_rows > 0 && $stored_password === $password) {
        // Set session variable or token here if needed
        $_SESSION['user'] = $email;
        echo json_encode(['status' => 'success', 'message' => 'Login successful']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid credentials']);
    }

    $stmt->close();
    $conn->close();
}
?>
