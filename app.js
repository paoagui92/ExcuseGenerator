let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let what = ['eat', 'pissed', 'crushed', 'broked'];
let avoid = ['my homework', 'my breakfast', 'my drink', 'my computer'];
let when = ['before the class', 'right in time','when I finished', 'during my lunch', 'while I was praying'];

// Listener
var p = document.getElementById("excuse");
p.addEventListener('load', generarExcusa());

// Funciones
function generarExcusa(e){
    let a = aleatorio(who.length);
    let b = aleatorio(what.length);
    let c = aleatorio(avoid.length);
    let d = aleatorio(when.length);    
    p.innerHTML =`${who[a-1]} ${what[b-1]} ${avoid[c-1]} ${when[d-1]}`;
}

function aleatorio(b){
    return Math.round(Math.random()*(b-1)+parseInt(1))
}