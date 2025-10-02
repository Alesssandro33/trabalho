import Card from './Card'; // Importamos nosso componente Card

function ListaAlunos() {
  // Uma lista (array) de objetos, onde cada objeto representa um aluno.
  const alunos = [
    { nome: 'Ana Clara', matricula: '2024001' },
    { nome: 'Bruno Costa', matricula: '2024002' },
    { nome: 'Carlos Eduardo', matricula: '2024003' },
    { nome: 'Daniela Ferreira', matricula: '2024004' }
  ];

  return (
    <div>
      <h2>Alunos Matriculados</h2>
      {/* Usamos .map() para percorrer a lista de alunos. */}
      {/* Para cada 'aluno' na lista, criamos um componente <Card>. */}
      {/* A 'key' é um identificador único que o React precisa para otimizar a renderização de listas. */}
      {alunos.map((aluno) => (
        <Card key={aluno.matricula} nome={aluno.nome} matricula={aluno.matricula} />
      ))}
    </div>

  );
}
export default ListaAlunos;