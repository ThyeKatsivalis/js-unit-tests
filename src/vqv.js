/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (name, age) => { 
  if (!name || !age) {
  return undefined; 
}
  let texto = `Oi, meu nome é ${name}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  return texto.replace(/[ ]{2}/g, '');
};

module.exports = vqv;

/* Algoritimo 

1 - interpretar o enunciado

- use templates literals, descobrir oq é tl, escrever a função, ela recebe um parametro de
texto e outro parametro numerico e deve retornar a frase do enunciado. se nao tiver nada
nos parametros retornaremos undefined.

2 - oq precisamos. armazenar o valor de texto e armazenar o valor numérico, serão dois 
parametros diferentes, usar templates literals na função

3 - estrutura

const vqv = () => {
  se functivervazio retona undefined
  se func tiverparametros retorna 
  
    'Oi, meu nome é 'texto'!
    Tenho num anos,
    trabalho na Trybe e mando muito em programação!
    #VQV!'
};

*/
