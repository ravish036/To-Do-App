import React from 'react'
import ACTIONS from './App.js'
// import { toggleTodo } from './App.js'
import './todo.css'

export default function Todo({ todo,toggleTodo,deleteTodo}) {
  return (
    <div>
        <li className='list-item' >
          <span style={{color: todo.complete ? '#AAA' : '#000' }}>  {todo.name} </span>  
         
    {/* Toggle btn */}
    <span style={{display:'flex', flexDirection:'row' }}>
        <span className="checkbox-wrapper" style={{paddingRight:"17px"}} >
          <input id={todo.id} type="checkbox"  />
              <label for={todo.id} onClick={() => toggleTodo(todo.id)}>
                  <div className="tick_mark" ></div>
              </label>
        </span>
       
       <button className="btn"  
        onClick={() => deleteTodo(todo.id)}>
            <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" className="icon">
            <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
            </svg>
        </button>
    </span>
      </li>
    </div>
  )
}
