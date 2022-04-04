import './App.css';
import NewTodo from "./components/NewTodo";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <div className="app__panel">
        <Header />
        <main className="app__main">
          <section className="app__add-todo">
            <div className="app__wrapper">
              <h2 className="app__add-todo-title sr">Añadir nueva tarea</h2>
              <NewTodo />
            </div>
          </section>
          <section className="app__todo">
            <div className="app__wrapper">
              <h2 className="app__todo-title sr">Lista de tareas</h2>
              <TaskList />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
