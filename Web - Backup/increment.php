<?php
	$myfile = fopen("visit.txt", "r");
	$x = fread($myfile,filesize("visit.txt"));
	fclose($myfile);
	$myfile = fopen("visit.txt", "w");
	$x += 1;
	fwrite($myfile, $x);
	fclose($myfile);
 ?>