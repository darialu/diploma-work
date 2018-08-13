import React, { Component } from 'react';
import './TableItem.component.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// import { employeesUrl } from '../../urls';
import 'moment-timezone';

class TableItem extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.viewPage(this.props.item.id);
  };

  deleteItem = (event) => {
    event.preventDefault();
    this.props.deleteItem(this.props.item.id);
  }

  editItem = (event) => {
    event.preventDefault();
    this.props.editItem(this.props.item.id);
  }

  render () {
    const styles = {
      button: {
        
      },
      extendedIcon: {
        
      },
    };

    let item = this.props.item;
    let id = item.id;
    let name = item.name;
    let link = this.props.link;
    

    return (
      <tr>
        <td key={id}>
          { item.surName !== undefined
            ? <Link 
              to={`${'/employee'}/${id}`} 
              className='Link'>
              {name + ' ' + item.surName}
            </Link>
            : <Link 
              to={`${'/project'}/${id}`} 
              className='Link'>
              {name}
            </Link>
          }
        </td> 
        {item.position !== undefined &&
          <td>{item.position.name}</td>
        }
        {item.location !== undefined &&
        <td>{item.location.name}</td>
        }
        {item.birthday !== undefined &&
        <td><Moment format="DD.MM.YYYY">{item.birthday}</Moment></td>
        }
        {item.description !== undefined &&
        <td>{item.description}</td>
        }
        {item.creationDate !== undefined &&
        <td><Moment format="DD.MM.YYYY">{item.creationDate}</Moment></td>
        }
        {this.props.deleteItem !== undefined &&
        <td>
          <Button 
            variant="fab" 
            mini
            onClick={this.deleteItem}
            className={styles.button}>
            <DeleteIcon />
          </Button>
        </td>
        }
        { this.props.link !== undefined &&
        <td>
          <Button 
            variant="fab" 
            mini
            color="secondary" 
            aria-label="Edit" 
            className={styles.button}>
            <Link className='linkComponent' to={`${link}/${id}`}>
              <EditIcon />
            </Link>
          </Button>
        </td>
        }
      </tr>

    );
  }
}

export default TableItem;
