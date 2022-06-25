<?php

$conn = mysqli_connect("localhost","root","","strm");
$data = array();
$query="SELECT qst_text,answer FROM questions WHERE qst_type='input';";


$result = $conn->query($query);

foreach($result as $row){
    $data[] = array(
        "qst_text" => $row["qst_text"], "answer" =>  $row["answer"]
    );
}
echo json_encode($data);

?>