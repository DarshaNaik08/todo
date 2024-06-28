import { useState } from 'react';
import './CSS/Todo.css';
import { useRef } from 'react';
import { useEffect } from 'react';
import Todoitems from './Todoitems';

let count=0;
const Todo = () => {
   
    const [todos, setTodos]= useState([]);
    const inputRef = useRef(null);
    const addTodo=()=>{
        console.log(inputRef.current.value);
setTodos([...todos, {no: count++, text: inputRef.current.value, display: ''}]);
inputRef.current.value=''
localStorage.setItem("todos_count", count);
    }

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")));
       count= localStorage.getItem("todos_count");
    },[])

    useEffect(()=>{
        setTimeout(() => {
            console.log(todos);
localStorage.setItem("todos", JSON.stringify(todos));

    },100)
        }, [todos]);

  return (
    <div>
      <div className="todo">
        <div className="todo-header">To-do list  </div>
            <div className="todo-add">
                <input type="text" placeholder='Enter todo' ref={inputRef} className='todo-input'/>
                <div className="todo-add-btn" onClick={()=>{addTodo()}}>Add</div>
            </div>
            {todos == ""? <div className='nil-todos'>No todos to be shown. Please add a todo.</div>:<div className="todo-list">
             {todos.map((item, index)=>{
               return <Todoitems key={index} no={item.no} setTodos={setTodos} display={item.display} text={item.text} />
             })}
            </div>}
            
      
      </div>
    </div>
  )
}

export default Todo
