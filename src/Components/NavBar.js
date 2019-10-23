import React, {Component} from 'react';

class NavBar extends Component {
  
  render(){
    return (
        <div className="NavBar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li style={{float: 'right'}}><a className="active" href="#about">About</a></li>
            </ul>
        </div>
    );
  }
}

export default NavBar;
