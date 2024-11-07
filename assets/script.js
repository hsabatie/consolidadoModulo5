let red=1;
let green=6;
let blue=11;
//capturar evento tarjeta 
document.getElementById("red").addEventListener("mouseenter",function(){
    if (red<6) {
        getPersonaje(red,"principal","red")//principal es el secmento HTML donde van los personajes principales
        red++

    }
})
document.getElementById("green").addEventListener("mouseenter",function(){
    if (green<11) {
        getPersonaje(green,"secundario","green")
        green++
    }
})
document.getElementById("blue").addEventListener("mouseenter",function(){
    if (blue<16) {
        getPersonaje(blue,"otros","blue")
        blue++
    }
})

function getPersonaje(id,personaje,color){
    let url = "https://swapi.dev/api/people/"+id
    fetch(url).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        //aca debo llamar la funcion para injectar
        injectar(data,personaje, color)
    }).catch(function(error){
        console.log(error);
    })    
}

function injectar(data,id_html, color) {
    let card=`<div class="card">
                    <div class="intro-card">
                        <div class="container__point">
                            <span class="point" style="background-color: ${color};"></span>
                        </div>
                        <div>
                            <h3>${data.name}</h3>
                            <p>la estauta es:${data.height} el peso es:${data.mass}.</p>
                        </div>
                    </div>                
                </div>`
    document.getElementById(id_html).insertAdjacentHTML("beforeend",card)
}
