import './App.css';
import { NewTodo } from "./components/NewTodo";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__wrapper">
          <h1 className="app__title">☑︎ Mis oraciones</h1>
        </div>
      </header>
      <main className="app__main">
        <section className="app__add-todo">
          <div className="app__wrapper">
            <h2 className="app__add-todo-title">Añadir nueva tarea</h2>
            <form action="" className="app__add-todo-form form">
              <NewTodo />
            </form>
          </div>
        </section>
        <section className="app__todo">
          <div className="app__wrapper">
            <h2 className="app__todo-title sr">Lista de tareas</h2>
            <ul className="app__todo-list">
              <li className="app__todo-item"></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
