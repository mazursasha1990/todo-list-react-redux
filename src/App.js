import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="block">
        <h1>Todo App</h1>
        <Todos />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;
