/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert ("Boas vindas ao jogo Blackjack!");

if(confirm("Deseja iniciar uma nova rodada?")) {
   const cartasJogador = [comprarCarta(), comprarCarta()];
   const cartasComputador = [comprarCarta(), comprarCarta()];

   if ((cartasJogador[0] === "A" && cartasJogador[1] === "A") || (cartasComputador[0] === "A" && cartasComputador[1] === "A")) {
      cartasJogador = [comprarCarta(), comprarCarta()];
      cartasComputador = [comprarCarta(), comprarCarta()]; 
   } ;
  
   const comprarMaisCartas = confirm(
      `Suas cartas são: ${cartasJogador[0].texto}, ${cartasJogador[1].texto}. A carta revelada do computador é: ${cartasComputador[0].texto}. \n
      Deseja comprar mais uma carta? `);

      if(comprarMaisCartas) {
         cartasJogador.push(comprarCarta());
      }

      while(pontuacaoJogador < 21 || !comprarMaisCartas) {

      }
}  else {
   alert("O jogo acabou.");
};



