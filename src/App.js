import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  return (
    <div className="App">
     <HelloWorld />
     <SayMyName nome="David"/>
     <Pessoa

      nome='David'
      idade='26'
      profissao='Programador'
      foto='https://via.placeholder.com/100'
      />
    </div>
  );
}

export default App
