import React, {Component} from 'react';
// import Pair from './Pair.js';

// import '../App.css';

class FinalColumn extends Component {
  render(){
    return (
      <div className = "FinalColumn" id = "bracketColumn">
      <div className = "columnHeader">{this.props.name}</div>
      {/* <Pair winnerClickHandle={this.props.winnerClickHandle} top={this.props.seedList[0]} bottom={this.props.seedList[1]} /> */}
      </div>
    );
  }
}

export default FinalColumn;
