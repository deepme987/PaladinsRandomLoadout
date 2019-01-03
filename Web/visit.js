$(document).ready(function(){
    console.log("ready");
    $.ajax({
	    url: 'get.php',
        type: 'get',
        success: function(data){
            $('#count').html(data);
        },
    });
});

$('.buttons').click(function() {
    console.log("click");
	$.ajax({
        url: "increment.php",
		type: "POST",
        success: function(data){
            $('#count').html(data);
        },
	});
});