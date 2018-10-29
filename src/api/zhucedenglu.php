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

    $phonenumber = isset($_POST["phonenumber"])? $_POST["phonenumber"]:""; 
    $password = isset($_POST["password"]) ? $_POST["password"]:"";

    $pnr = 'select * from zhucedenglu where tel="'.$phonenumber.'"';
    $pnr_result = $conn->query($pnr);
    if($pnr_result->num_rows == 0){
        echo 'can';
         // 保存手机号和密码到数据库
        if($phonenumber != "" && $password != ""){
            $bcphr = 'insert into zhucedenglu (tel,password) values("'.$phonenumber.'","'.$password.'")';
            $res = $conn->query($bcphr);
                // if($res){
                //     echo "插入成功";
                // }else{
                //     echo "Error: " . $sql . "<br>" . $conn->error;
                // };
        };

    }else{
        echo 'not';
    };

   
    $pnr_result->close();
    $conn->close();
 

?>