/*
  A função average recebe um array de tamanho variável e retorna a média dos valores
  recebidos. Caso a função receba algum valor não numérico ou um array vazio,
  o valor undefined deve ser retornado. Todos os resultados devem ser arredondados
  para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (ar) => {
  let resultadoArraySoma = 0;
  let resultadoArrayMedia = 0;
  
  if (!ar.length) {
    return undefined;
  }
  for (let i = 0; i < ar.length; i += 1) {
  resultadoArraySoma += ar[i];
  resultadoArrayMedia = resultadoArraySoma / ar.length;
  
  if (typeof ar[i] !== 'number') {
    return undefined;
    }
  }
  return Math.round(resultadoArrayMedia);
};

module.exports = average;

/* 1 - ALGORÍTMO: 

- interpretar o enunciado: x

- average retorna média dos valores recebidos em um array = descobrir como retornar
a média e montar função com arrays = a média é a soma de um conjunto de numeros dividido pelo numero de numeros 
no conjunto 

exemplo: 

[1,5,7,8,9,10] 6+7+8+9+10 = 13+8+9+10 = 21+9+10= 30+10 = 40
dividimos esse resultado pelo numero de elementos no conjunto, no caso 40 dividido por 6
resultado é = a 6.666666666666667 

para resolver prescisamos criar algo que realize a soma dos algarismos dentro do array e
depois algo que realize essa divisão  

- caso receba numeros faz algo, se nao receber numeros ou receber um valor vazio retorna 
undefined = criar condições para retorno dos elementos que não são numeros e array 
vázio 

para resolver precisamos criar algo que retorne undefined em caso de o valor dentro do 
array nao ser um numero ou caso o array esteja vazio estamos falando de condições.

como indicamos que nao queremos outro tipo de elementos no array, usaremos typeof que diz
o tipo do elemento criaremos uma condição que caso o elemento nao seja numero retorne 
indefined

para indicar que um array está vazio precisamos negar o array com !, tambem podemos dizer
que o tamanho do array é = a 0,   

- valores decímais devem ser arrendodados. = descobrir como arredondar valores decimais = 
a funçao Math.round() aredonda os valores ao inteiro mais próximo = após tirar a média 
devemos aredondar o valor para cima se for maior que x,5 ou para baixo se for menor
que x,5. x

- agora pensando com tudo organizado devemos pensar na semantica da função, no caso a 
ordem dos elementos. a primeira coisa que devemos prestar atenção e no tipo de elemento 
que nós queremos é um valor numérico ou se o array está vazio. Apos criadas as condições
implementaremos a função encontrada.  

ex: 7,7 = 8 e 7,4 = 7

*/ 
