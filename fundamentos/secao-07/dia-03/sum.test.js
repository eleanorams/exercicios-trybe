const sum = require('./sum');

// A função sum(a, b) retorna a soma do parâmetro a com o b:
// Teste se o retorno de sum(4, 5) é 9;

// Teste se o retorno de sum(0, 0) é 0.

// Teste se a função sum lança um erro quando os parâmetros são number 4 e string '5';

// Teste se a mensagem de erro é 'parameters must be numbers' quando realizar a chamada sum(4, '5');

describe('a função sum', () => {
  test('verifica se a soma retorna valor correto', () => {
    expect(sum(4, 5)).toBe(9);
  });
});

describe('a função sum', () => {
  test('verifica se a soma retorna valor correto', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('a função sum', () => {
  test('lança um erro quando os parâmetros não são number', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
});

describe('a função sum', () => {
  test('lança um erro quando os parâmetros não são number', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(new Error('parameters must be numbers'));
  });
});
