import React from 'react'

class Task extends React.Component{
    state = {
        content : '',
    }

    handleOnChange = event => {
        this.setState({
            content : event.target.value,
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addTask(this.state)
        this.setState({
            content:''
        })
    }

    render() {
        return(
        <div className="add-task">
            <form onSubmit = {this.handleOnSubmit}>
            <label>Add new task</label>
            <input type="text" className="task-text center " onChange={this.handleOnChange} value={this.state.content}/>
            </form>
        </div>
        )
    }
}

export default Task