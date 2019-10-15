import React, {Component} from 'react';
import ColumnPair from './FirstColumnPair.js';


// import '../App.css';

class Column extends Component {

// GENERATE THE PAIRS BASED ON THE AMOUNT NEEDED FOR THE COLUMN (this.props.pairAmount.forEach)

  render(){
    return (
      <div className = "Column" id = "bracketColumn">
      <div className = "columnHeader" >{this.props.name}</div>
      {/* {this.generateColumnPairs()} */}
      </div>
    );
  }
}

export default Column;
