const btnTrailer = document.getElementById("b-trailer");
const clsIco = document.getElementById("cls-ico");
btnTrailer.addEventListener("click", openTrailer);
clsIco.addEventListener("click", closeTrailer);

function openTrailer(){
    var trailer= document.getElementById("trailer");
    trailer.classList.add("active");
    
}
function closeTrailer(){
    var trailer= document.getElementById("trailer");
    trailer.classList.remove("active");
    
}
