window.addEventListener("load" , inicio);

function inicio(){
    document.querySelector("#btn-mostrar2").addEventListener("click", ej2);



}
//lavandina
function ej2(){

   if(document.getElementById("litrodet").value= "1")
   document.getElementById("litrodet").value = ((document.getElementById("preciodet").value)*(1.67)).toFixed(1); 

    let precio = document.querySelector("#preciodet").value;
    let litros = document.querySelector("#litrodet").value;

    
    document.querySelector("#pmostrar").innerHTML="detergente $"+ precio +" x "+litros;
    
  
    document.getElementById("mensaje").value = "detergente $"+ precio +" son "+ litros;
    document.getElementById("mensaje1").value = precio+" "+litros;

    document.getElementById("amigo").value = "detergente $"+ precio +" son "+ litros;
    
}