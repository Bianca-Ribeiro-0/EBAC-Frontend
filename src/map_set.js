let meuMap = new Map();

meuMap.set("Nome", "Bianca");
meuMap.set("Stack", "html, css, js" );

console.log(meuMap);
const nome = meuMap.get("nome");

//retorna a chave do objeto
for(let chave of meuMap.keys()) {
    console.log(chave);
}

//retorna o valor da chave
for(let valorDaChave of meuMap.values()) {
    console.log(valorDaChave);
}

//retorna como ele está escrito na variavel
for(let entrada of meuMap.entries()) {
    console.log(entrada);
}

//concatenando valores com o entries
for(let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

//deletando uma chave no meuMap
meuMap.delete("Stack");
console.log(meuMap)

//adicionando numeros com o set e foreach
const cpfs = new Set();
cpfs.add(49303957839)
cpfs.add(49593785673)
cpfs.add(39409039309)

console.log(cpfs)
cpfs.forEach((valor) => {
    console.log(valor)
})


//Set não permite itens duplicados - transformando array em set
const array = ['Bianca', 'Ana', 'Leo', 'Leo', 'Bianca']
const arrayComoSet = new Set([...array])

//transformando set em array
const arraySemItensD = [...arrayComoSet]