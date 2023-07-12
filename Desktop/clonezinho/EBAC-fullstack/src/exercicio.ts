const Calcular = (n1: number, n2: number): number => {
  return n1 * n2;
}

const Ola = (nome: string): string => {
  return `${nome} diz Olá`;
}

const resultado = Calcular(10, 10);
console.log(resultado);

const saudacao = Ola("Bia");
console.log(saudacao);
