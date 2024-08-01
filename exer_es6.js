
const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carlos', nota: 6 },
    { nome: 'Diana', nota: 7 },
    { nome: 'Eduardo', nota: 4 }
];
function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}


const aprovados = filtrarAprovados(alunos);
console.log(aprovados);
