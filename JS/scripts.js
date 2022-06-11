const btnTrailer = document.getElementById("b-trailer");
const clsIco = document.getElementById("cls-ico");
btnTrailer.addEventListener("click", toggleTrailer);
clsIco.addEventListener("click", toggleTrailer);

function toggleTrailer(){
    var trailer= document.querySelector(".trailer");
    trailer.classList.toggle('active');
}

