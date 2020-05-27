<?php
    include 'conexion.php';
    $result;
    $jsonArray = array();
    //$query = "SELECT pais, fecha, cantidad FROM GraficasNoc";
    //chart
    $query = "SELECT pais, fecha, cantidad FROM GraficasNoc GROUP BY pais";

    $sel = $con ->query($query);
    if($sel){
        while($row = mysqli_fetch_array($sel)){
            $pais = $row['pais'];
            $cantidad = $row['cantidad'];
            $fecha = $row['fecha'];
            //$jsonArray[] = array('Pais' => $pais, 'Cantidad' => $cantidad, 'Fecha' => $fecha);
            //$jsonArray[] = array('x' => $fecha, 'y' => $cantidad);
            //chart
            $jsonArray[] = array('Pais' => $pais, 'Cantidad' => $cantidad, 'Fecha' => $fecha);
        }
        $result = json_encode($jsonArray);
    }else{
        $result = die("Connection failed: " . mysqli_connect_error());
    }
    echo $result;
    mysqli_close($con);
?>