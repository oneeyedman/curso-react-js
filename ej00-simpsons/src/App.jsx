import './App.css';
import data from './data/data';
import {TheSimpsons} from  './components/TheSimpsons';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__wrapper">
          <h1 className="app__header-title">Familia Simpsons</h1>  
        </div>
      </header>
      <main className="app__main">
        <div className="app__wrapper">
          <TheSimpsons familyData={data} />
        </div>
      </main>
    </div>

  );
}

export default App;
