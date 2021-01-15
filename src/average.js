/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arr) => {
  const divisor = arr.length;
  let sum = 0;
  let average = 0;
  if (divisor === 0) return undefined;
  for (let i = 0; i < divisor; i += 1) {
    if (typeof(arr[i]) !== 'number') return undefined;
  sum += arr[i];
  }
  average = Math.round(sum / divisor);
  return average;
}

const arrayVazio = [];
console.log(average(arrayVazio));

module.exports = average;

