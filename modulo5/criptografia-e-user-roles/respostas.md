## Exercícios discursivos

#### 1) 
##### a) 
A const "round" representa a quantidade de bits de entrada escolhidas para o hash. Esse valor está relacionado
também à segurança da senha. Quanto maior o valor do round, mais segura a senha é. 
A const "salt" representa uma string aleatória baseada nos rounds, gerada pela biblioteca e posteriormente inclusa 
junto do hash. Essa string çgarante ainda mais segurança para um dado, já que ela garante que cada hash terá um valor
diferente, mesmo que as senhas sejam iguais.
Eu usei 12, por ser o valor padrão usado no curso, também por ser o valor mínimo considerado muito seguro, e pela 
minha máquina não ser muito potente (como disse o Vitor, computador de centavos KKKKK).

#### 2)
##### a)
O de cadastro, porque o usuário precisa ter a sua senha criptografada assim que ele se registra no sistema.
Esse hash da senha será usado posteriormente no momento do login.

##### d) 
Acredito que não seria necessário, já que o endpoint de pegar um usuário por Id não faz nenhum tipo de lógica relacionada
às senhas. E também não teremos nenhum problema de vazamento de senhas, já que elas foram hasheadas no momento de cadastro
e enviadas ao banco desta forma.