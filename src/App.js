import React from 'react'
import Task from './task'
import TaskList from './frontTaskList'

class App extends React.Component {
  state = {
    tasks : [
      {content:'Get some milk' , id:1}
    ]
  }

  addTask = (task) => {
    task.id = Math.random(1,100)
    let taskList = [...this.state.tasks, task]
    this.setState({
      tasks :  taskList
    })
  } 
  
  deleteTask = (id) =>{
    let taskList = this.state.tasks.filter(task => {
      return id !==task.id
    })
    this.setState({
      tasks: taskList
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h2 className="blue-text darken-1 center">TodoApp</h2>
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
        <Task addTask={this.addTask}/>
      </div>
    )
  }
}

export default App;
