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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('teste1','teste2')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual((productDetails('produto1','produto2')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Segunda opção de fazer este codigo>>
    // typeof(productDetails('produto1','produto2')[0]) === 'object' && typeof(productDetails('produto1','produto2')[1]) === 'object'

    const produto1 = productDetails('produto1','produto2')[0];
    const produto2 = productDetails('produto1','produto2')[0];

    assert.strictEqual(typeof (produto1) === 'object' && typeof (produto2) === 'object', true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('produto1','produto2')[0], productDetails('produto1','produto2')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(productDetails('produto1','produto2')[0].details.productId.endsWith('123') && productDetails('produto1','produto2')[1].details.productId.endsWith('123'), true);
  });
});
