var z = document.cookie;
if (z=="") {
	document.cookie = "val=0; expires=Fri, 18 Dec 2020 12:00:00 UTC";
	z = 0;
}

else {
	z = z.split("val=");
	z = z[1];
	z = parseInt(z)+1;
	document.cookie = "val="+z;
}

document.getElementById('visit_count').innerHTML = z;