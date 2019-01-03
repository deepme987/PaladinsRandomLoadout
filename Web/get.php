<?php
	$myfile = fopen("visit.txt", "r");
	$x = fread($myfile,filesize("visit.txt"));
	fclose($myfile);
	echo "Loadouts Generated so far: ".$x;
 ?>