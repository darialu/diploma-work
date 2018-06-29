import React, { Component } from 'react';
import './EmployeeItem.component.css';
import { Link } from 'react-router-dom';

class EmployeeItem extends Component {
  static defaultProps = {
    image: 'http://marketline.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
  }

  render () {
    const { name, surname, position } = this.props;

    return (
      <li className="employee">
        <div>
          <div className="employee-name"> {name} </div>
          <div className="employee-surname"> {surname} </div>
          <div className="employee-position"> {position} </div>
        </div>
      </li>
    );
  }
}

export default EmployeeItem;
