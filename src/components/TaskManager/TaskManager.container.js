import { connect } from 'react-redux';
import { fetchProjectsTasks } from '../../redux/actions';
import TaskManager from './TaskManager.component';

const mapDispatchToProps = {
  fetchProjectsTasks,
};

export default connect(null, mapDispatchToProps)(TaskManager);