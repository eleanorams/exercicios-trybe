const {info, printMessage} = require('./printMessage');


describe('printMessage', () => {
    test('objeto passado como parâmetro possui a propriedade personagem', () => {
      expect(info).toHaveProperty('personagem')
  });
});

describe('printMessage', () => {
    test('verifica se contém Boas Vindas', () => {
      expect(printMessage(info)).toMatch('Boas vindas')
  });
});

describe('printMessage', () => {
    test('se a resposta contém o nome correto da personagem', () => {
      expect(printMessage(info)).toMatch('Margarida')
  });
});

describe('printMessage', () => {
    test('validar se a mensagem de erro é lançada caso a função seja chamada com um objeto inválido', () => {
        expect(() => {
            printMessage(4);
          }).toThrow(new Error('objeto inválido'));
  });
});