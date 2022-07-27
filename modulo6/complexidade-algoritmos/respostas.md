### Respostas para os exercícios de complexidade de algoritmos 

#### 1)

``` tsx
const findFirstRecurringCharacter = (input) => {
  const charHashMap = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
}; 

```
##### Resposta: 
O(n), já que a função demonstrada no exercício depende do input para determinar sua complexidade.


#### 2)

```tsx
export const func = (
  source: string,
  comparison: string
): boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
};
```
##### Resposta:
O(n) novamente, já que esse código dependerá do tamanho das strings no input para determinar sua complexidade.


#### 3)

```tsx
export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};
```
##### Resposta: 
Aqui, a resposta será O(1) por se tratar apenas de uma checagem de validação simples dos valores, não contendo nenhum loop.


#### 4)
```tsx
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}
```
##### Resposta:
O(n) 


#### 5)
Algoritmo do ex3 "O(1)", ex1 = ex2, ex4


#### 6)
```tsx
function product(a: number, b: number): number {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum
}
```

##### Resposta:
O(n), já que o algoritmo dependerá do número enviado em "b".


#### 7)
```tsx
function mod(a: number, b: number): number {
  if (b <= a) {
    return -1;
  }
  let div = a / b;
  return a - div * b;
}
```
##### Resposta:
O(1), já que esse algoritmo faz apenas operações matemáticas simples sem nenhuma repetição.


