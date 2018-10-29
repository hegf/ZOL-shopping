jQuery(function($){
    $('#J_loginBtn').on('click',function(){
         $.ajax({
               type: "POST",
               url: "../api/zhucedenglu.php",
               data: {'phonenumber':$('#J_loginUser').val(),'password':$('#J_loginPsw').val()},
               success: function(data){
                    if(data == 'not'){
                        location.href = '../index.html?'+$('#J_loginUser').val();
                    }else if(data == 'not'){
                        alert('请先注册在登录');
                    }
                  }
        })


    })

})