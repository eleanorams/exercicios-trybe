// name, unit, price, quantity

const createItem = require('./createItem');
describe('a função createItem', () => {
  test('cria item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toEqual({
      name: 'banana',
      unit: 'kg',
      price: 1.99,
      quantity: 20,
    });
  });
  test('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99)).toEqual({
      name: 'banana',
      unit: 'kg',
      price: 1.99,
      quantity: 0,
    });
  });
  test('Lança um erro quando não recebe parâmetros', () => {
    expect(() => {createItem()}).toThrow(Error)
  });
  test('Lança um erro se o nome do item não é uma string', () => {
    expect(() => {createItem(2, 'kg', 1.99, 20)}).toThrow(new Error ('O nome do item deve ser uma string'))
  });
  test('Lança um erro se o preço é negativo', () => {
    expect(() => {createItem('banana', 'kg', -1.99, 20)}).toThrow(new Error ('O preço do item deve ser maior que zero'));
  });
 test('Lança um erro se o preço é zero', () => {
    expect(() => {createItem('banana', 'kg', 0, 20)}).toThrow(new Error ('O preço do item deve ser maior que zero'));
 });
});
