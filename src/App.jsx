import React, { useState } from 'react'
import TodoList from './components/TodoList'
import Alert from './components/Alert'
import Card from './components/Card'


export default function App() {
const [alert, setAlert] = useState(null)
const [clickCount, setClickCount] = useState(0)


const showAlert = (type, message) => {
setAlert({ type, message })
setTimeout(() => setAlert(null), 3000)
}


return (
<div className="app-root">
<Header title="To-Do App - Trabalho ADS 2MA" />


<main className="container">
{alert && <Alert type={alert.type} message={alert.message} />}


<section className="top-controls">
<button
onClick={() => {
setClickCount((c) => c + 1)
showAlert('green', 'Você clicou!')
}}
>
Você clicou
</button>
<span className="click-count">Você clicou {clickCount} vezes</span>
</section>


<TodoList onShowAlert={showAlert} />


<section>
<h2>Lista de Alunos</h2>
<ListaAlunos names={[
'Ana Silva', 'Bruno Souza', 'Carla Lima', 'Diego Rocha',
'Eduarda Alves', 'Fábio Nascimento'
]} />
</section>


<section>
<h2>Cards (exemplo)</h2>
<div className="cards">
<Card title="Disciplina" text="Desenvolvimento Web" />
<Card title="Professor" text="Renato Freire" />
<Card title="Turma" text="ADS 2MA" />
</div>
</section>
</main>


<Footer course="ADS" discipline="Desenvolvimento Web" />
</div>
)
}
```