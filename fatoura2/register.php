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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if all required POST keys exist
    $name = isset($_POST['name']) ? $_POST['name'] : null;
    $email = isset($_POST['email']) ? $_POST['email'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;
    $userType = isset($_POST['userType']) ? $_POST['userType'] : null;

    // Check if any field is empty
    if ($name === null || $email === null || $password === null || $userType === null) {
        echo json_encode(['status' => 'error', 'message' => 'All fields are required']);
        exit;
    }

    // Replace with your database connection details
    $servername = "localhost";
    $db_username = "root";
    $db_password = "@123456789";
    $dbname = "fatoura";

    // Create connection
    $conn = new mysqli($servername, $db_username, $db_password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL query to insert a new user
    $stmt = $conn->prepare("INSERT INTO users (name, email, password, userType) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $password, $userType);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Registration successful']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Registration failed']);
    }

    $stmt->close();
    $conn->close();
}
?>
