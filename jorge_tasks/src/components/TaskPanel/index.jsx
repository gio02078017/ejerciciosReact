import React, { useState, useEffect } from 'react'
import shortid from 'shortid'

const TaskPanel = ( { task, editMode, handleEdit, handleCreate } ) => {
  const [error, setError] = useState(null)
  const [localTask, setLocalTask] = useState({
    id: undefined,
    name: ''
  })

  useEffect(() => {
    if(editMode)
    {
      setLocalTask({
        id: task.id,
        name: task.name
        });
    }
  },  [task])

  const validForm = () => {
    let isValid = true
  
    setError(null)
    
    if(localTask.name.trim() === '') {
      setError("Debes ingresar una tarea")
      isValid = false
    }
  
    return isValid
  }
  
  const handleChange = (e) => {
      console.log("localTaskId " + localTask.id);

      const id= localTask.id === undefined ? shortid.generate() : task.id;
      
      console.log("Id " + id);

      console.log(id)
      setLocalTask({ 
        id: id,
        name: e.target.value
       })
    }

    const saveTask = (e) => {
      e.preventDefault()
  
      if(!validForm()) {
        return
      }

      if(editMode){
        handleEdit(localTask)
      }else{        
        handleCreate(localTask);
      } 

      setLocalTask({ 
        id: undefined,
        name: ''
       })

    }

    console.log("TaskPanel localTask ", localTask);

    return (
      <>
          <h4 className = "text-center"> { !editMode ? "Agregar tarea" : "Modificar tarea"}</h4>

          <form onSubmit = { saveTask }>
            <input type = "text" className = "form-control mb-2" placeholder = "Ingrese una tarea..."
              onChange = { handleChange }
              value = { localTask.name }/>
              {
                error && <span className = "text-danger">{ error }</span>
              }
            <button 
              className = { !editMode ? "btn btn-dark btn-block" : "btn btn-warning btn-block" } type="submit">
              { !editMode ? "Agregar" : "Guardar" }
            </button>
          </form>
      </>
    )
}

export default TaskPanel;