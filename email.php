<?php

    $toEmail = "hubert.julien@gmail.com";
    $mailHeaders = "From: Ethypharm UK : " . $_POST["name"] . "<". $_POST["email"] .">\r\n";
	
	
	 
	if(isset($_POST['captchResponse'])){
          $captcha=$_POST['captchResponse'];  print $captcha;
    }
	
    if(!$captcha){
    	print "<p class='Error'>Problem in Sending Mail.</p>";
    	exit;
   }
       $secretKey = "6LcARggUAAAAAAto65tJkVx1-5UhlmXt42a3B2JX";
        $ip = $_SERVER['REMOTE_ADDR'];
		$url = "https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip;
		
        $response=file_get_contents($url);
		
        $responseKeys = json_decode($response,true);
        if(intval($responseKeys["success"]) !== 1) {
          $send = false; echo "a";
        } else {
           $send = true;  echo "b";
        }
		

    if($send && mail($toEmail, "New message from Ethypharm UK Website", "\n\nEmail: " . $_POST["email"] . "\n\nPhone: " . $_POST["phone"] . "\n\nType: " . $_POST["select"] . "\n\nMessage: \n" . $_POST["message"], $mailHeaders)) {
        
        print "<span class='success'>Your message has been sent successfully.</span>";

    } 
    else {

        print "<span class='Error'>Problem in Sending Mail.</span>";

    }

?>