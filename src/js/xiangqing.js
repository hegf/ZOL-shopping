jQuery(function($){

    var params = decodeURI(location.search);
        // console.log(params);
        // console.log(params.length);
        
    $list = $.ajax({
        type: "POST",
        url: "../api/index.php",
        data:'',
        success: function(data){
        $data = JSON.parse(data);
            var res = params.replace(/[^0-9]/ig,"");
            $('.goodsxq').html(
                '<div class="sxq" data-idx="'+$data.goodslist[res].idx+'">'+
                '<p style="float:left;"class="goods"><img src="'+$data.goodslist[res].imgurl+'" data-big="'+$data.goodslist[res].imgurl+'" width="500" height="500"/></p>'+
                '<div class="xinxi" style="float:left;margin:50px 100px;">'+
                '<p>品牌:'+$data.goodslist[res].name+'</p>'+
                '<p>型号:'+$data.goodslist[res].introduce+'</p>'+
                '<p style="color:red;">销量:'+$data.goodslist[res].sellnumber+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[res].price+'</p>'+
                '<p class="btn"><span class="addbtn">添加购物车</span><a class="buy" href="../zhifu.html">立即购买</a><p><a class="gocar" href="../html/car.html">去购物车结算</a><p class="tx">添加成功</p></p></div></div> ');


        // 放大镜
        $('.goods').lxzoom({width:600,height:500}).addClass('box');
        
        // 页面css
        $('.goodsxq p').css({'font-size':'18px','padding-left':'10px','line-height':'32px'});
        $('.goodsxq .btn .addbtn,.buy').css({'display':'inline-block','width':'100px','height':'50px','background':'#c00','margin-top':'200px','margin-right':'50px','border-radius':'5px','text-align':'center','line-height':'50px','color':'#fff'})
        $('.goodsxq .btn .addbtn,.buy,.gocar').hover(function(){
            $(this).css({'opacity':'0.5','textDecoration':'none','cursor':'pointer'});
        },function(){
            $(this).css('opacity','1');
            $('.tx').css({'display':'none'});
        });
        $('.gocar').css({'display':'block','width':'120px','height':'30px','margin-top':'50px','background':'#c00','color':'#fff','float':'right','border-radius':'5px','text-align':'center'})
        $('.tx').css({'display':'none','color':'red','float':'left'});

        // 点击添加购物车时将该商品的信息存入购物车数据库
         $('.addbtn').on('click',function(){
                $.get("../api/car.php",{'idx':$data.goodslist[res].idx,'imgurl':$data.goodslist[res].imgurl,'name':$data.goodslist[res].name,'introduce':$data.goodslist[res].introduce,'sellnumber':$data.goodslist[res].sellnumber,'price':$data.goodslist[res].price},function(result){
                    $('.tx').css({'display':'block'}); 
                    window.location.reload();
                });

        })

         // 右侧购物车
         $.get("../api/car.php", function(arr){
            var result = JSON.parse(arr);
                result = result.cargoods;
                console.log(result.length);
                $('.number').html(result.length);
                $.each(result,function(){
                 $('.list').append(
                    '<div class="goods">'+
                    '<p style="float:left;"><img src="'+this.imgurl+'"width="100" heigh="100"/></p>'+
                    '<h3>'+this.name+'</h3>机型:'+this.introduce+''+
                    '<p>'+this.price+'</p></div>');                 
                  });                   
            $('.list').css({'width':'200px','background':'#fff','position':'absolute','right':'0px','z-index':'900','text-align':'center','display':'none'});
            $('.goods').css('border','2px solid #ccc');
            $('.cart').hover(function(){
                $('.list').stop().show(500);
            },function(){
                $('.list').stop().hide(500);
            })
         })

}















    
});



















})
 








