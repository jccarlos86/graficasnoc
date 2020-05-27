<?php
    include 'conexion.php';

    $pais = $_POST['pais'];
    $cantidad = $_POST['cantidad'];

    $result;

    $insert = $con -> query("INSERT INTO GraficasNoc (id, pais, cantidad, fecha)
        values ('', '$pais', '$cantidad', NOW())");

    if($insert){
    $result = "true";
    }else{
        $result = die("Connection failed: " . mysqli_connect_error());
    }
    echo $result;
    mysqli_close($con);
?>