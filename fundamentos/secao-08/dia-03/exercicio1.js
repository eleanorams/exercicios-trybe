// Fonte: <https://restcountries.com/v2/all>

const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Åland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

//   1 - Calcule a quantidade total da população de todos os países.

const pop = countries.reduce((acc, curr) => {
    return acc + curr.population
}, 0);
// console.log(pop);

// 2 - Calcule a área total de todos os países.

const area = countries.reduce((acc, curr) => {
    return acc + curr.area
}, 0);

// console.log(area)

const maiorNome = countries.reduce((acc, curr) => {
return acc.name.length > curr.name.length ? acc : curr
});
// console.log(maiorNome)

// 🚀 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
//   const expectedResult = 20;
  
  const countA = () => {
    // transforma o array em uma string de letras minusculas. e depois retorna um array de letras
 const strings = names.toString().toLowerCase().split('').reduce((acc, curr) => {
    if (curr === 'a') {
        curr = 1
    } else {
        curr = 0
    } 
    return acc + curr;
 }, 0);
 return strings
}
console.log(countA())