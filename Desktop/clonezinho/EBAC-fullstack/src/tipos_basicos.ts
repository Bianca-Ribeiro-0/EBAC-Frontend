let estaChovendo: boolean = false
let idade: number = 27
let altura: number = 1.60
const nacionalidade: string = 'brasileira'

//tipagem explicita
const colegas: string[] = ['lucas', 'amanda']
const tecnologias: Array<string> = ['html','css']
const notas: ReadonlyArray<number> = [10, 8, 2]
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['bia', true, 19]


let idadeDaAna: number | string = 25
idadeDaAna = '25 anos'

//recebe todos os tipos de dados
let dadosDaApi: any;
dadosDaApi: 10
dadosDaApi: true

//tipagem implicita
let curso = 'front-end'