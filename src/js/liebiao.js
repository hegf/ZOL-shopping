
    $list = $.ajax({
        type: "POST",
        url: "../api/index.php",
        data: "",
        success: function(data){
        $data = JSON.parse(data);
            // 全部商品  data.goodslist;
            // 手机商品 data.phone;
            // 电脑商品 data.computer;
            // diy商品 data.diy;
            // 数码商品 data.shuma;
            // 家居商品 data.home;
            // 销量排名 data.sellnumber
            // console.log($data);
           
    // 默认显示   
        $.each($data.goodslist.slice(0,8), function(){
            $('#goodsshow').append(
                '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+this.name+'</p>'+
                '<p>型号:'+this.introduce+'</p>'+
                '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                '<p style="color:red;">售价：¥'+this.price+'</p>'+
                '</div>'); 
            $('.currents').css('background','#f60');              
    //点击销量从高到低
    $('.hotsell').on('click',function(){
        $('#goodsshow').empty();
        $.each($data.sellnumber.slice(0,8), function(){
            $('#goodsshow').append(
                '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+this.name+'</p>'+
                '<p>型号:'+this.introduce+'</p>'+
                '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                '<p style="color:red;">售价：¥'+this.price+'</p>'+
                '</div>');
            });
        $('.currents').css('background','');
        $('.hotsell').css('background','#f60');
        $('.pricehigh').css('background','');
        $('.pricedown').css('background','');
    });

    // 点击价格从高到低
    $('.pricehigh').on('click',function(){
        $('#goodsshow').empty();
        $.each($data.phonehigh.slice(0,8), function(){
            $('#goodsshow').append(
                '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+this.name+'</p>'+
                '<p>型号:'+this.introduce+'</p>'+
                '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                '<p style="color:red;">售价：¥'+this.price+'</p>'+
                '</div>');
            });
        $('.currents').css('background','');
        $('.hotsell').css('background','');
        $('.pricehigh').css('background','#f60');
        $('.pricedown').css('background','');
    });
    
    // 点击价格低到高
    $('.pricedown').on('click',function(){
        $('#goodsshow').empty();
        $.each($data.phonedown.slice(0,8), function(){
            $('#goodsshow').append(
                '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+this.name+'</p>'+
                '<p>型号:'+this.introduce+'</p>'+
                '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                '<p style="color:red;">售价：¥'+this.price+'</p>'+
                '</div>');
            });
        $('.currents').css('background','');
        $('.hotsell').css('background','');
        $('.pricehigh').css('background','');
        $('.pricedown').css('background','#f60');
    });




    // 点击下一页
        $('.no-prev').on('click',function(){
            $('#goodsshow').empty();
            $.each($data.goodslist.slice(8,10), function(){
            $('#goodsshow').append(
                '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+this.name+'</p>'+
                '<p>型号:'+this.introduce+'</p>'+
                '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                '<p style="color:red;">售价：¥'+this.price+'</p>'+
                '</div>');               
          });
            $('.page em').text('2/2');
        
    // 点击上一页
        $('.next').on('click',function(){
            $('#goodsshow').empty();
            $.each($data.goodslist.slice(0,8), function(){
            $('#goodsshow').append(
                '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+this.name+'</p>'+
                '<p>型号:'+this.introduce+'</p>'+
                '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                '<p style="color:red;">售价：¥'+this.price+'</p>'+
                '</div>');               
          });
            $('.page em').text('1/2');
            });
        });
    });
     
    // 点击电脑显示电脑商品
    $('.computer').on('click',function(){
        console.log($data.computer);
        $('#goodsshow').empty();
        $.each($data.computer.slice(0,8), function(){
            $('#goodsshow').append(
                '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+this.name+'</p>'+
                '<p>型号:'+this.introduce+'</p>'+
                '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                '<p style="color:red;">售价：¥'+this.price+'</p>'+
                '</div>');
            });
    // 电脑商品点击下一页
        $('.no-prev').on('click',function(){
            $('#goodsshow').empty();
            $.each($data.computer.slice(8,10), function(){
                $('#goodsshow').append(
                    '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                    '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                    '<p>品牌:'+this.name+'</p>'+
                    '<p>型号:'+this.introduce+'</p>'+
                    '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                    '<p style="color:red;">售价：¥'+this.price+'</p>'+
                    '</div>');               
              });
                $('.page em').text('2/2');
            // 电脑商品点击上一页  
            $('.next').on('click',function(){
                $('#goodsshow').empty();
                $.each($data.computer.slice(0,8), function(){
                    $('#goodsshow').append(
                    '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                        '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                        '<p>品牌:'+this.name+'</p>'+
                        '<p>型号:'+this.introduce+'</p>'+
                        '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                        '<p style="color:red;">售价：¥'+this.price+'</p>'+
                        '</div>');               
                        });
                        $('.page em').text('1/2');
            });
        });             
    });
       

    // 点击DIY显示DIY商品
    $('.diy').on('click',function(){
        $('#goodsshow').empty();
        $.each($data.diy.slice(0,8), function(){
            $('#goodsshow').append(
                '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+this.name+'</p>'+
                '<p>型号:'+this.introduce+'</p>'+
                '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                '<p style="color:red;">售价：¥'+this.price+'</p>'+
                '</div>');
            });
    // DIY商品点击下一页
        $('.no-prev').on('click',function(){
            $('#goodsshow').empty();
            $.each($data.diy.slice(8,10), function(){
                $('#goodsshow').append(
                    '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                    '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                    '<p>品牌:'+this.name+'</p>'+
                    '<p>型号:'+this.introduce+'</p>'+
                    '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                    '<p style="color:red;">售价：¥'+this.price+'</p>'+
                    '</div>');               
              });
                $('.page em').text('2/2');
        // DIY商品点击上一页  
            $('.next').on('click',function(){
                $('#goodsshow').empty();
                $.each($data.diy.slice(0,8), function(){
                    $('#goodsshow').append(
                    '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                        '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                        '<p>品牌:'+this.name+'</p>'+
                        '<p>型号:'+this.introduce+'</p>'+
                        '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                        '<p style="color:red;">售价：¥'+this.price+'</p>'+
                        '</div>');               
                        });
                        $('.page em').text('1/2');
            });
        });             
    });
       

    // 点击数码显示数码商品
    $('.shuma').on('click',function(){
        $('#goodsshow').empty();
        $.each($data.shuma.slice(0,8), function(){
            $('#goodsshow').append(
                '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+this.name+'</p>'+
                '<p>型号:'+this.introduce+'</p>'+
                '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                '<p style="color:red;">售价：¥'+this.price+'</p>'+
                '</div>');
            });
    // shuma商品点击下一页
        $('.no-prev').on('click',function(){
            $('#goodsshow').empty();
            $.each($data.shuma.slice(8,10), function(){
                $('#goodsshow').append(
                    '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                    '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                    '<p>品牌:'+this.name+'</p>'+
                    '<p>型号:'+this.introduce+'</p>'+
                    '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                    '<p style="color:red;">售价：¥'+this.price+'</p>'+
                    '</div>');               
              });
                $('.page em').text('2/2');
        // shuma商品点击上一页  
            $('.next').on('click',function(){
                $('#goodsshow').empty();
                $.each($data.shuma.slice(0,8), function(){
                    $('#goodsshow').append(
                    '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                        '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                        '<p>品牌:'+this.name+'</p>'+
                        '<p>型号:'+this.introduce+'</p>'+
                        '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                        '<p style="color:red;">售价：¥'+this.price+'</p>'+
                        '</div>');               
                        });
                        $('.page em').text('1/2');
            });
        });             
    });


    // 点击家居显示家居商品
     $('.home').on('click',function(){
        $('#goodsshow').empty();
        $.each($data.home.slice(0,8), function(){
            $('#goodsshow').append(
                '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+this.name+'</p>'+
                '<p>型号:'+this.introduce+'</p>'+
                '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                '<p style="color:red;">售价：¥'+this.price+'</p>'+
                '</div>');
            });
    // shuma商品点击下一页
        $('.no-prev').on('click',function(){
            $('#goodsshow').empty();
            $.each($data.home.slice(8,10), function(){
                $('#goodsshow').append(
                    '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                    '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                    '<p>品牌:'+this.name+'</p>'+
                    '<p>型号:'+this.introduce+'</p>'+
                    '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                    '<p style="color:red;">售价：¥'+this.price+'</p>'+
                    '</div>');               
              });
                $('.page em').text('2/2');
        // shuma商品点击上一页  
            $('.next').on('click',function(){
                $('#goodsshow').empty();
                $.each($data.home.slice(0,8), function(){
                    $('#goodsshow').append(
                    '<div style="width:230px; border:2px solid #ccc;padding-left:36px;float:left;margin:10px 10px;"data-idx="'+this.idx+'">'+
                        '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                        '<p>品牌:'+this.name+'</p>'+
                        '<p>型号:'+this.introduce+'</p>'+
                        '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                        '<p style="color:red;">售价：¥'+this.price+'</p>'+
                        '</div>');               
                        });
                        $('.page em').text('1/2');

                })
            });
        });             
    

        $('#goodsshow').on('click','div',function(){           
           var it = $(this)[0];
           var idx = it.getAttribute('data-idx');
           idx = (idx-1)*1;
            location.href='../html/xiangqing.html?idx='+idx;
        });

         $('div').hover(function(){
            $(this).css('border-color','red')
                },function(){
                $(this).css('border-color','#ccc')
        });
       
    }        
});
      