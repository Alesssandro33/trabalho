import { useState } from 'react';

// Importamos os componentes que criamos
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import ListaAlunos from './componentes/Listaalunos';
import './App.css'

function App() {
  // --- STATE E EVENTOS --- [cite: 7]

  // 1. Estado para o contador de cliques [cite: 30]
  // 'cliques' é a variável que guarda o valor.
  // 'setCliques' é a função que usamos para atualizar o valor de 'cliques'.
  const [cliques, setCliques] = useState(0);

  // Função que será chamada quando o botão de clique for pressionado.
  function handleClique() {
    setCliques(cliques + 1); // Incrementa o contador
  }

  // 2. Estado para controlar o alerta [cite: 32]
  const [alerta, setAlerta] = useState(null); // 'null' significa que o alerta está escondido

  // Função para mostrar o alerta verde
  function handleAlertaSucesso() {
    setAlerta({ tipo: 'sucesso', mensagem: 'Ação realizada com sucesso!' });
  }

  // Função para mostrar o alerta vermelho
  function handleAlertaErro() {
    setAlerta({ tipo: 'erro', mensagem: 'Ocorreu um erro ao processar.' });
  }

  return (
    <div className="App">
      <Header />

      <main>
        {/* Mensagem de boas vindas com seu primeiro nome */}
        <h2>Olá, Parceiro de Programação!</h2> {/* Substitua pelo seu nome */}

        {/* --- RENDERIZAÇÃO CONDICIONAL --- [cite: 9] */}
        {/* O alerta só aparece se a variável 'alerta' não for nula */}
        {alerta && (
          <div className={`alerta ${alerta.tipo}`}>
            {alerta.mensagem}
          </div>
        )}

        {/* Botão de contagem de cliques */}
        <button onClick={handleClique}>
          Você clicou {cliques} vezes
        </button>

        {/* Botões de Ações */} 
        <div className="acoes">
          <button onClick={handleAlertaSucesso}>Mostrar Alerta Verde</button>
          <button onClick={handleAlertaErro}>Mostrar Alerta Vermelho</button>
        </div>

        <ListaAlunos />
      </main>

      <Footer />
    </div>
  );
}

export default App;''