import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {
  const name ='david'
  const newName = name.toUpperCase()
  function sum(a, b){
    return a + b;
  }
  const url ="https://placehold.co/300x200/orange/white"
  return (
    <div className="App">
     <h1>alterando o jsx</h1>
     <h2>JSX</h2>
     <p>ola, {newName}</p>
     <p>Soma: {2 + 2}</p>
     <p>{sum(2, 4)}</p>
     <img src={url} alt="Minha imagem" />
     <HelloWorld />
    </div>
  );
}

export default App;
