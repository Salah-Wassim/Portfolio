<?php
  include "page-portf-php/connextion_bdd.php";

  if(isset($_POST["name"]) && $_POST["name"]!="")
  {
    $sql = "SELECT * FROM `formulaire` WHERE `name` = '" . $_POST["name"] . "'";
    //Requête vers la base de donnée
    $req = $bdd_connect->prepare($sql) or die(print_r($bdd_connect->errorInfo()));
    $req->execute();
    $nbre_result = $req->rowCount();
    $req->closeCursor();
    if($nbre_result == 0)
    {
      if(isset($_POST["email"]) && isset($_POST["message"]))
      {
        if($_POST["email"]!="" && $_POST["message"]!="")
        {
          $sql="INSERT INTO `formulaire` (`id_formulaire`, `name`, `email`, `message`) VALUES (NULL, '" . $_POST["name"] . "', '" . $_POST["email"] . "', '" . $_POST["message"] . "' )";
          $req = $bdd_connect->prepare($sql) or die(print_r($bdd_connect->errorInfo()));
          $req->execute();
          $req->closeCursor();
        }
      }
      header("Location: http://localhost/ProjetPortfolio/Monportfolio.php");
    }
    else
    {
      echo "Oups!!! Il semble que vous soyez déjà enregistré";
    }
  }
?>
