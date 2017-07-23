$(function(){
	    	$(".btn").click(function(){
//	    		$(".password input").attr("type","text");	    		
	    		if($(".password input").attr("type") == "password"){
	    			$(".password input").attr("type","text");
	    		}else{
	    			$(".password input").attr("type","password");
	    		}

	    	})
})