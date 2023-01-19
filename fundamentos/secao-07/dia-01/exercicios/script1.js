const verificaValor = (value1,value2) => {
if (value1.trim() === '' || value2.trim() === '') {
    throw new Error ('Insira um valor.')
} if (isNaN(value1) || isNaN(value2)) {
    throw new Error ('Insira um valor numérico.')
}
}

// const verificaNumbero = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number')
//     throw new Error ('Insira um valor válido')
// }

function sum() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    try {
    verificaValor(value1, value2) 
    // verificaNumbero(value1, value2)
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    } catch (error) {
        document.getElementById('result').innerHTML = error.message
    } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    }
  }
  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }
