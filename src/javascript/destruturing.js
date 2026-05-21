
//Teste simples do uso do destruturing
//Consiste em desempacotar algo dentro de um array ou objeto
//Objetivo: Manter o codigo mais limpo.


const arr = [1,2,3,4,5];
const [um,dois,treis,quatro,cinco] = arr;

console.log(um,dois);

const usuario ={
    nome: 'Ana',
    idade: 28,
    profissao: 'Jogador de Hokey'
};

const {idade,nome} = usuario;

console.log(idade,nome);

