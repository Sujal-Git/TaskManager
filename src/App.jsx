import './App.css'
import { useState } from 'react';
function App() {
  const [newTask, setNewTask] = useState('');
  const [list,setList]=useState([]);
  
  const handleAddTask = () => {
       setList([...list,newTask])
       setNewTask('')
  };
  const deleteTask = (name) => {
    const updatedlist = list.filter((task)=>{ return task!=name});
    setList(updatedlist);
  };

  
  return (
    <>
        <div className="container">
      <h1 className="heading">To-Do-List</h1>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="input"
        />
        <button onClick={handleAddTask} className="addButton">
          +
        </button>
      </div>
      <ul>
        {list.map((task)=>{
          return <li key={task} onDoubleClick={() => deleteTask(task)}>{task}</li>
        })}
          
      </ul>
    </div>
    </>
  )
}

export default App
