<?php
include 'connection.php';
$sql = "SELECT * from booklist";
$result = $conn->query($sql);
$data = array();
if ($result->num_rows > 0) {
    $field = array();
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $field["id"] = $row["id"];
        $field["title"] = $row["title"];
        $field["author"] = $row["author"];
        $field["isbn"] = $row["isbn"];
        array_push($data, $field);
    }
    echo json_encode($data);
} else {
    echo "0 results";
}
$conn->close();
