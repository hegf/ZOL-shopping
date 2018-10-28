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
    $imgurl = isset($_GET["imgurl"])? $_GET["imgurl"]:"";
    $name = isset($_GET["name"])? $_GET["name"]:"";
    $introduce = isset($_GET["introduce"])? $_GET["introduce"]:"";
    $sellnumber = isset($_GET["sellnumber"])? $_GET["sellnumber"]:"";
    $price = isset($_GET["price"])? $_GET["price"]:"";
    $del = isset($_GET["del"])? $_GET["del"]:"";
    $uname = array("");
    $goods = 'insert into cargoods (idx,name,introduce,price,imgurl,sellnumber) values ("'.$idx.'","'.$name.'","'.$introduce.'","'.$price.'","'.$imgurl.'","'.$sellnumber.'")';
    $goods_res = $conn->query($goods);
    // if($goods_res){
    //     echo "插入成功";
    // }else{
    //     echo "Error: " . $_idx . "<br>" . $conn->error;
    // };
    $delgoods = 'delete from cargoods where idx = "'.$del.'"';
    $delgoods_res = $conn->query($delgoods);
    $res = 'select * from cargoods where idx';
    $result = $conn->query($res);
    $arr = $result->fetch_all(MYSQLI_ASSOC);
    $resArr = array(
        "cargoods" => $arr
        );
    // echo json_encode($arr);
    echo json_encode($resArr,JSON_UNESCAPED_UNICODE);
    $result->close();  
    $conn->close();














?>