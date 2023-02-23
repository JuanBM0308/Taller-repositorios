puntos_jugador = 0, puntos_maquina = 0, empates = 0;


function agua() {

    let auxiliar = Math.random()*100;
    var numero_aleatorio = Math.round(auxiliar);

    if ((numero_aleatorio >= 1 && numero_aleatorio <= 19) || (numero_aleatorio > 51 && numero_aleatorio <= 67)) { //agua
        
        empates++;
        var mostrar = document.getElementById('solucion');
    
        mostrar.innerHTML = "Jugador/AGUA == Maquina/AGUA -----> EMPATE";

    } if ((numero_aleatorio > 19 && numero_aleatorio <= 35) || (numero_aleatorio > 67 && numero_aleatorio <= 83)) { //planta
        
        puntos_maquina++;
        var mostrar = document.getElementById('solucion');
    
        mostrar.innerHTML = "Jugador/AGUA == Maquina/PLANTA -----> PIERDE";

    } if ((numero_aleatorio > 35 && numero_aleatorio <= 51) || (numero_aleatorio > 83 && numero_aleatorio <= 100)) {//fuego
        
        puntos_jugador++;
        var mostrar = document.getElementById('solucion');
    
        mostrar.innerHTML = "Jugador/AGUA == Maquina/FUEGO -----> GANAS";

    }

}

function fuego() {

    let auxiliar = Math.random()*100;
    var numero_aleatorio = Math.round(auxiliar);

    if ((numero_aleatorio >= 1 && numero_aleatorio <= 19) || (numero_aleatorio > 51 && numero_aleatorio <= 67)) { //agua
        
        puntos_maquina++;
        var mostrar = document.getElementById('solucion');
     
        mostrar.innerHTML = "Jugador/FUEGO == Maquina/AGUA -----> PIERDES";

    } if ((numero_aleatorio > 19 && numero_aleatorio <= 35) || (numero_aleatorio > 67 && numero_aleatorio <= 83)) { //planta
        
        puntos_jugador++;
        var mostrar = document.getElementById('solucion');
    
        mostrar.innerHTML = "Jugador/FUEGO == Maquina/PLANTA -----> GANAS";

    } if ((numero_aleatorio > 35 && numero_aleatorio <= 51) || (numero_aleatorio > 83 && numero_aleatorio <= 100)) {//fuego
        
        empates++;
        var mostrar = document.getElementById('solucion');
    
        mostrar.innerHTML = "Jugador/FUEGO == Maquina/FUEGO -----> EMPATE";

    }

}

function planta() {

    let auxiliar = Math.random()*100;
    var numero_aleatorio = Math.round(auxiliar);

    if ((numero_aleatorio >= 1 && numero_aleatorio <= 19) || (numero_aleatorio > 51 && numero_aleatorio <= 67)) { //agua
        
        puntos_jugador++;
        var mostrar = document.getElementById('solucion');
    
        mostrar.innerHTML = "Jugador/PLANTA == Maquina/AGUA -----> GANAS";

    } if ((numero_aleatorio > 19 && numero_aleatorio <= 35) || (numero_aleatorio > 67 && numero_aleatorio <= 83)) { //planta
        
        empates++;
        var mostrar = document.getElementById('solucion');
    
        mostrar.innerHTML = "Jugador/PLANTA == Maquina/PLANTA -----> EMPATE";

    } if ((numero_aleatorio > 35 && numero_aleatorio <= 51) || (numero_aleatorio > 83 && numero_aleatorio <= 100)) {//fuego
        
        puntos_maquina++;
        var mostrar = document.getElementById('solucion');
    
        mostrar.innerHTML = "Jugador/PLANTA == Maquina/FUEGO -----> PIERDES";

    }

}

function finalizar() {
    
    if (puntos_jugador > puntos_maquina && puntos_jugador > empates) { //Gana jugador

        document.getElementById("solucion").innerHTML = "GANA JUGADOR";

    } else if (puntos_maquina > puntos_jugador && puntos_maquina > empates) { //Gana maquina
        
        document.getElementById("solucion").innerHTML = "GANA MAQUINA";

    } else if (empates > puntos_jugador && empates > puntos_maquina) { //EMPATE
        
        document.getElementById("solucion").innerHTML = "EMPATE";

    } else {

        document.getElementById("solucion").innerHTML = "EMPATE";

    }


    for (let i = 0; i < 3; i++) {
        
        if (i == 0) {
            var nuevo2 = document.createElement("div");
                    
            nuevo2.id = "resultado" + i;

            document.getElementById("solucion").appendChild(nuevo2);
            document.getElementById("resultado"+i).innerHTML = "PUNTOS JUGADOR: "+puntos_jugador;
        }
        if (i == 1) {
            var nuevo2 = document.createElement("div");
                    
            nuevo2.id = "resultado" + i;

            document.getElementById("solucion").appendChild(nuevo2);
            document.getElementById("resultado"+i).innerHTML = "PUNTOS MAQUINA: "+puntos_maquina;
        }
        if (i == 2) {
            var nuevo2 = document.createElement("div");
                    
            nuevo2.id = "resultado" + i;

            document.getElementById("solucion").appendChild(nuevo2);
            document.getElementById("resultado"+i).innerHTML = "EMPATES: "+empates;
        }
    }

    puntos_jugador = 0, puntos_maquina = 0, empates = 0;

}