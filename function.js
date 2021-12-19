var array = new Array(10);
var cantidad = 0;
var incognito = 0;

function iniciar () {
    incognito = Math.trunc(Math.random()*100);
    console.log(incognito);
}

function evaluar () {
    let num = document.getElementById("entrada").value;
    array[cantidad] = num;
    cantidad++;
    console.log(cantidad);
    

    if(cantidad<10){
        if (num<incognito){
            document.getElementById("ayuda").innerHTML = "El numero digitado esta por debajo del numero a adivinar";
        }
        else if (num>incognito){
            document.getElementById("ayuda").innerHTML = "El numero digitado esta por encima del numero a adivinar";
        }
        else if (num=incognito){   
            document.getElementById("ayuda").innerHTML = "Has adivinado el numero"; 
            document.getElementById("mensajeFinal").innerHTML = "Has Ganado"; 
            document.getElementById("numh3").innerHTML = incognito;
            document.getElementById('entrada').disabled = true;
            document.getElementById('intentar').disabled = true;
        }
    }
    else {
        document.getElementById("mensajeFinal").innerHTML = "Has perdido el juego";
        document.getElementById('entrada').disabled = true;
        document.getElementById('intentar').disabled = true;
        document.getElementById("numh3").innerHTML = incognito;
    }
    
    var datostabla = "";
    for(let i=0; i<cantidad; i++){
        datostabla+="<tr><td>Intento #"+(i+1)+"    </td><td>"+array[i]+"</td></tr>";
    }
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("tabla").innerHTML = datostabla;
}

function reiniciar () {
    iniciar ();
    document.getElementById('entrada').disabled = false;
    document.getElementById('intentar').disabled = false;
    array = new Array(10);
    cantidad = 0;
    document.getElementById("numh3").innerHTML = "";
    document.getElementById("ayuda").innerHTML = "";
    document.getElementById("tabla").innerHTML = "";
}