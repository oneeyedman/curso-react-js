import './App.css';

function App() {
  const DATA = ['Uno', 'Dos', 'Tres', 'Cuatro'];

  function consoleLogMe(event) {
    console.log(event.currentTarget.textContent);
  }

  return (
    <div className="app">
      <ul>{DATA.map(item => <li key={item} onClick={consoleLogMe}>{item}</li>)}</ul>
    </div>
  );
}

export default App;
