import React from 'react'

const TasksList = ({tasks,deleteTask}) => {
    let taskList = tasks.length ? tasks.map(task => {
        return(
            <div className='collection-item' key={task.id}>
                <span className='task' onClick={()=>{deleteTask(task.id)}}>{task.content}</span>
            </div>
        )
        }
    ) 
    : (
        <p> !empty List </p>
    )
    return(
        <div className="task-list">
            {taskList}
        </div>
    )
}
export default TasksList