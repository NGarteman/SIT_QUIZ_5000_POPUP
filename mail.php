<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<?php

foreach ( $_POST as $key => $value ) {
  if ($key == 'name' ||  $key == 'phone' ||  $key == 'email') {
    $mes .= "$key: $value
";
  }else{
    $temp = "";
    for($i=0; $i < count($value); $i++){
      $temp .= $value[$i] . ' | ';        
    }
    $temp = mb_substr($temp, 0, -2); 
    $mes .= "$key: $temp
";
  }
}


$result = array(
  'name' => $_POST["name"],
  'phonenumber' => $_POST["phonenumber"]
); 
  
/* Сюда впишите свою эл. почту */
 $address = "unformer@yandex.ru";

 $sub = "Заявка с сайта";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
 $send = mail($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:info@quiz.ru");
 if ($send == 'true')
 {
  return true;
 }
 else 
 {
  return false;
 }
?>