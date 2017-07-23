$(function(){
	$(".ipt2").click(function(){
		$(".ipt2").attr("disabled","disabled")
		var i=60;
		timer=setInterval(function(){
			 i--;
			$(".ipt2").css({'background':'#999999','color':'#eeeeee'})
			$(".ipt2").val(i+"s");
			if(i==0){
				$(".ipt2").removeAttr("disabled","disabled")
				$(".ipt2").val(i+"s");				
				$(".ipt2").css({'background':'#fa5a2a','color':'white'})				
				$(".ipt2").val("重新发送");
				clearInterval(timer)
			}
		},1000)
	})
	//提交按钮
	$(".footer input").click(function(){
			$(".chenggong").show();
	})

	$(".chenggong").click(function(){
		$(this).hide()
	})

})
