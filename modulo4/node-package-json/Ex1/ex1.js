const meuNome = process.argv[2]
const minhaIdade = Number(process.argv[3])
if(meuNome && minhaIdade) {
console.log(`Olá, ${meuNome}! Você tem ${minhaIdade} anos.`)
}
else if (!meuNome && !minhaIdade){
    console.log("Você precisa passar os valores.")
}
else if(!meuNome || !minhaIdade) {
    console.log("Um parâmetro está faltando")
}