<?php

if(isset($_POST["chapter"])){
    $conn = mysqli_connect("localhost","root","","strm");
    $data = array();
    $input =$_POST["chapter"];
    $query="SELECT * FROM questions WHERE qst_type='multichoice';";

    $result = $conn->query($query);

    foreach($result as $row){
        $data[] = array(
            "qst_text" => $row["qst_text"], "opt" => $row["opt"], "answer" =>  $row["answer"]
        );
    }
    echo json_encode($data);
}

?>