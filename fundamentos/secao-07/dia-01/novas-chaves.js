const pessoaEstudante = {}

const adicionaPropriedades = (objeto, propriedade, valor) => {
    objeto[propriedade] = valor;
}

adicionaPropriedades(pessoaEstudante, 'nome', 'Eleanora')
adicionaPropriedades(pessoaEstudante, 'e-mail', 'eleanora.ms@gmail.com')
adicionaPropriedades(pessoaEstudante, 'telefone', '051 99571-1418')
adicionaPropriedades(pessoaEstudante, 'github', 'eleanorams')
adicionaPropriedades(pessoaEstudante, 'linkedin', 'eleanorams')

console.log(pessoaEstudante)