<?php
// Database connection settings
$host = 'localhost';
$dbname = 'fatoura';
$username = 'root';
$password = '@123456789';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Get the JSON data from the request
    $data = json_decode(file_get_contents('php://input'), true);

    $cashier = $data['cashier'];
    $invoiceCode = $data['invoiceCode'];
    $customer = $data['customer'];
    $items = $data['items'];
    $discountPercentage = $data['discountPercentage'];
    $tenderedAmount = $data['tenderedAmount'];

    // Insert invoice into the database
    $stmt = $pdo->prepare("INSERT INTO invoices (invoice_code, cashier, customer, discount_percentage, tendered_amount) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$invoiceCode, $cashier, $customer, $discountPercentage, $tenderedAmount]);
    $invoiceId = $pdo->lastInsertId();

    // Insert items into the database
    $stmt = $pdo->prepare("INSERT INTO invoice_items (invoice_id, item, unit, qty, price) VALUES (?, ?, ?, ?, ?)");
    foreach ($items as $item) {
        $stmt->execute([$invoiceId, $item['item'], $item['unit'], $item['qty'], $item['price']]);
    }

    echo json_encode(['status' => 'success']);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>