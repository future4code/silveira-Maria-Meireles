``` function criarArrayNomesAnimais() {  `
```    const animais = [ `
```      { nome: "Cachorro", classificacao: "mamífero" }, `
```      { nome: "Papagaio", classificacao: "ave" }, `
```      { nome: "Gato", classificacao: "mamífero" }, `
```      { nome: "Carpa", classificacao: "peixe" }, `
```      { nome: "Pomba", classificacao: "ave" } `
```    ] `
```    const nomesAnimais = animais.map((item, indice) => { `
```        return animais[indice].nome; `
```    }) `
```    return nomesAnimais; `
``` } `
