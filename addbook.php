<?php
include 'connection.php';
$title = $_POST["title"];
$author = $_POST["author"];
$isbn = $_POST["isbn"];
$sql = "INSERT into booklist (title,author,isbn) values ('{$title}','{$author}',$isbn)";

if ($conn->query($sql) === true) {
    $success["response"] = ["success" => "1", 'msg' => "Inserted Successfully"];
} else {
    $success['response'] = array("success" => "0", "msg" => "Not Inserted");

}
echo json_encode($success);
$conn->close();
