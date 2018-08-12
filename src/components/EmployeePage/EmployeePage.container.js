import { connect } from 'react-redux';
import { fetchTasks } from '../../redux/actions';
import EmployeePage from './EmployeePage.component';

const mapDispatchToProps = {
  fetchTasks,
};

export default connect(null, mapDispatchToProps)(EmployeePage);