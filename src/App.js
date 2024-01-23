import React, {useReducer, useState} from 'react';
import Todo from './Todo.js'
import './App.css';

export const ACTIONS = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo'
}

function reducer(todos, action){
  switch(action.type){
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)];
      
      case ACTIONS.TOGGLE_TODO:
        return todos.map(todo => {
          if(todo.id === action.payload.id){
            return { ...todo, complete: !todo.complete}
          }
          return todo
        })
        
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)

        // default: return todos
    }
}

function newTodo(name){
  return { 
     id:Date.now(),
    name: name,
    complete:false
  }
}




function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e){
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO, payload:{name:name}})
    setName('')
  }

  function toggleTodo(ids){
    return dispatch({ 
      type: ACTIONS.TOGGLE_TODO , payload:{id: ids}
    })
  }
  function deleteTodo(ids){
    return dispatch({ 
      type: ACTIONS.DELETE_TODO , payload:{id: ids}
    })
  }

  console.log(todos);
  return (
    <section className="container">
    <div className="heading">
      <img className="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" />
      <h1 className="heading__title">To-Do List</h1>
    </div>
  <form className="form" onSubmit={handleSubmit} >
    <div>
      <label className="form__label" for="todo">~ Today I need to ~</label>
      <input className="form__input"
           type="text" 
           id="todo" 
           size="30"
           value={name}
           onChange = { e => setName(e.target.value)}
           required />
      <button className="button" ><span>Submit</span></button>
    </div>
  </form>
  <div>
    <ul className="toDoList">
      {
        todos.map(todo => {
          return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        })
      }
    </ul>
  </div>
</section>
  );
}

export default App;
// Mistake in toggle button  ---- ##SOLVED##
//METHOD - using a unique id for each tick - for each lable and respective div -class;