
window.onload=function(){
	//$(".loading").hide();
	var width=$(window).width();
	var height=$(window).height();
	$(".banner,.banner ul li").css({"width":width,"height":height});
	
	
	function get_width(){
		$(".get_width").each(function(index, element) {
            var _width=$(this).find("dt:nth-child(1) img").width();
		 	$(this).css({"width":_width});
        });
		}
	get_width();
	$(window).resize(function(){
		width=$(window).width();
		height=$(window).height();
	    //$(".banner,.banner ul li").css({"width":width,"height":height});
		get_width();
	});
	
	var footer_h=$(".footer").height();
	$(".page8 .list").css("height",height-footer_h+2);
	
	var index=0;
	var imgsize=$(".banner ul li").size();
	$(".banner ul li").eq(0).addClass("move");
	$(".arrow").addClass("move");
	/*向上滑动2*/
	for(var i=0;i<imgsize;i++){
		$(".banner ul li").eq(i).css({"z-index":80-i});
		}

	$(".banner ul li").on("swipeUp",function(){
		index=$(this).index();

		if(index<imgsize-1){
			var now=index;
			$(this).animate({"-webkit-transform":"translateY(-"+height+"px)"},500,"ease-in-out",function(){
				$(".banner ul li").removeClass("move").eq(now+1).addClass("move");
				})
			}
			/*else{
				window.location.href="search.htm";
				}*/
		});	
	
	
	/*向下滑动2*/
	$(".banner ul li").on("swipeDown",function(){
		index=$(this).index();
		if(index>0){
			var now=index;
			$(".banner ul li").eq(now-1).animate({"-webkit-transform":"translateY(0)"},500,"ease-in-out",function(){
				$(".banner ul li").removeClass("move").eq(now-1).addClass("move");
				})
			}
		});
	
	
//音乐播放
	var Media = document.getElementById("bg");
	var conut=0;
	$(".media-wrap").addClass("on");
	Media.play();
	conut=1; 
	 $(".media-wrap").click(function(){//点击的时候判断音频的播放状态
	 	if(conut==1){
			Media.pause(); 
			$(".media-wrap").removeClass("on");
			conut=0;
	 	}else{
			 Media.play();
			 $(".media-wrap").addClass("on");
			 conut=1; 
	 	}
	 });
	 
	var footer_h=$(".footer").height();
	$(".page3 .list").css("height",height-footer_h+2);
	
};


