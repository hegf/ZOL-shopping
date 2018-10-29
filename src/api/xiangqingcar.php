<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'zolshopping';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die($conn->connect_error);
    } 
    $conn->set_charset('utf8');
    $idx = isset($_GET["idx"])? $_GET["idx"]:"";
    $res = 'select * from xiangqingcar where goodsidx="'.$idx.'"';
    $list = 'select * from xiangqingcar where goodsidx';
    $listres = $conn->query($list);
    $result = $conn->query($res);
    $listarr = $listres->fetch_all(MYSQLI_ASSOC);
    if($result->num_rows == 0){
        $sql = 'insert into xiangqingcar (goodsidx,number) values("'.$idx.'",1)'; 
        $res = $conn->query($sql);  
    };
    // if($res){   
    //             echo "success";
    //         }else{
    //             echo "fail: " ;
    //         };

 $resArr = array(
        "goodsidx" => $listarr
        );
    echo json_encode($resArr,JSON_UNESCAPED_UNICODE);
    $listres->close();
    $result->close();  
    $conn->close();
 




// . $sql . "<br>" . $conn->error

?>