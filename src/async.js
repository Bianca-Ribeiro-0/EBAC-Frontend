function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes ++;
    }
    return execucoes;
}


const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for(let i = 0; i < 1000000000; i++ ) {
            execucoes++
        }
        resolve(execucoes);
    } catch(e) {
        reject ('Erro na iteração dos números')
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o ux: ${login}`)
        }, 3000)
    })
}


async function execucaoPrincipal() {
    console.log("inicio")

    promiseComParametros('Bianca', 123).then(resultado => {
        console.log(resultado)
    })
    
    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }
    console.log("Fim")
}

execucaoPrincipal();