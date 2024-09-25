import './style.css'

const END_POINT = `https://pokeapi.co/api/v2/pokemon-form/${Math.floor(Math.random() * 21)}`

async function buscaPokemons(){
  const data = await fetch(END_POINT)
  const valor = await data.json()
  return valor;
}

buscaPokemons()
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Funciona!</h1>
  </div>
`