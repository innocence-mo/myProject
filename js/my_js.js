/* 
* @Author: Marte
* @Date:   2019-10-01 22:05:24
* @Last Modified by:   Marte
* @Last Modified time: 2019-10-06 13:50:32
*/

$(document).ready(function(){
    $(".nav ul li").hover(function(event){

        $(".bg").css("left",parseFloat($(".active").eq(0)[0].offsetLeft)+'px')
        // $(".bg").css("width",parseFloat($(".active").width())+'px');
    })
    $(".nav ul li").click(function(){
        $(".bg").css("left",parseFloat($(this)[0].offsetLeft)+'px');
        // $(".bg").css("width",parseFloat($(this).width())+'px');
    })
    $(".nav ul li ").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
// 导航栏滑块效果
    
    // 轮播图效果
    let figureUl = document.querySelector("#figureUl");
    let firstChild = figureUl.children[0];
    let newLi = firstChild.cloneNode(true);
    figureUl.appendChild(newLi);
    let idx = 0;
    let $figureUl = $("#figureUl");
    let $shuffling_figue=$(".shuffling_figue");
    $("#dotLi1").css("background-color","white");
    // 每隔一段时间让索引+1，实现轮播
    let timer=setInterval(autoPlay, 2000);
    // 鼠标移入的图片区域，停止定时器
    $shuffling_figue.on("mouseover",function(){
        clearInterval(timer);
    })
    // 鼠标移出图片区域，开启定时器
     $shuffling_figue.on("mouseout",function(){
      timer= setInterval(autoPlay,2000);
        // 重新给timer赋值
    }) 
    // 轮播函数，利用索引idx向左移动
      function autoPlay(){
        idx++;
        if(idx == 6){
            figureUl.style.left = 0;
            idx = 1;
        }
         judgeDot();
        $figureUl.animate({left:-539*idx+'px'},1000)        
    }

    let $btLeft = $("#btLeft");
    let $btRight = $("#btRight");
    $btLeft.click(function(){
        if(idx >0){
            idx--;
            judgeDot();
            $figureUl.animate({left:-539*idx+'px'},1000)              
        }
    })
    $btRight.click(function(){
        if(idx<4){
            idx++;
            judgeDot();
             $figureUl.animate({left:-539*idx+'px'},1000)
        }
    })
    // 轮播图按钮，点击往前或者往后一个索引单位,利用事件委托
    $("#figureDot").click(function(event){
        idx=event.target.id.slice(-1)-1;
        judgeDot();
        $figureUl.animate({left:-539*idx+'px'},1000)

    })
    //判断轮播图圆点索引，每次点击圆点，按钮，定时器，都先使用函数判断一次
     let $dotLi=$(".dotLi");
       function judgeDot(){       
       $(".dotLi").css("background-color","darkgray");
       $(".dotLi").css("height","20px");
       $(".dotLi").removeClass('backPosition');
    
            if(idx==5||idx==0){
                $("#dotLi1").css("background-color","white");
                 $("#dotLi1").css("height","25px");
                 $("#dotLi1").addClass('backPosition')
            }
            if(idx==1){                    
                  $("#dotLi2").css("background-color","white");
                  $("#dotLi2").css("height","25px");
                  $("#dotLi2").addClass('backPosition')
            }
            if(idx==2){                             
                 $("#dotLi3").css("background-color","white");
                 $("#dotLi3").css("height","25px");
                 $("#dotLi3").addClass('backPosition')
            }
            if(idx==3){                  
                 $("#dotLi4").css("background-color","white");
                 $("#dotLi4").css("height","25px");
                 $("#dotLi4").addClass('backPosition')
            }
            if(idx==4){                  
                 $("#dotLi5").css("background-color","white");
                 $("#dotLi5").css("height","25px");
                 $("#dotLi5").addClass('backPosition')
            }
        }        
});