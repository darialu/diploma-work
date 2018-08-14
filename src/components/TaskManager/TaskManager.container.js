import { connect } from 'react-redux';
import { fetchProjectsTasks, addStatusToTask, deleteTask, setTasks } from '../../redux/actions';
import TaskManager from './TaskManager.component';

const mapDispatchToProps = {
  fetchProjectsTasks,
  setTasks,
  addStatusToTask,
  deleteTask
};

export default connect(null, mapDispatchToProps)(TaskManager);