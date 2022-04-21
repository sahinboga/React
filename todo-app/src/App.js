
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [todos, setTodos] = useState([]);

    return (
        <div>
            <section className="todoapp">
                <Header addTodo={setTodos} todos={todos}/>

                <Main removeTodo={setTodos} updateTodos={setTodos} todos={todos}/>
            
            </section>
        </div>
    );
}

export default App;
