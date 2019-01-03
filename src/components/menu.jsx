import React, { Component } from "react";

import { Navbar, NavItem} from 'react-materialize';

const style = {
  backgroundColor: '#545775',
  padding: '0 10%'
}

class Menu extends Component {
  constructor () {
    super();

    this.state = {}
  }

  render() {
    return (
      <Navbar style={style} brand="Mochila Router" right>
        <NavItem>Sign Up</NavItem>
        <NavItem>Log In</NavItem>
      </Navbar>
    );
  }
}

export default Menu;
