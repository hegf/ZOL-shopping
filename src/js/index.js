jQuery(function($){
    var timer = $(timer);
    clearInterval(timer);
// 商品滚动轮播
    $list = $.ajax({
            type: "POST",
            url: "../api/index.php",
            data: "",//返回的数据
            success: function(data){
            $data = JSON.parse(data);
            // 全部商品  data.goodslist;
            // 手机商品 data.phone;
            // 电脑商品 data.computer;
            // diy商品 data.diy;
            // 数码商品 data.shuma;
            // 家居商品 data.home;
            // 本周销量前十商品 data.sellnumber
            
            timer = setInterval(function(){               
                function rnd(n, m){
                    $random = Math.floor(Math.random()*(m-n+1)+n);
                    return $random;
                };
                rnd(2,47); 
            $("#lunbo_goods").html('<li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:30px;data-idx="'+($random+1)+'">'+
                '<a href="../html/xiangqing.html?idx=goodslist'+($random+1)+'"><img src="'+
                    $data.goodslist[$random+1].imgurl+
                    '"width="150" height="200"/></a>'+
                '<p>品牌:'+$data.goodslist[$random+1].name+'</p>'+
                '<p>型号:'+$data.goodslist[$random+1].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[$random+1].price+'</p>'+
                '</li>'+
                '<li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;data-idx="'+$random+'">'+
                '<a href="../html/xiangqing.html?idx=goodslist'+$random+'"><img src="'+
                    $data.goodslist[$random].imgurl+
                    '"width="150" height="200"/></a>'+
                '<p>品牌:'+$data.goodslist[$random].name+'</p>'+
                '<p>型号:'+$data.goodslist[$random].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[$random].price+'</p>'+
                '</li>'+
                 '<li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;data-idx="'+($random+2)+'"">'+
                '<a href="../html/xiangqing.html?idx=goodslist'+($random+2)+'"><img src="'+
                    $data.goodslist[$random+2].imgurl+
                    '"width="150" height="200"/></a>'+
                '<p>品牌:'+$data.goodslist[$random+2].name+'</p>'+
                '<p>型号:'+$data.goodslist[$random+2].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[$random+2].price+'</p>'+
                '</li>'+
                 '<li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;data-idx="'+($random-1)+'"">'+
                '<a href="../html/xiangqing.html?idx=goodslist'+($random-1)+'"><img src="'+
                    $data.goodslist[$random-1].imgurl+
                    '"width="150" height="200"/></a>'+
                '<p>品牌:'+$data.goodslist[$random-1].name+'</p>'+
                '<p>型号:'+$data.goodslist[$random-1].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[$random-1].price+'</p>'+
                '</li>'+
                '<li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;data-idx="'+($random-2)+'"">'+
                '<a href="../html/xiangqing.html?idx=goodslist'+($random-2)+'"><img src="'+
                    $data.goodslist[$random-2].imgurl+
                '"width="150" height="200"/></a>'+
                '<p>品牌:'+$data.goodslist[$random-2].name+'</p>'+
                '<p>型号:'+$data.goodslist[$random-2].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[$random-2].price+'</p>'+
                '</li>');
                 }, 2000);
                
         

    // 电竞精选随机显示  
        function rnd(n, m){
            $random = Math.floor(Math.random()*(m-n+1)+n);
            return $random;
        };
            rnd(12,19);
        $('.dianjin-body').html('<a href="../html/xiangqing.html?idx=dj'+($random+1)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:30px;"data-idx="'+($random+1)+'">'+
                '<img src="'+$data.goodslist[$random+1].imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[$random+1].name+'</p>'+
                '<p>型号:'+$data.goodslist[$random+1].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[$random+1].price+'</p>'+
                '</li></a>'+
                '<a href="../html/xiangqing.html?idx=dj'+($random)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;""data-idx="'+$random+'">'+
                '<img src="'+$data.goodslist[$random].imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[$random].name+'</p>'+
                '<p>型号:'+$data.goodslist[$random].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[$random].price+'</p>'+
                '</li></a>'+
                '<a href="../html/xiangqing.html?idx=dj'+($random-1)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;""data-idx="'+($random-1)+'">'+
                '<img src="'+$data.goodslist[$random-1].imgurl+
                '"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[$random-1].name+'</p>'+
                '<p>型号:'+$data.goodslist[$random-1].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[$random-1].price+'</p>'+
                '</li></a>'+
                '<a href="../html/xiangqing.html?idx=dj'+($random+1)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;""data-idx="'+($random+1)+'">'+
                '<img src="'+$data.goodslist[$random+1].imgurl+
                '"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[$random+1].name+'</p>'+
                '<p>型号:'+$data.goodslist[$random+1].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[$random+1].price+'</p>'+
                '</li></a>'+
                '<a href="../html/xiangqing.html?idx=dj'+($random)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;""data-idx="'+($random)+'">'+
                '<img src="'+$data.goodslist[$random].imgurl+
                '"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[$random].name+'</p>'+
                '<p>型号:'+$data.goodslist[$random].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[$random].price+'</p>'+
                '</li></a>');
         

    // 数码产品随机显示 
         function rnd(n, m){
            $random = (Math.floor(Math.random()*(m-n+1)+n));
            return $random;
        };
            rnd(31,39);      
        $('.shuma-body').html('<a href="../html/xiangqing.html?idx=shuma'+($random+1)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:30px;data-idx="'+($random+1)+'">'+
                '<img src="'+$data.goodslist[($random+1)].imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[($random+1)].name+'</p>'+
                '<p>型号:'+$data.goodslist[($random+1)].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[($random+1)].price+'</p>'+
                '</li></a>'+
                '<a href="../html/xiangqing.html?idx=shuma'+($random)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;data-idx="'+($random)+'">'+
                '<img src="'+$data.goodslist[($random)].imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[($random)].name+'</p>'+
                '<p>型号:'+$data.goodslist[($random)].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[($random)].price+'</p>'+
                '</li></a>'+
                '<a href="../html/xiangqing.html?idx=shuma'+($random-1)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;data-idx="'+($random-1)+'">'+
                '<img src="'+$data.goodslist[($random-1)].imgurl+
                '"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[($random-1)].name+'</p>'+
                '<p>型号:'+$data.goodslist[($random-1)].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[($random-1)].price+'</p>'+
                '</li></a>'+
                '<a href="../html/xiangqing.html?idx=shuma'+($random+1)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;data-idx="'+($random+1)+'">'+
                '<img src="'+$data.goodslist[($random+1)].imgurl+
                '"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[($random+1)].name+'</p>'+
                '<p>型号:'+$data.goodslist[($random+1)].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[($random+1)].price+'</p>'+
                '</li></a>'+
                '<a href="../html/xiangqing.html?idx=shuma'+($random)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;data-idx="'+($random)+'">'+
                '<img src="'+$data.goodslist[($random)].imgurl+
                '"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[($random)].name+'</p>'+
                '<p>型号:'+$data.goodslist[($random)].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[($random)].price+'</p>'+
                '</li></a>');
         


    // 家电优选随机显示 
         function rnd(n, m){
            $random = Math.floor(Math.random()*(m-n+1)+n);
            return Math.abs($random);
        };
            rnd(42,48);     
        $('.home-body').html('<a href="../html/xiangqing.html?idx=home'+($random-1)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:30px;data-idx="'+($random-1)+'">'+
                '<img src="'+$data.goodslist[($random-1)].imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[($random-1)].name+'</p>'+
                '<p>型号:'+$data.goodslist[($random-1)].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[($random-1)].price+'</p>'+
                '</li></a>'+
                '<a href="../html/xiangqing.html?idx=home'+($random)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;data-idx="'+($random)+'">'+
                '<img src="'+$data.goodslist[($random)].imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[($random)].name+'</p>'+
                '<p>型号:'+$data.goodslist[($random)].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[($random)].price+'</p>'+
                '</li></a>'+
                '<a href="../html/xiangqing.html?idx=home'+($random+1)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;data-idx="'+($random+1)+'">'+
                '<img src="'+$data.goodslist[($random+1)].imgurl+
                '"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[($random+1)].name+'</p>'+
                '<p>型号:'+$data.goodslist[($random+1)].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[($random+1)].price+'</p>'+
                '</li></a>'+
                '<a href="../html/xiangqing.html?idx=home'+($random-1)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;data-idx="'+($random-1)+'">'+
                '<img src="'+$data.goodslist[($random-1)].imgurl+
                '"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[($random-1)].name+'</p>'+
                '<p>型号:'+$data.goodslist[($random-1)].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[($random-1)].price+'</p>'+
                '</li></a>'+
                '<a href="../html/xiangqing.html?idx=home'+($random)+'"><li style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;data-idx="'+($random)+'">'+
                '<img src="'+$data.goodslist[($random)].imgurl+
                '"width="150" height="200"/>'+
                '<p>品牌:'+$data.goodslist[($random)].name+'</p>'+
                '<p>型号:'+$data.goodslist[($random)].introduce+'</p>'+
                '<p style="color:red;">售价：¥'+$data.goodslist[($random)].price+'</p>'+
                '</li></a>'); 
           
                 
     // 本周热销  
        $.each($data.sellnumber, function(){
             $('.sellnumber-content').append(
                '<div class="item" style="width:230px; border:2px solid #ccc;padding-left:30px;float:left;margin-left:5px;margin-top:5px;"data-idx="'+this.idx+'">'+
                '<img src="'+this.imgurl+'"width="150" height="200"/>'+
                '<p>品牌:'+this.name+'</p>'+
                '<p>型号:'+this.introduce+'</p>'+
                '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
                '<p>售价：¥'+this.price+'</p>'+
                '</div>'); 
        })  
          
        $('.sellnumber-content div').hover(function(){
            $(this).css('border-color','red');
        },function(){
            $(this).css('border-color','#ccc');  
        });
        $('.sellnumber-content').on('click','.item',function(){
            var it = $(this)[0];
            var idx = it.getAttribute('data-idx'); 
             idx = (idx-1)*1;   
            console.log(idx);         
            location.href ='../html/xiangqing.html?idx='+idx;
        });
     
      
    // 品牌精选
    $.each($data.computer.slice(5),function(){
         $('.choice-brand_list').append(
            '<li class="item" data-idx="'+this.idx+'">'+
            '<img src="'+this.imgurl+'"width="150" height="200"/>'+
            '<p>品牌:'+this.name+'</p>'+
            '<p>型号:'+this.introduce+'</p>'+
            '<p style="color:red;">销量:'+this.sellnumber+'</p>'+
            '<p>售价：¥'+this.price+'</p>'+
            '</li>') 
    })

    // 点击所有商品商品跳转详情页
    $('.choice-brand_list').on('click','li',function(){
        var it = $(this)[0];
        var idx = it.getAttribute('data-idx'); 
        idx = (idx-1)*1;    
        location.href ='../html/xiangqing.html?idx='+idx;

    })
    $('li').hover(function(){
        $(this).css('border-color','red');
        },function(){
        $(this).css('border-color','#ccc');  
    });
  
}
})

    // 头部用户
    var params = decodeURI(location.search);
    params = params.slice(1,-1);
    $('.uname').text(params);
});

