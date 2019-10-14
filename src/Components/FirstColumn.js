import React, {Component} from 'react';
import Pair from './Pair.js';


// import '../App.css';

class FirstColumn extends Component {
  // generate pairs for the column
  generateFirstColumnPairs = () => {
    let pairComponents = []
    let i = 0
    let key = 1
    while (i < this.props.pairAmount * 2) {
      pairComponents = [...pairComponents, <Pair key={key} winnerClickHandle={this.props.winnerClickHandle} top={this.props.seedList[i]} bottom={this.props.seedList[i+1]} seedList={this.props.seedList}/>]
      key = key + 1;
      i = i + 2;
    }
    ////
    console.log("pairs: ", pairComponents.length)
    return pairComponents
  }

  render(){
    return (
      <div className = "FirstColumn" id = "bracketColumn">
      <div className = "columnHeader" >{this.props.name}</div>
      {this.generateFirstColumnPairs()}
      </div>
    );
  }
}

export default FirstColumn;
