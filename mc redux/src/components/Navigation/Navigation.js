import React from 'react';
import { NavLink } from 'react-router-dom';
//import PropTypes from 'prop-types';

import './Navigation.scss';

import logo from '../../images/mc-logo-large-green.png';
import search from '../../images/search.svg';

class Navigation extends React.PureComponent {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className="navigation__container">
        <div className="navLogo">
          <img className="navigation-logo" src ={logo}/>
        </div>
        <div className="navigation__items">
          <ul>
            <NavLink to="/menu"><li>Меню</li></NavLink>
            <NavLink to="/quality"><li>Наше качество</li></NavLink>
            <li>Приложение Mcdonald's</li>
          </ul>
        </div>
        <div className="input-group">
          <input />
          <span className="search">
            <button><img src={search} /></button>
          </span>
        </div>
      </div>
    )
    ;

  }

}

export default Navigation;
