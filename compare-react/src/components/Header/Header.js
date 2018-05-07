import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      
      <div className="dropdown is-right is-active">
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu6">
          <span>Right aligned</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu6" role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            <p>Add the <code>is-right</code> modifier for a <strong>right-aligned</strong> dropdown.</p>
          </div>
        </div>
      </div>
    </div>
  
    );
  }
}

export default Header;
