```function calculaNota(ex, p1, p2) { `
```  const notaExercicios = ex; `
```  const notaPrimeiraProva = p1 * 2; `
```  const notaSegundaProva = p2 * 3; `
```  const totalNotas = notaExercicios + notaPrimeiraProva + notaSegundaProva; `
```  const mediaPonderada = totalNotas / 6; `
  
```  let conceito; `
```  if (mediaPonderada >= 9 ) { `
```  conceito = "A"; `
```  } `
```  else if (mediaPonderada < 9 && mediaPonderada >= 7.5 ) { `
```    conceito = "B"; `
```  } `
```  else if (mediaPonderada < 7.5 && mediaPonderada >= 6 ) { `
```    conceito = "C"; ` 
```  } `
```  else if (mediaPonderada < 6 ) { `
```    conceito = "D"; `
```  } `
```  return conceito; `
```}; `