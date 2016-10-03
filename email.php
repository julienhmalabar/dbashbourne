<?php

    $toEmail = "hubert.julien@gmail.com";
    $mailHeaders = "From: Ethypharm UK : " . $_POST["name"] . "<". $_POST["email"] .">\r\n";

    if(mail($toEmail, "New message from Ethypharm UK Website", "\n\nEmail: " . $_POST["email"] . "\n\nPhone: " . $_POST["phone"] . "\n\nType: " . $_POST["select"] . "\n\nMessage: \n" . $_POST["message"].$_POST['captchResponse']."654", $mailHeaders)) {
        
        print "<p class='success'>Contact Mail Sent.</p>";

    } 
    else {

        print "<p class='Error'>Problem in Sending Mail.</p>";

    }

?>