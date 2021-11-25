var jugador1="";
var jugador2="";
var t1=["[0]",  "[0]",  "[0]",  "[0]",  "[0]",  "[0]",  "[0]",  "[0]",  "[0]",  "[0]"];
var t2=["[0]",  "[0]",  "[0]",  "[0]",  "[0]",  "[0]",  "[0]",  "[0]",  "[0]",  "[0]"];
bienvenida();
function bienvenida(){
    alert("Bienvenido a Naval Battle");
    nombre();
    tablero();
    play();
}
function nombre() {
    jugador1 = prompt("Ingresa el nombre del jugador 1");
    jugador2 = prompt("Ingresa el nombre del jugador 2");
}
function tablero(){
    for(var i = 0; i < 2; i++){
        if(i == 0){
            alert("Posiciona tus barcos " + jugador1 + " " + "\n" + "Solo tienes 3 barcos" + "\n" + "El tablero solo cuenta con 10 espacios");
            for (var m = 0; m <3; m++) {
                var barco = parseInt(prompt("Este es tu tablero: " + t1 + "\n" + "Coloca la posocion de tu barco No." + (m+1)));
                t1[(barco-1)] = "|X|";
            }
            alert("Listo, tu tablero ha quedado de la siguiente manera :" + "\n" + t1);
        }else{
            alert("Posiciona tus barcos " + jugador2 + " " + "\n" + "Solo tienes 3 barcos" + "\n" + "El tablero solo cuenta con 10 espacios");
                for (var m=0;m<3; m++) {
                    var barco = parseInt(prompt("Este es tu tablero" + t2 + "\n" + "Coloca la posocion de tu barco No." + (m+1)));
                    t2[(barco-1)] = "|X|";
            }
            alert("Listo, tu tablero ha quedado de la siguiente manera :" + "\n" + t2);
        }
    }
    alert("Presiona Aceptar para jugar este grandiosisisimo juego");
}
function play(){
    var preg = "si"
    var f = true;
    var k = true;//aux
    var h1 = 3;//hundido1
    var h2 = 3;//hundido2
    do{
    while(f == true){
        if(k == true){
            var atac = parseInt(prompt(jugador1 + " Ataca en la posicion donde crees que hay un barco en el tablero de tu enemigo"));
            if(t2[(atac-1)]=="|X|"){
                t2[(atac-1)]="|0|";
                h2-=1;
                alert("Hundiste un barco de tu enemigo!!!");
                alert("El enemigo ha hundido un barco " + jugador2 +" !!!!");
                alert("Te toca: "+jugador2);
                alert("Tu tablero ahora tiene: " +h2+ " barcos: " + t2);
            }else{
                alert("Fallaste!, ahora espera tu turno :(");
                alert("Que suerte, aun tenemos los barcos completos "+jugador2 + " !!!");
               
            }
            if(h2!=0){
            k = false;   
            } 
            if(k==false){
                var atac = parseInt(prompt(jugador2 + " Ataca en la posicion donde crees que hay un barco en el tablero de tu enemigo"));
                if (t1[(atac-1)]=="|X|") {
                    t1[(atac-1)]="|0|";
                    h1-=1; 
                    alert("Hundiste un barco de tu enemigo!!!");
                    alert("El enemigo ha hundido un barco " + jugador1 +" !!!!");
                    alert("Te toca: "+jugador1);
                    alert("Tu tablero ahora tiene: " +h1+ " barcos: " + t1);
                } else {
                    alert("Fallaste, ahora espera tu turno :(");
                    alert("Que suerte, aun tenemos los barcos completos "+ jugador1 + " !!!");
                }
            }
            k = true;
        }
        if (h1==0) {
            f = false;
            alert("FELICITACIONES!!! EL GANADOR ES: "+ jugador2 + "\n" + "Suerte para la proxima: " + jugador1 +":(");
        }
        if(h2==0){
            f = false;
            alert("FELICITACIONES!!! EL GANADOR ES: "+ jugador1 + "\n" + "Suerte para la proxima: " + jugador2 +":(");
        }
    }
   preg = prompt("Quieres jugar otra vez?");
    if(preg == "Si" || preg == "si"){
        again();
    }
}while(preg == "Si" || preg == "si");
}
function again(){
    f = true;
    k = true;
    h1 = 3;
    h2 = 3;
    t1 = ["|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|"];
    t2 = ["|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|"];
    bienvenida();
}