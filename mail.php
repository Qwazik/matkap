<?php
$to = "brk-gorod@yandex.ru";
$sitename = "matcapital32";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$message = "Имя: $name \nТелефон: $phone";
$pagetittle = "Новая заявка с \"$sitename\"";
mail($to,$pagetittle,$message, "Content-type: text/plain; charset=\"utf-8\"\n From: $sitename");
?>