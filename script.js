let cont=0;                                                //Contador en 0
const ispony = document.getElementById("pony");            //Seleccion del parrafo que aparece cuando das click
function cambio() {                                        //cambiar formato y css
    const el = document.querySelector(
     "p");
     const lin= document.querySelector("link") 
     el.classList.toggle("agrandar");
    el.classList.toggle("underline");
    el.classList.toggle("highlight");
    el.style.padding="10px";
    cont=cont % 2;                                        //Divisor x 2 q retorna 0 o 1
if (cont===0) {                                           //Para cambiar entre los css dependiendo del cont
    lin.href="styledark.css";
    ispony.style.color="white"                            //Color del parrafo a aparecer cuando el fondo es negro
} else {                                                  //por eso crea la variable de seleccion al inicio
    lin.href="style.css"
    ispony.style.color="black"
}
cont ++;                                                 //Aumento del contador para q funcione
   }


   function espony(){                                   //Funcion para q aparezca el parrafo con la opcion seleccionada
    const horseSelect = document.getElementById("caballos").value;
      if (horseSelect==="pony") {
    ispony.innerHTML= "<span>Felicidades,</span> escogiste un pony";
   } else {
    ispony.innerHTML = "<span>Are you mongo</span>, te dije q escogieras un pony";
   }
   
   }