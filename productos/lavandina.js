//lavandina
window.addEventListener("load" , inicio);

function inicio(){
    document.querySelector("#btn-mostrar").addEventListener("click", ej1);

    

}
function ej1(){

   if(document.getElementById("litrolav").value= "1")
   document.getElementById("litrolav").value = ((document.getElementById("preciolav").value)*(1.67)).toFixed(1); 

    let precio = document.querySelector("#preciolav").value;
    let litros = document.querySelector("#litrolav").value;

    
    document.querySelector("#pmostrar").innerHTML="LAVANDINA $"+ precio +" x "+litros;
    
  
    document.getElementById("mensaje").value = "LAVANDINA $"+ precio +" son "+ litros;
    document.getElementById("mensaje1").value = precio+" "+litros;
}