<?php
include "page-portf-php/gestion_erreurs.php";

header('Content-Type: text/html; charset=utf8');
  try
  {
    $bdd_connect = new PDO("mysql:host=localhost;dbname=monportfolio", "root", "", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
  }
  catch(Exception $error)
  {
    die("ERROR: " . $error->getMessage());
  }
?>
