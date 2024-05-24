const day = document.getElementById("day");
const week = document.getElementById("week");
const mont = document.getElementById("mont");

const date_day = document.getElementById("date_day");
const date_week = document.getElementById("date_week");
const date_mont = document.getElementById("date_mont");
const names = document.getElementById("names");


// var nombre = prompt("¿CUAL ES TU NOMBRE?");
// console.log(nombre);

// if (names) {
//     names.innerHTML = nombre;
// } else {
//     console.log("No se encontró el elemento con el ID 'names'.");
// }
function View_day(){
    names.textContent= nombre
    date_day.classList.remove("view");
    date_week.classList.add("view");
    date_mont.classList.add("view");
}
function View_week(){
    date_day.classList.add("view");
    date_week.classList.remove("view");
    date_mont.classList.add("view");
}
function View_mont(){
    date_day.classList.add("view");
    date_week.classList.add("view");
    date_mont.classList.remove("view");
}

day.addEventListener("click", View_day);
week.addEventListener("click", View_week);
mont.addEventListener("click", View_mont);