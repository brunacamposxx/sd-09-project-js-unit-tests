/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
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

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('x', 'y')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('x','y').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.

    for (let index = 0; index < productDetails().length; index += 1 ) {
      assert.strictEqual(typeof productDetails()[index], 'object');
      const valueProductId = Object.values(productDetails()[index])[1];
      const lengthProductId = Object.values(valueProductId)[0].length;
      assert.strictEqual(Object.values(valueProductId)[0].slice(-3, lengthProductId), '123');
    }

    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('x', 'y')[0],productDetails('x', 'y')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
