import React, {Component} from 'react';
import Pair from './Pair.js';


// import '../App.css';

class FirstColumn extends Component {
  // generate pairs for the column
  generateFirstColumnPairs = () => {
    let pairComponents = []
    let i = 0
    while (i < this.props.pairAmount * 2) {
      pairComponents = [...pairComponents, <Pair key={i} winnerClickHandle={this.props.winnerClickHandle} top={this.props.seedList[i]} topNum={i+1} bottom={this.props.seedList[i+1]} bottomNum={i+2} seedList={this.props.seedList}/>]
      console.log("---");

      i = i + 2;
    }
    ////
    return pairComponents
  }

  render(){
    return (
      <div className = "FirstColumn" id = "bracketColumn">
      <div className = "columnHeader">{this.props.name}</div>
      {this.generateFirstColumnPairs()}
      </div>
    );
  }
}

export default FirstColumn;
