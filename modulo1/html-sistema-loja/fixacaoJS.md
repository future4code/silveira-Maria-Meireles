```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas){
  const salario = 2000;
  const comissao = 100 * qtdeCarrosVendidos +
  valorTotalVendas * .05;

  return salario + comissao;

}
```