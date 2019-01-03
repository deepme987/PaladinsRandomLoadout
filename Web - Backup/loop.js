var x = "";
for(var i = 0; i < 39; i++) {
	x += '<div class="flex"><button onclick="return randomize('+i+')"><img src="Addons/'+i+'.png" alt="'+i+'"></button></div>';
}

x += '<div class="flex"><button onclick="return randomize()"><img src="Addons/random.png" alt="random"></button></div>';
document.getElementById('content').innerHTML=x;