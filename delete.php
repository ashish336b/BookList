<?php
include 'connection.php';
$id = $_POST['id'];
$sql = "delete from booklist where id = $id";
if ($conn->query($sql) === true) {
    $success["response"] = ["success" => "1", 'msg' => "Deleted Successfully"];
} else {
    $success['response'] = array("success" => "0", "msg" => "Cannot Delete Inserted");
}
echo json_encode($success);
$conn->close();
