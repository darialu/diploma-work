import React, { Component } from 'react';
import './TaskManager.component.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { getElementById } from '../../utils';

class TaskManager extends Component {

  constructor (props) {
    super(props);
    this.state = {
      // todos: [{ name: 'state working' }],
      todos: [],
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
        // console.info('TODO data', data.data);
        this.props.setTasks(data.data);
        let tasksArr = data.data;

        for (var i = 0; i < tasksArr.length; i++){
          let task = tasksArr[i];
          let statusKey = task.status == undefined ? 'todos' : task.status;

          this.setState({ [statusKey]: [...this.state[statusKey], task] });
        }
      });
  }

  taskEmpl = id => {
    event.preventDefault();
    let employee = getElementById(this.props.employees, id);
    let name = employee.name + ' ' + employee.surName;

    return name;
  }

  deleteTask = (event, id, taskKey) => {
    event.preventDefault();
    // console.info('delete task', id);
    this.props.deleteTask(id)
      .then(() => {
        // console.log(data);
        this.setState({
          [taskKey]: [...this.state[taskKey].filter(task => task.id !== id)],
        });
      });
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

    draggedTask.status = taskKey;
    let id = draggedTask.id;

    this.props.addStatusToTask(id, draggedTask);

    this.setState({
      [taskKey]: [...this.state[taskKey], draggedTask],
      [this.state.draggedKey]: this.state[this.state.draggedKey].filter(task => task.id !== draggedTask.id),
      draggedTask: {},
      draggedKey: ''
    });

  }

  render () {
    const styles = {
      delBut: {
        float: 'right'
      }
    };
    let id = this.props.match.params.id;
    let projects = this.props.projects;
    let currentProject = getElementById(projects, id);
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
            <Link className='linkComponent' to={`${'/addTask'}/${id}`}>
          Add  new task
            </Link>
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
                  <div className='aboutTodo'>
                    <p>{todo.name}</p>
                    <p>{todo.description}</p>
                    <p className='emplName'>{this.taskEmpl(todo.employeeId)}</p>
                    <IconButton onClick={(event) => this.deleteTask(event, todo.id, 'todos')} style={styles.delBut} mini aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                  
                  
                </div>  
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
                  <IconButton onClick={(event) => this.deleteTask(event, todo.id, 'inProgressTasks')} style={styles.delBut} mini aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                  <p>{todo.name}</p>
                  <p>{todo.description}</p>
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
                  <IconButton onClick={(event) => this.deleteTask(event, todo.id, 'inTestingTasks')} style={styles.delBut} mini aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                  <p>{todo.name}</p>
                  <p>{todo.description}</p>
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
                  <IconButton onClick={(event) => this.deleteTask(event, todo.id, 'completedTasks')} style={styles.delBut} mini aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                  <p>{todo.name}</p>
                  <p>{todo.description}</p>
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
