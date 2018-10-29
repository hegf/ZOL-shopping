jQuery(function(){

     $.get("../api/car.php", function(arr){
        var arr = JSON.parse(arr);
            arr = arr.cargoods;
        //     console.log(arr);
            $.each(arr,function(){
             $('#table').append(
                '<tr class="clearfix" idx="'+this.idx+'">'+
                '<td colspan="2" class="s-infor">'+
                // '<input name="cartId" type="checkbox" value="" checked="">'+
                '<img class="img" src="'+this.imgurl+'"width="80" heigh="80"/>'+
                '<div clsaa="security clearfix">'+
                '<h3 class="tit">'+this.name+'</h3><span class="jix">机型:'+
                this.introduce+'</span></div>'+
                '</td>'+
                '<td class="s-price">'+this.price+'</td>'+
                '<td class="s-amount">'+
                '<div class="buy-num"><span class="jian">--</span><input type="text" class="text-amount" value=1><i class="jiao">++</i></div>'+
                '</td>'+
                '<td class="s-agio"><div>--</div></td>'+
                '<td class="s-total"><em class="xtotal">'+this.price+'</em></td>'+
                '<td class="s-del"><div class="s-delbox">删除</div></td></tr>');
              });                   
            $('.jian').css({'margin-right':'8px'});
            $('.jiao').css({'margin-left':'8px'});
            $('.jian,.jiao').hover(function(){
                $(this).css({'color':'red','cursor':'pointer'})
                },function(){
                $(this).css({'color':'','cursor':''})
            }); 
            $('.carnum').html(arr.length);
            $('.carnum').css('color','red');
    });
    
           

    // 价格小计
            $("#table").on('click','.jiao',function(){ 
              var t = $(this).prev(".text-amount").val();
                    t++;
                $(".text-amount").val(t);
                var sum = 0;
                var price = $(this).parent().parent().prev().text();
                sum = t*price;
                var tol1 = $(this).parent().parent().next().next().children();
                tol1.text(sum.toFixed(2));
            })
   
            $('#table').on('click','.jian',function(){
            var j = $(this).next('.text-amount').val();
                j--;
                $(".text-amount").val(j);
                if(j<0){j=0}
                var sum = 0;
                var price = $(this).parent().parent().prev().text();
                sum = j*price;
                var tol2 = $(this).parent().parent().next().next().children();
                tol2.text(sum.toFixed(2));       
            });
       
   // 点击删除
            $('#table').on('click','.s-delbox',function(){
                $(this).css({'color':'red','cursor':'pointer'});
                $idx = $(this).parent().parent().attr('idx');
                // 存cookie删除记录
                var arr = Cookie.getCookie("goodslist") || [];
                    if(typeof(arr) == "string"){
                        arr = JSON.parse(arr);
                    };
                var goodsObj = {
                    idx : $idx,
                    imgurl :$(this).parent().prev().prev().prev().prev().prev().children('.img')[0].src,
                    name : $(this).parent().prev().prev().prev().prev().prev().children().children('.tit').text(),
                    introduce:$(this).parent().prev().prev().prev().prev().prev().children().children('.jix').text(),
                    price : $(this).parent().prev().text(),
                    };
                    arr.push(goodsObj);
                    var goodslist = JSON.stringify(arr);console.log(goodslist);
                    document.cookie = "goodslist=" + goodslist;
                $.get("../api/car.php",{'del':$idx}, function(){
                   window.location.reload();
                })
            });
            $('#table').on('mouseover','.s-delbox',function(){
                $(this).css({'color':'red','cursor':'pointer'});
            })

            $('#table').on('mouseout','.s-delbox',function(){
                $(this).css({'color':'','cursor':''});
            })


    // 右侧删除记录,获取cookie
            var arr = Cookie.getCookie("goodslist") || []; 
            if(typeof arr == "string"){
               arr =  JSON.parse(arr);    //数组
            }
            $.each(arr,function(){
            $('.hostoriy').append(
                '<img class="img" src="'+this.imgurl+'"width="80" heigh="80"/>'+
                '<h3>'+this.name+'</h3><h4>机型:'+this.introduce+'</h4>'+
                '<p">'+this.price+'</p>'
                );
            })

            $('.hostoriy').css({'width':'300px','background':'#eee',
                'position':'absolute','right':'0px','text-align':'center'})
        
});




