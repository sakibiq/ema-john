import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <div>
      <nav className='header'>
        <img src={logo} alt='logo' />

        <div>
          <a href='/shop'>shop</a>
          <a href='/order'>order</a>
          <a href='/inventory'>inventory</a>
          <a href='/login'>login</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
