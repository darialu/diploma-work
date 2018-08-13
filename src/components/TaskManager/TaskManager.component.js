import React, { Component } from 'react';
import './TaskManager.component.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Button from '@material-ui/core/Button';
import { getEmployee } from '../../utils';

class TaskManager extends Component {

  constructor (props) {
    super(props);
    this.state = {
      // todos: [{ name: 'state working' }],
      todos: this.props.tasks,
      inProgressTasks: [],
      inTestingTasks: [],
      completedTasks: [],
      draggedTask: {},
      draggedKey: ''
    };
  }

  componentDidMount () {
    let id = this.props.match.params.id;
    
    this.props.fetchProjectsTasks(id)
      .then((data) => {
        // console.info('TODO data', data);
        this.setState( { todos: data.data });
      });
  }

  taskEmpl = id => {
    let employee = getEmployee(this.props.employees, id);
    let name = employee.name + ' ' + employee.surName;

    return name;
  }

  onDrag = (event, item, draggedKey) => {
    event.preventDefault();
    // console.log('drag working!', todo);
    this.setState({
      draggedTask: item,
      draggedKey
    });
  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  onDrop = (event, taskKey) => {
    if (taskKey === this.state.draggedKey) {
      return;
    }

    event.preventDefault();
    const { draggedTask } = this.state;

    this.setState({
      [taskKey]: [...this.state[taskKey], draggedTask],
      [this.state.draggedKey]: this.state[this.state.draggedKey].filter(task => task.id !== draggedTask.id),
      draggedTask: {},
      draggedKey: ''
    });
  }

  render () {
    let id = this.props.match.params.id;
    let projects = this.props.projects;
    let currentProject = getEmployee(projects, id);
    // let tasks = this.props.tasks;
    
    // this.setState({ todos: tasks });
    const { todos, completedTasks, inProgressTasks, inTestingTasks } = this.state;
    
    return (
      <div className='taskWrapper'>
        <div className='aboutProject'>
          <h3>{currentProject.name}</h3>
          <p className='creationDate'><Moment format="DD.MM.YYYY">{currentProject.creationDate}</Moment></p>
        </div>
        <div className='addTaskButArea'>
          <Button 
            className='addTaskBut'
            variant="contained" 
            color="primary">
            {/* <Link className='linkComponent' to={`${'/taskManager'}/${projectID}`}> */}
          Add  new task
            {/* </Link> */}
          </Button>
        </div>
        <div className='todosArea'>
          <div 
            className="todos" 
            onDrop={event => this.onDrop(event, 'todos')}
            onDragOver={(event => this.onDragOver(event))}>
            <h3>To do:</h3>
            {todos.length === 0
              ? <p>no tasks</p>
              :
              todos.map(todo =>
                <div
                  className='taskItem'
                  draggable
                  onDrag={(event) => this.onDrag(event, todo, 'todos')}
                  key={todo.id}>
                  <p>{todo.name}</p>
                  <p className='emplName'>{this.taskEmpl(todo.employeeId)}</p>
                </div>  
                // <p>{todo.name}</p>
              )
            }
          </div>
          <div 
            className="inProgress"
            onDrop={event => this.onDrop(event, 'inProgressTasks')}
            onDragOver={(event => this.onDragOver(event))}>
            <h3>In progress:</h3>
            {inProgressTasks.length === 0
              ? <p>no tasks</p>
              :
              inProgressTasks.map(todo =>
                <div
                  className='taskItem'
                  draggable
                  onDrag={(event) => this.onDrag(event, todo, 'inProgressTasks')}
                  key={todo.id}>
                  <p>{todo.name}</p>
                  <p className='emplName'>{this.taskEmpl(todo.employeeId)}</p>
                </div>  
              )
            }
          </div>
          <div 
            className="inTesting" 
            onDrop={event => this.onDrop(event, 'inTestingTasks')}
            onDragOver={(event => this.onDragOver(event))}>
            <h3>In test:</h3>
            {inTestingTasks.length === 0
              ? <p>no tasks</p>
              :
              inTestingTasks.map(todo =>
                <div
                  className='taskItem'
                  draggable
                  onDrag={(event) => this.onDrag(event, todo, 'inTestingTasks')}
                  key={todo.id}>
                  <p>{todo.name}</p>
                  <p className='emplName'>{this.taskEmpl(todo.employeeId)}</p>
                </div>  
              )
            }
          </div>
          <div 
            className="completed" 
            onDrop={event => this.onDrop(event, 'completedTasks')}
            onDragOver={(event => this.onDragOver(event))}>
            <h3>Done:</h3>
            {completedTasks.length === 0
              ? <p>no tasks</p>
              :
              completedTasks.map(todo =>
                <div
                  key={todo.id}
                  className='taskItem'
                  draggable
                  onDrag={(event) => this.onDrag(event, todo, 'completedTasks')}>
                  <p>{todo.name}</p>
                  <p className='emplName'>{this.taskEmpl(todo.employeeId)}</p>
                </div>  
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TaskManager;
