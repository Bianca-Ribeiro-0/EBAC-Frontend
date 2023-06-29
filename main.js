function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + " diz Olá");
    }
}  //clase pessoa

//classe funcionario possui 3 instancias
function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;            

    //get e set - recupera e seta valores
    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000);
    
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
        _salario = novoSalario;
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);
    
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
        _salario = novoSalario;
    }
}


const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const funcionario2 = new Estagiario("Pedro");
const funcionario3 = new Gerente("Amanda");

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());
