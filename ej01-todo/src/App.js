import './App.css';
import { NewTodo } from "./components/NewTodo";
import { TaskList } from "./components/TaskList";

const misOraciones = ['Tarea 1', 'tarea 2'];

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
            <NewTodo />
          </div>
        </section>
        <section className="app__todo">
          <div className="app__wrapper">
            <h2 className="app__todo-title sr">Lista de tareas</h2>
            <TaskList list={ misOraciones }/>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
