let personagem = document.querySelector ('input');
let iniciar = document.querySelector ('#iniciar');
let tentar = document.querySelector ('#tentar');
let imagem = document.querySelector ('img');
let pontos = document.querySelector ('p');
let i = 0;


pesquisarPersonagem = ()=>{
    let aleatorio = Math.floor(Math.random()*493);
    
    fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`)
    
    .then(function(result){
        return result.json();
    })
    .then(function(data){
        imagem.src = data.image;
        console.log(data.name);
        
        tentar.onclick = function(){
            if(personagem.value != "" && data.name == personagem.value ){
                i++;
                pontos.innerHTML =`Pontuação:${i}`;
                
            }
            else {
                i--;
                pontos.innerHTML =`Pontuação:${i}`;
            }
            pesquisarPersonagem();
        }
    })  
}

iniciar.onclick = pesquisarPersonagem;