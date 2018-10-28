
jQuery(function($){
  // 手机号         window.location.reload();
    // $("#J_register_phone_number").focus(function(){
    //     $(this).css('border-color','green');
    // });
    $(".register-module").find("input").focus(function(){
        $(this).css('border-color','green');
    });
    $('#J_register_phone_number').blur(function(){      
          if($("#J_register_phone_number").val().trim().length != 11){
            $('.wrong-tips').css('display','block');
            $('.right-tips').css('display','none');
            $(this).css('border-color','red');
              return;
          }else{
            $('.right-tips').css('display','block'); 
            $(this).css('border-color','green');           
          };                
    
  
    // 验证码
    // 点击生成验证码
    $('.captcha-change').on('click',function(){
        var num = Math.random().toString(36).substring(3,7);
        $('#J_Captcha-Img_phone').html('<i>'+num+'<i>');
    
      $('#J_register_checkcode_phone').blur(function(){
          if($('#J_register_checkcode_phone').val().trim() != num){
            $('#tishi').html('验证码错误，请重新输入');
            $('#tishi').css('color','red');
            $(this).css('border-color','red');
          }else if($('#J_register_checkcode_phone').val().trim() == num){
            $('#tishi').html('验证码正确');
            $('#tishi').css('color','green');
            $(this).css('border-color','green');
          }
      })
    

    // 手机验证码
    $('#J_register_phone_send').on('click',function(){
        var num1 = Math.random().toString(36).substring(3,7);
        $(this).val(num1);
        $(this).css({'font-size':'20px'});
        $('.loading').css('display','block');
        $('#J_register_phone_code').blur(function(){
          if($('#J_register_phone_code').val().trim() == num1){
            $('#J_register_send_wait').html('OK');
            $('#J_register_send_wait').css('color','green');
          }else if($('#J_register_phone_code').val().trim() != num1)
          { $('#J_register_send_wait').html('验证码错误重新输入');
            $('#J_register_send_wait').css('color','red');
            $(this).css('border-color','red');
            return false;
          }     
      })
      $('#J_register_pasword_phone').focus(function(){
        $('#J_register_phone_code').css('color','green');
      })

    // 密码
    $('#J_register_pasword_phone').blur(function(){
      var reg=/^[A-Za-z0-9]{6,20}$/;
      var mima = reg.test($('#J_register_pasword_phone').val());//console.log(mima);
      if(mima == true){};
    $('#J_register_regPasword_phone').blur(function(){
        if($('#J_register_regPasword_phone').val() == $('#J_register_pasword_phone').val()){
        }
        if($('#J_register_regPasword_phone').val() != $('#J_register_pasword_phone').val()){
            $('#J_register_regPasword_phone').css('border-color','red');  
        }

    })
    
    // 用户协议框
    if($('#J_regRead_phone').is(':checked') == false){
          $('#xieyi').html('请同意用户协议');
    } ;
    
 
    // 注册按钮
    $('#J_register_phone_submit').on('click',function(){
          // console.log('可以注册');
           $.ajax({
               type: "POST",
               url: "../api/zhucedenglu.php",
               data: {'phonenumber':$("#J_register_phone_number").val(),'password':$('#J_register_pasword_phone').val()},
               success: function(data){
                console.log(data);
                       if(data == 'can'){
                      location.href="../index1.html?"+$("#J_register_phone_number").val();
                      }else if(data == 'not'){
                        alert('该用户已注册，请直接登录')
                        return false;
                      }
                  }
            


    });});});});});});






 });


    








    
