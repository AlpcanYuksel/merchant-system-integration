import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import './Navbar.css'

class Navbar extends Component {
    state = {
        clicked:false
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"> React<i className="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key= {index}>
                <Link className={item.cName} to={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    );
  }
}

export default Navbar;