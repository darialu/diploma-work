import { connect } from 'react-redux';
import { fetchServerData } from '../../redux/actions';
import Auth from './Auth.component';

const mapDispatchToProps = {
  fetchServerData,
};

export default connect(null, mapDispatchToProps)(Auth);