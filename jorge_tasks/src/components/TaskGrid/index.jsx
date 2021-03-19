import React from 'react';
import { size } from 'lodash'

const TaskGrid = ({tasks, deleteTask, editTask }) => (
    <>
        <h4 className="text-center">Lista de tareas</h4>
        {
            size(tasks) === 0 
            ? ( <li className="list-group-item">Aún no hay tareas programadas</li> ) 
            : ( <ul className="list-group">
                {
                    tasks.map((task) => (
                        <li className="list-group-item" key={task.id}>
                            <span className="lead">{task.name}</span>
                            <button 
                                className="btn btn-danger btn-sm float-right mx-2" 
                                onClick={() => deleteTask(task)}>
                                Eliminar
                            </button>
                            <button 
                                className="btn btn-warning btn-sm float-right" 
                                onClick={() => editTask(task)}>
                                Editar
                            </button>
                        </li>
                    ))
                }
                </ul>
            )                          
        }
    </>
)
export default TaskGrid;
