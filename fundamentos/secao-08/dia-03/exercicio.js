const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

// ficção cienfifica ou fantasia

const formatedBookNames = () =>  books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')

// console.log(formatedBookNames());

// Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

const bookYear = () => books.filter((element) => (new Date().getFullYear() - element.releaseYear) > 60).sort((a,b) => a.releaseYear - b.releaseYear);

// console.log(bookYear());

// 3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

const booksAuthorYear = (birthYear) => {
    return books.filter((book) => book.author.birthYear === birthYear).map((book) => book.name);
}
// console.log(booksAuthorYear(1920))

// 🚀 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

const formatedBookNames1 = () =>  books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia').map((book) => book.name).sort();

// console.log(formatedBookNames1());


// 🚀 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const bookYear1 = bookYear().map((element) => element.name);

// console.log(bookYear1);


// 🚀 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.


const authorWith3DotsOnName = () => {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}

const authorWith3DotsOnName1 = () => {
  return books.filter((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  ))[0].name;
}