if(window.innerWidth < 568){
	$(function() {
		$("#load").hide();
	});
}

else {
	document.onreadystatechange = function () {
		var state = document.readyState
		if (state == 'interactive') {
			$("#contents").hide();
		} else if (state == 'complete') {
		    setTimeout(function(){
		        document.getElementById('interactive');
		        $("#load").hide(100);
		        // document.getElementById('contents').style.visibility="visible";
		        $("#contents").fadeIn(700);
		  	},1000);
		}
	}
}