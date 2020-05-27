var _settings = {
    paises: [
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
    ],
    labes: ['label1', 'label2', 'label3', 'label4', 'label5', 'label6'],
    templates:{
        contenedorGrafica:'<div class="card m-1">'+
                            '<div class="card-body">'+
                                '<div class="input-group">'+
                                    '<div class="input-group-prepend">'+
                                        '<button class="input-group-text btn-edit-chart-title">'+
                                            '<svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
                                                '<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>'+
                                                '<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>'+
                                            '</svg>'+
                                        '</button>'+

                                        '<button class="input-group-text btn-edit-chart-title-confirm edit-confirm" data-accion="1">'+
                                            '<svg class="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
                                            '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                                                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>'+
                                            '</svg>'+
                                        '</button>'+
                                        '<button class="input-group-text btn-edit-chart-title-cancel edit-confirm" data-accion="0">'+
                                            '<svg class="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
                                                '<path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>'+
                                                '<path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>'+
                                            '</svg>'+
                                        '</button>'+

                                    '</div>'+
                                    '<input type="text" class="form-control" readonly value="#titulo#">'+
                                    '<button type="button" class="close text-danger delete-grafica ml-2" data-nombre="#nombre-grafica#" data-toggle="modal" data-target="#modalBorrarGrafica">'+
                                        '<span aria-hidden="true">&times;</span>'+
                                    '</button>'+
                                '</div>'+
                                '<canvas id="grafica-#idgrafica#" class="card-text grafica"></canvas>'+

                            '</div>'+
                        '</div>',
        contenedorFlex: //'<div class="chart-container">'+
                            '<canvas id="grafica-#idgrafica#" class="grafica"></canvas>' //+
                        //'</div>'
    }
};
//-----------------------
var idGraficas = 0;
var idChartDelete = [];
var idDelete = -1;
var tarjetaEliminar;
var tituloActual = "";
//-----------------------
//funciones
function borrar(){
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
            pais: escape(_settings.paises[Math.round(Math.random() * (_settings.paises.length - 1) + 1)]),
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
                console.log(data);
                chart(data);
            }
        }
    });
}

function crearSelect(){
    var opt = "<option>Elige</option>";
    for(var a = 0; a < _settings.paises.length; a++){
        opt += "<option>"+_settings.paises[a]+"</option>";
    }
    $("#selectPaises").html(opt);
}

function newColor(){
    var hexa = "0123456789ABCDEF";
    var color = "#";
    for(var c = 0; c < 6; c++){
        color += hexa[Math.round(Math.random() * (hexa.length - 1))];
    }
    return color;
}

function newCantidad(){
    var cantidades = [];
    for(var c = 0; c < 7; c++){
        cantidades.push(Math.round(Math.random() * 99));
    }
    return cantidades;
}

function newPaises(){
    var paises = [];
    for(var c = 0; c < 6; c++){
        paises.push(_settings.paises[Math.round(Math.random() * _settings.paises.length + 1)]);
    }
    return paises;
}

function newDatasets(){
    var datasets = [];
    for(var c = 0; c < 6; c++){
        var color = newColor();
        datasets.push({
            label: _settings.paises[Math.round(Math.random() * _settings.paises.length + 1)],
            data: newCantidad(),
            fill: false,
            backgroundColor: color,
            borderColor: color,
        });
    }
    return datasets;
}

function cargarPaises(){
    var selPais = "";
    for(var a = 0; a < _settings.paises.length; a++){
        selPais += "<option vlaue ='"+_settings.paises[a]+"'>"+_settings.paises[a]+"</option>";
    }
    $("#Pais_Fuente").append(selPais);
    $("#Pais_Destino").append(selPais);
}

function cargarProveedores(){
    var selProv = "";
    for(var a = 0; a < 100; a++){
        selProv += "<option vlaue ='proveedor-"+a+"'>Proveedor-"+a+"</option>";
    }
    $("#Proveedor_Fuente").append(selProv);
    $("#Proveedor_Destino").append(selProv);
}

function cargarClientes(){
    var selCliente = "";
    for(var a = 0; a < _settings.paises.length; a++){
        selCliente += "<option vlaue ='cliente-"+a+"'>Cliente-"+a+"</option>";
    }
    $("#Cliente_Destino").append(selCliente);
    $("#Cliente_Fuente").append(selCliente);
}

//grafica.
function chart(data){
    var lblFecha = [];
    var lblPais = [];
    var lblCantidad = [];

    var datasets = [];
    

    // for(var a = 0; a < data.length; a++){
    //     lblFecha.push(data[a].Fecha);
    //     // lblPais.push(data[a].Pais);
    //     // lblCantidad.push(data[a].Cantidad);

    //     var color = newColor();
    //     datasets.push({
    //         label: unescape(data[a].Pais),
    //         data: data[a].Cantidad,
    //         fill: false,
    //         backgroundColor: color,
    //         borderColor: color,
    //     });
    // }

    // for(var b = 0; b < data.length; b++){
    //     var color = newColor();
    //     datasets.push({
    //         label: lblPais,
    //         data: lblCantidad,
    //         fill: false,
    //         backgroundColor: color,
    //         borderColor: color,
    //     });
    // }

    var titulo = $("#titulo_Grafica").val().length > 0 ? $("#titulo_Grafica").val() : idGraficas.toString();

    $("#cardGraficas").append(_settings.templates.contenedorGrafica
        .replace("#idgrafica#", idGraficas.toString())
        // .replace("#titulo#", idGraficas.toString())
        //.replace("#nombre-grafica#", idGraficas.toString())
        .replace("#titulo#", titulo)
        .replace("#nombre-grafica#", titulo)
        );

    //$("#cardGraficas").append(_settings.templates.contenedorFlex.replace("#idgrafica#", idGraficas.toString()));

    var color = newColor();
    var ctx = document.getElementById("grafica-" + idGraficas.toString()).getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'line',
        borderWidth: 1,
        data: {
            labels: ['label1', 'label2', 'label3', 'label4', 'label5', 'label6'],
            datasets: newDatasets()
            // labels: lblFecha,
            // datasets: datasets
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    //$("#ChartTitle-"+idGraficas).html($("#titulo_Grafica").val());
    idGraficas++;
    $(".edit-confirm").hide();
}

//
$(document).ready(function(){
    cargarPaises();
    cargarProveedores();
    cargarClientes();
    //crearSelect();
    //getData();
});

// $("#btnCrear").click(function(){
//     chart();
//     //getData();
// });

$("#cardGraficas").on("click",".delete-grafica" , function(){
    idChartDelete.push($(this).data("nombre"));
    tarjetaEliminar = $(this).closest(".card")//.remove();
    $("#nombreGrafica").html($(this).data("nombre"));
});

$(".container-fluid").on("click", ".btn-edit-chart-title", function(){
    $(this).hide();
    $(this).next().show();
    //titulo actual
    tituloActual = $(this).parent().next().val();
    $(this).next().next().show();
    $(this).parent().next().removeAttr("readonly", false);
    //$(this).closest(".edit-confirm").show();
    //$(this).closest(".btn-edit-chart-title-cancel").show();
});

$(".container-fluid").on("click", ".edit-confirm", function(){
    var accion = $(this).data("accion");
    $(this).hide();
    if(accion == 0){
        $(this).prev().hide();
        $(this).prev().prev().show();
        $(this).parent().next().next().data("nombre", tituloActual);
        $(this).parent().next().val(tituloActual);
        tituloActual = "";
    }else if(accion == 1){
        $(this).next().hide();
        $(this).prev().show();
        //actualizar data-nombre, titulo nuevo
        $(this).parent().next().next().data("nombre", $(this).parent().next().val());
    }
    //$(".edit-confirm").hide();
    //$(this).closest(".btn-edit-chart-title").show();
    $(this).parent().next().attr("readonly", true);
});

$("#eliminarGrafica").click(function(){
    $(tarjetaEliminar).remove();
    $("#modalBorrarGrafica").modal("hide");
});

$("#cancelarGrafica").click(function(){
    $(".select-config").val(0);
    $(".select-config").attr("disabled", false);
});

$("#CrearGrafica").click(function(){
    chart();
    $(".select-config").val(0);
    $("#titulo_Grafica").val("");
    $(".select-config").attr("disabled", false);
    $("#modalGrafica").modal("hide");
});

$(".select-config").change(function(){
    var id = $(this).attr("id");
    var valor = $(this).val();
    var idOpuesto = id.split("_")[0];

    switch(true){
        case id.includes("Fuente"):
            if(valor != 0){
                $(".setting-fuente").not($(this)).attr("disabled", true);
                $("#"+idOpuesto+"_Destino").attr("disabled", true);
            }else{
                $(".setting-fuente").not($(this)).attr("disabled", false);

                if(!$("#"+idOpuesto+"_Destino").is("[disabled]")){
                    $("#"+idOpuesto+"_Destino").attr("disabled", false);
                }
            }
            break;
        case id.includes("Destino"):
            if(valor != 0){
                $(".setting-destino").not($(this)).attr("disabled", true);
                $("#"+idOpuesto+"_Fuente").attr("disabled", true);
            }else{
                $(".setting-destino").not($(this)).attr("disabled", false);
                if(!$("#"+idOpuesto+"_Fuente").is("[disabled]")){
                    $("#"+idOpuesto+"_Fuente").attr("disabled", false);
                }
            }
            break;
    }
});