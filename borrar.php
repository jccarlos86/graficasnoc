<?php
    include 'conexion.php';
    
    $query = "DELETE FROM GraficasNoc";

    $del = $con ->query($query);
    if($del){
        $result = 'true';
    }else{
        $result = 'false';
    }
    echo $result;
    mysqli_close($con);
?>