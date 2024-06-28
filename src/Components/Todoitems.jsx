import './CSS/Todoitems.css'
import tick from './Assets/accept.png'
import nottick from './Assets/radio-button.png'
import cross from './Assets/remove.png'

const Todoitems = ({ no, display, text, setTodos }) => {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => {
      return todo.no !== no;  // Return the condition for keeping the todo
    });
    setTodos(data);
    localStorage.setItem("todos", JSON.stringify(data));  
  };
  const toggle=(no)=>{
    let data =JSON.parse(localStorage.getItem("todos"));
   for(let i=0; i<data.length; i++){
    if(data[i].no===no){
      if(data[i].display===""){
        data[i].display="line-through"
      }else{
        data[i].display =""
      }
      break;
   }}
   setTodos(data);
  }
  return (
    <div>
      <div className="todo-items">
        <div className={`todo-items-container ${display}`} onClick={()=>{toggle(no)}}>
          {display===""?<img src={nottick} alt="" className='icon' />: <img src={tick} alt="" className='icon'/>}          
          <div className="todoitems-text">
            {text}
          </div>
        </div>
    
      <img src={cross} alt="" className='icon cross-icon' onClick={()=>{deleteTodo(no)}}/>
      </div>
    </div>
  )
}

export default Todoitems
