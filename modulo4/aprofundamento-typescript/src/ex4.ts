type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

const pokedex: Array<pokemon> = []
pokedex.push(pokemon1)
pokedex.push(pokemon3)
pokedex.push(pokemon3)

console.log(pokedex)
// b)
// Posso escrever no terminal: "tsc & node./extra.js",
// ou posso criar um script chamado "start4" com esse msmo conteúdo acima,
// e depois chamar "npm run start4".

// c)
// Se o arquivo estivesse na pasta src, a diferença seria que teríamos que adicionar
// um "build" no caminho, que é o nome da pasta que guarda os arquivos JS.
// "tsc & node ./build/extra.js". O restante continua igual.

// d)
// Não consegui responder.


