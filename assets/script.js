let red=1;
let blue=6;
let green=11;
//capturar evento tarjeta 
document.getElementById("red").addEventListener("mouseenter",function(){
    if (red<6) {
        getPersonaje(red,"principal","red")
        red++
    }
})
document.getElementById("green").addEventListener("mouseenter",function(){
    alert("hola green");
})
document.getElementById("blue").addEventListener("mouseenter",function(){
    alert("hola blue");
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
