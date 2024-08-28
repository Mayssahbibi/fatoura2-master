<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $userType = $_POST['userType'];

    // Replace with your database connection details
    $servername = "localhost";
    $db_username = "your_db_username";
    $db_password = "your_db_password";
    $dbname = "your_db_name";

    // Create connection
    $conn = new mysqli($servername, $db_username, $db_password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL query to insert a new user
    $stmt = $conn->prepare("INSERT INTO users (name, email, password, user_type) VALUES (?, ?, ?, ?)");
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
