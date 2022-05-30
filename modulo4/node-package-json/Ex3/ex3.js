const tipoDeOperacao = process.argv[2]
const numeroUm = Number(process.argv[3])
const numeroDois = Number(process.argv[4])
let resultado = 0;

switch(tipoDeOperacao) {
    
    case 'sum':
       resultado = numeroUm + numeroDois
    break
    case 'sub':
        resultado = numeroUm - numeroDois
    break
     case 'mult': 
     resultado = numeroUm * numeroDois
     break
     case 'div':
         resultado = numeroUm / numeroDois
    break
    default: "Não foi possível realizar esta operação. :( "
}
console.log(resultado)