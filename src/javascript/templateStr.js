//Demonstração simples do uso de Template String



eduardo ={
        nome: "Eduardo Silveira da Silva",
        idade: 17,
        altura: 171
};

//Sem Template String

console.log(eduardo.nome+" tem "+ eduardo.idade + " anos\n"+
"________________________________________")

//Com Template String

console.log(`${eduardo.nome} tem ${eduardo.idade} 
________________________________________`)