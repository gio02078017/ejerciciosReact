import React, { useState } from 'react';
import TaskGrid from './components/TaskGrid';
import TaskPanel from './components/TaskPanel';

function App (){

  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [task, setTask] = useState();

  const handleEdit = (editTask) => {
    console.log("handleEdit task ", editTask);
    const editedTasks = tasks.map(item => item.id === editTask.id ? editTask : item)
    setTasks(editedTasks)
    setEditMode(false);
  }

  const handleCreate = (task) => {
    console.log("handleCreate task ", task);
    setTasks([ ...tasks, task ]);
  }

  const deleteTask = (deleteTask) => {
    console.log("deleteTask task ", deleteTask);
    setTasks(tasks.filter(task => task.id !== deleteTask.id));
  }

  const petitionEditTask = (task) => {
    console.log("editTask task ", task);
    setEditMode(true);
    setTask(task);
  }  

  console.log("handleEdit tasks ", tasks);

  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr/>
      <div className="row">
          {<div class="col-8">
             <TaskGrid 
                tasks = { tasks } 
                deleteTask={deleteTask}             
                editTask={petitionEditTask}     
             />
          </div>
          }
          <div className="col-4">
             <TaskPanel
                task = { task }
                setTasks = { setTasks }
                editMode = { editMode }
                handleEdit={handleEdit}
                handleCreate={handleCreate}        
             />
          </div>
      </div>
    </div>
  );
}

export default App;
