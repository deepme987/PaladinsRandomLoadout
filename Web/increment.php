<?php
	$myfile = fopen("visit.txt", "r+");
	$x = fread($myfile,filesize("visit.txt"));
	$x += 1;
	fseek($myfile, 0);
	fwrite($myfile, $x);
	fclose($myfile);
	echo "Loadouts Generated so far: ".$x;
 ?>