function Card({ nome, matricula }) {
    return (
      <div className="card">
        <h3>Nome: {nome}</h3>
        <p>Matrícula: {matricula}</p>
      </div>
    );
  }
  
  export default Card;