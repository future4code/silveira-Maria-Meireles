const meuNome = process.argv[2]
const minhaIdade = Number(process.argv[3])
const idadeFutura = minhaIdade + 7

if(meuNome && minhaIdade) {
    console.log(`Olá, ${meuNome}! Você tem ${minhaIdade}, e terá ${idadeFutura} daqui 7 anos.`)
    }
    else if (!meuNome && !minhaIdade){
        console.log("Você precisa passar os valores.")
    }
    else if(!meuNome || !minhaIdade) {
        console.log("Um parâmetro está faltando")
    }