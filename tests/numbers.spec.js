/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
  
    // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
    expect(numbers([1, 2, 3, 4, 5])).toEqual(true);
    // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    expect(numbers([1, 2, '3', 4, 5])).toEqual(false);
    // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    expect(numbers([1, 'a', 3])).toEqual(false);
    // Escreva um teste em que a função recebe [' '] e retorna false
    expect(numbers([' '])).toEqual(false);
  });
});

/* 
1 - algoritmo


- interpretar oq será testado

o será testado se a função ta funcionando corretamente, isso é se está realmente 
retornando true quando tem numeros e false quando nao tem numeros ou quando estiver 
vazio.

- estrurura do teste 

a maior parte do teste já está pronta. so testara a função expect e os matchs  
ele é um teste condicional ou seja ele, caso tenha numeros verá se a função 
retorna algo no caso true, caso tenha qualquer outra coisa retornara.

- obs: existe um comando escrito "fail('Teste vazio!');" deveremos retirar ou o teste 
irá falhar de qualquer jeito, esqueci desse detalhe foi várias vezes T-T.

- estrutura do matcher

o teste está utilizando arrays logo devemos utilizar o matcher 
toEqual(mais adequado) ao inves do toBe na função expect

ex: expect(arr).toEqual([1, 2, 3]);

*/
