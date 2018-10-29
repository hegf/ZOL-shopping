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

      //编写sql语句
    $sql = 'select * from goods';
    $phone = 'select * from goods where goodstype="phone"';
    $computer = 'select * from goods where goodstype="computer"';
    $diy = 'select * from goods where goodstype="diy"';
    $shuma = 'select * from goods where goodstype="shuma"';
    $home = 'select * from goods where goodstype="home"';
    $sellnumber = 'select * from goods order by sellnumber desc limit 0,10';
    $phonehigh = 'select * from goods where goodstype="phone" order by price desc';
    $phonedown = 'select * from goods where goodstype="phone" order by price asc';
    //获取查询结果集
    $result = $conn->query($sql);
    $phone_result = $conn->query($phone);
    $computer_result = $conn->query($computer);
    $diy_result = $conn->query($diy);
    $shuma_result = $conn->query($shuma);
    $home_result = $conn->query($home);
    $sellnumber_result = $conn->query($sellnumber);
    $phonehigh_result = $conn->query($phonehigh);
    $phonedown_result = $conn->query($phonedown);


    //使用查询结果集
    //得到数组
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $phone_arr = $phone_result->fetch_all(MYSQLI_ASSOC);
    $computer_arr = $computer_result->fetch_all(MYSQLI_ASSOC);
    $diy_arr = $diy_result->fetch_all(MYSQLI_ASSOC);
    $shuma_arr = $shuma_result->fetch_all(MYSQLI_ASSOC);
    $home_arr = $home_result->fetch_all(MYSQLI_ASSOC);
    $sellnumber_arr = $sellnumber_result->fetch_all(MYSQLI_ASSOC);
    $phonehigh_arr = $phonehigh_result->fetch_all(MYSQLI_ASSOC);
    $phonedown_arr = $phonedown_result->fetch_all(MYSQLI_ASSOC);


    //释放查询结果集，避免资源浪费
    $result->close();
    $phone_result->close();
    $computer_result->close();
    $diy_result->close();
    $shuma_result->close();
    $home_result->close();
    $sellnumber_result->close();
    $phonehigh_result->close();
    $phonedown_result->close();
    
    
    //把结果输出到前台
    $resArr = array(
        "goodslist" => $row,
        "phone" => $phone_arr,
        "computer" => $computer_arr,
        "diy" => $diy_arr,
        "shuma" => $shuma_arr,
        "home" => $home_arr,
        "sellnumber" => $sellnumber_arr,
        "phonehigh" => $phonehigh_arr,
        "phonedown" => $phonedown_arr
        );
    echo json_encode($resArr,JSON_UNESCAPED_UNICODE);
    
    // 关闭数据库，避免资源浪费
    $conn->close();

   
   


?>