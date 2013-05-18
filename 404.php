<?php
$URL = $_SERVER['REQUEST_URI'];
?>
<html>
    <head>
           <title>DirectMyFile - 404</title>
           <meta name="viewport" content="width=device-width, initial-scale=1.0">        
        
		  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600">
		  <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">		  
	     <link href="css/bootstrap-responsive.css" rel="stylesheet">
	     <link rel="stylesheet" href="css/font-awesome.min.css">

        <style type="text/css">
			body {
				font-family: 'Open Sans';
				color: rgb(60, 60, 60);
				text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
			}
			h2 {
				font-size: 3em;
				margin: 10px;
				color: black;
			}
			.hero-unit {
				padding-top: 30px !important;
			}
			.hero-title {
				text-align: center;
				font-weight: 300;
				height: auto;
			}
			.hero-body {
				text-align: center;
			}
			.mini-hero {
				padding: 8px;
				line-height: normal !important;
			}
			h3 {
				margin-left: 14px;
			}
			.mini-p {
				margin-left: 14px;
			}
			 {
				margin-left: 60px;
			}
			.mini-1-sub {
				display: none;
			}
			.mini-2-sub {
				display: none;
			}
			.mini-3-sub {
				display: none;
			}
			.icon {
				text-align: right;
			}
			.btn {
				margin-left: 20px;
			}
		  </style>
    </head>
    <body class="container">
    	  <div class="page-header">
    	  		<h2>DirectMyFile - 404</h2>
    	  </div>
		  <div class="hero-unit well">
		  		<h2 class="hero-title">This is not the page your looking for.</h2>
		  		<br />
		  		<p class="hero-body">Sorry! We couldn't find <?php echo $URL ?> on DirectMyFile. <a href="index.html" class="btn btn-primary">Return to DirectMyFile</a></p>
		  </div>
		  <div class="container" style="text-align: center;">
		  		DirectMyFile is Copyright 2012-2013 <a href="https://plus.google.com/109037068209793592173">Kenneth Endfinger</a>. Site created by a friendly person.
				<br />		  
		  </div>
    </body>
</html>