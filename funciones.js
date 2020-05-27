var paises = [
    "Afganistán", 
    "Albania", 
    "Alemania", 
    "Andorra", 
    "Angola", 
    "Antigua y Barbuda", 
    "Arabia Saudita", 
    "Argelia", 
    "Argentina", 
    "Armenia", 
    "Australia", 
    "Austria", 
    "Azerbaiyán", 
    "Bahamas", 
    "Bangladés", 
    "Barbados", 
    "Baréin", 
    "Bélgica", 
    "Belice", 
    "Benín", 
    "Bielorrusia", 
    "Birmania", 
    "Bolivia", 
    "Bosnia y Herzegovina", 
    "Botsuana", 
    "Brasil", 
    "Brunéi", 
    "Bulgaria", 
    "Burkina Faso", 
    "Burundi", 
    "Bután", 
    "Cabo Verde", 
    "Camboya", 
    "Camerún", 
    "Canadá", 
    "Catar", 
    "Chad", 
    "Chile", 
    "China", 
    "Chipre", 
    "Ciudad del Vaticano", 
    "Colombia", 
    "Comoras", 
    "Corea del Norte", 
    "Corea del Sur", 
    "Costa de Marfil", 
    "Costa Rica", 
    "Croacia", 
    "Cuba", 
    "Dinamarca", 
    "Dominica", 
    "Ecuador", 
    "Egipto", 
    "El Salvador", 
    "Emiratos Árabes Unidos", 
    "Eritrea", 
    "Eslovaquia", 
    "Eslovenia", 
    "España", 
    "Estados Unidos", 
    "Estonia", 
    "Etiopía", 
    "Filipinas", 
    "Finlandia", 
    "Fiyi", 
    "Francia", 
    "Gabón", 
    "Gambia", 
    "Georgia", 
    "Ghana", 
    "Granada", 
    "Grecia", 
    "Guatemala", 
    "Guyana", 
    "Guinea", 
    "Guinea ecuatorial", 
    "Guinea-Bisáu", 
    "Haití", 
    "Honduras", 
    "Hungría", 
    "India", 
    "Indonesia", 
    "Irak", 
    "Irán", 
    "Irlanda", 
    "Islandia", 
    "Islas Marshall", 
    "Islas Salomón", 
    "Israel", 
    "Italia", 
    "Jamaica", 
    "Japón", 
    "Jordania", 
    "Kazajistán", 
    "Kenia", 
    "Kirguistán", 
    "Kiribati", 
    "Kuwait", 
    "Laos", 
    "Lesoto", 
    "Letonia", 
    "Líbano", 
    "Liberia", 
    "Libia", 
    "Liechtenstein", 
    "Lituania", 
    "Luxemburgo", 
    "Macedonia del Norte", 
    "Madagascar", 
    "Malasia", 
    "Malaui", 
    "Maldivas", 
    "Malí", 
    "Malta", 
    "Marruecos", 
    "Mauricio", 
    "Mauritania", 
    "México",
    "Micronesia", 
    "Moldavia", 
    "Mónaco", 
    "Mongolia", 
    "Montenegro", 
    "Mozambique", 
    "Namibia", 
    "Nauru", 
    "Nepal", 
    "Nicaragua", 
    "Níger", 
    "Nigeria", 
    "Noruega", 
    "Nueva Zelanda", 
    "Omán", 
    "Países Bajos", 
    "Pakistán", 
    "Palaos", 
    "Panamá", 
    "Papúa Nueva Guinea", 
    "Paraguay", 
    "Perú", 
    "Polonia", 
    "Portugal", 
    "Reino Unido", 
    "República Centroafricana", 
    "República Checa", 
    "República del Congo", 
    "República Democrática del Congo", 
    "República Dominicana", 
    "Ruanda", 
    "Rumanía", 
    "Rusia", 
    "Samoa", 
    "San Cristóbal y Nieves", 
    "San Marino", 
    "San Vicente y las Granadinas", 
    "Santa Lucía", 
    "Santo Tomé y Príncipe", 
    "Senegal", 
    "Serbia", 
    "Seychelles", 
    "Sierra Leona", 
    "Singapur", 
    "Siria", 
    "Somalia", 
    "Sri Lanka", 
    "Suazilandia", 
    "Sudáfrica", 
    "Sudán", 
    "Sudán del Sur", 
    "Suecia", 
    "Suiza", 
    "Surinam", 
    "Tailandia", 
    "Tanzania", 
    "Tayikistán", 
    "Timor Oriental", 
    "Togo", 
    "Tonga", 
    "Trinidad y Tobago", 
    "Túnez", 
    "Turkmenistán", 
    "Turquía", 
    "Tuvalu", 
    "Ucrania", 
    "Uganda", 
    "Uruguay", 
    "Uzbekistán", 
    "Vanuatu", 
    "Venezuela", 
    "Vietnam", 
    "Yemen", 
    "Yibuti", 
    "Zambia", 
    "Zimbabue", 
]; 

var intervalo = {
  get: 0,
  create: 0  
};

//---------------------------------------------
var templates = {
    sets:[
        {
            label: 'votos',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: "#6E2796",
            borderColor: "#6E2796",
            //borderWidth: 1
        }
    ],
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    escritos:'<div class="card">'+
                '<div class="card-body">'+
                '</div>'+
            '</div>'
}
//---------------------------------------------

function getPaisRandom(){
    //var index = Math.round(Math.random() * ((paises.length) - 1) + 1);
    var maxCant = Math.round(Math.random() * (100 - 1) + 1);
}

function detenerIntervalo(intervalo){
    clearInterval(intervalo);
}

function deleteDomie(){
    $.ajax({
        data: {   },
        url: 'borrar.php',
        type: 'post',
        beforeSend: function () {
        },
        success: function (response) {
            console.log(response);
        }
    });
}

function initInterval(tipo, intervalo){
    if(tipo == 1){
        intervalo.get = setInterval(() => {
            getData();
        }, intervalo);
    }else if(tipo == 2){
        intervalo.create = setInterval(() => {
            guardar();
        }, intervalo); 
    }
}

function guardar(){
    $.ajax({
        data: { 
            pais: escape(paises[Math.round(Math.random() * (paises.length - 1) + 1)]),
            cantidad: Math.round(Math.random() * (100 - 1) + 1)
         },
        url: 'insertar.php',
        type: 'post',
        beforeSend: function () {
            console.log("Guardando...");
        },
        success: function (response) {
            console.log(response, new Date());
        }
    });
}

function getData(){
    $.ajax({
        data: {  },
        url: 'obtener.php',
        type: 'post',
        beforeSend: function () {
            console.log("obteniendo...");
        },
        success: function (response) {
            if(response.startsWith("Connection")){
                console.log("Error: " + response);
            }else if(response != "null"){
                var data = JSON.parse(response);
                //console.log(data);
                //grafica2(data);
                chart(data);
            }
        }
    });
}

function createGrafica(){
    // var datos = [];
    // for(var a = 0; a < data.length; a++){
    //     datos.push(data[a]);
    // }
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Traffic"
        },
        axisX:{
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Number of Visits",
            crosshair: {
                enabled: true
            }
        },
        toolTip:{
            shared:true
        },  
        legend:{
            cursor:"pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
            type: "line",
            showInLegend: true,
            name: "Total Visit",
            markerType: "square",
            xValueFormatString: "DD MMM, YYYY",
            color: "#F08080",
            dataPoints: 
            [
                { x: new Date(2017, 0, 3), y: 650 },
                { x: new Date(2017, 0, 4), y: 700 },
                { x: new Date(2017, 0, 5), y: 710 },
                { x: new Date(2017, 0, 6), y: 658 },
                { x: new Date(2017, 0, 7), y: 734 },
                { x: new Date(2017, 0, 8), y: 963 },
                { x: new Date(2017, 0, 9), y: 847 },
                { x: new Date(2017, 0, 10), y: 853 },
                { x: new Date(2017, 0, 11), y: 869 },
                { x: new Date(2017, 0, 12), y: 943 },
                { x: new Date(2017, 0, 13), y: 970 },
                { x: new Date(2017, 0, 14), y: 869 },
                { x: new Date(2017, 0, 15), y: 890 },
                { x: new Date(2017, 0, 16), y: 930 }
            ]
        },
        {
            type: "line",
            showInLegend: true,
            name: "Unique Visit",
            lineDashType: "dash",
            dataPoints: [
                { x: new Date(2017, 0, 3), y: 510 },
                { x: new Date(2017, 0, 4), y: 560 },
                { x: new Date(2017, 0, 5), y: 540 },
                { x: new Date(2017, 0, 6), y: 558 },
                { x: new Date(2017, 0, 7), y: 544 },
                { x: new Date(2017, 0, 8), y: 693 },
                { x: new Date(2017, 0, 9), y: 657 },
                { x: new Date(2017, 0, 10), y: 663 },
                { x: new Date(2017, 0, 11), y: 639 },
                { x: new Date(2017, 0, 12), y: 673 },
                { x: new Date(2017, 0, 13), y: 660 },
                { x: new Date(2017, 0, 14), y: 562 },
                { x: new Date(2017, 0, 15), y: 643 },
                { x: new Date(2017, 0, 16), y: 570 }
            ]
        }
    ]
    });
    chart.render();

    function toogleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else{
            e.dataSeries.visible = true;
        }
        chart.render();
    }
}

function grafica2(data){
    var dt = [];
    for(var a =0; a < data.length; a++){
        dt.push({x: new Date(data[a].x), y: parseInt(data[a].y)});
    }
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light1", // "light2", "dark1", "dark2"
        animationEnabled: true, // change to true		
        title:{
            text: "Basic Column Chart"
        },
        data: [
            {
                // Change type to "bar", "area", "spline", "pie",etc.
                type: "line",
                dataPoints: dt
                // dataPoints: [
                //     { x: new Date("2020-05-19 22:45:29"),  y: 78  },
                //     { x: new Date("2020-05-19 22:50:39"), y: 60  },
                //     { x: new Date("2020-05-19 22:55:42"), y: 76  },
                //     { x: new Date("2020-05-19 23:00:45"),  y: 65  },
                //     { x: new Date("2020-05-19 23:05:48"),  y: 85  },
                //     { x: new Date("2020-05-19 23:10:29"),  y: 78  },
                //     { x: new Date("2020-05-19 23:15:39"), y: 60  },
                //     { x: new Date("2020-05-19 23:20:42"), y: 76  },
                //     { x: new Date("2020-05-19 23:25:45"),  y: 65  },
                //     { x: new Date("2020-05-19 23:30:48"),  y: 85  }
                // ]
            }
        ]
    });
    chart.render();
}

function newColor(){
    var hexa = "0123456789ABCDEF";
    var color = "#";
    for(var c = 0; c < 6; c++){
        color += hexa[Math.round(Math.random() * (hexa.length - 1))];
    }
    return color;
}

//--------------------------------->chart

function chart(data){
    var lbls = [];
    var dts = [];
    var pais = [];
    var dataSets = [];

    var _data = [];


    for(var a = 0; a < data.length; a++){
        pais.push(unescape(data[a].Pais));
        dts.push(data[a].Cantidad);
        lbls.push(data[a].Fecha);

        var color = newColor();
        _data.push({
            labels: data[a].Fecha,
            datasets: [
                {
                    label: unescape(data[a].Pais),
                    data: data[a].Cantidad,
                    fill: false,
                    backgroundColor: color,
                    borderColor: color,
                    //borderWidth: 1
                }
            ]
        });


    }

    var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: _data,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
}

//------------------------------------------
$(document).ready(function(){
    //createGrafica();
    //grafica2();
    initInterval(1, 5000);
    //chart();
});