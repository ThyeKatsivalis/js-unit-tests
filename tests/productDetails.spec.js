const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    expect(typeof productDetails). toBe('function');
    // Teste se productDetails é uma função.
    expect(Array.isArray(productDetails('papel', 'toalha'))).toBeTruthy();
    // Teste se o retorno da função é um array.
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toEqual(productDetails('Alcool gel', 'Máscara')[1]);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toMatch('123');
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toMatch('123');
    // Teste se os dois productIds terminam com 123.
  });
});

/* Algoritmo 1

1 - entendendo o problema 

- precisamos saber o expect e o match mais adequado para cada caso já que outras estruturas 
já estão prontas. 

primeiro teste: saber se é função usamos o no parametro typeOf que diz o tipo seguido do match 
toBe

segundo teste: nesse podemos usar toEqual ou toBeTruthy para fazer comparativos usando 
array

terceiro teste: nesse queremos saber se o numero de elementos do array é 2 usamos o .length 
na função e o match pode ser toBe ou toEqual.

quarto teste: no quarto teste usamos duas linhas para cada produto, typeOf vai verificar
o tipo do valor e o [0][1] para acessar a posição do elemento no array, usamos o toBe,
podemos usar tbm o toHaveProperty. 

quinto teste: acessamos a posição do array = a antes e depois do objeto .details.product 
e utilizamos o matcher toMatch

*/