import React, {Component} from 'react';
import FirstColumnPair from './FirstColumnPair.js';


// import '../App.css';

class FirstColumn extends Component {
  generateFirstColumnPairs = () => {
    let pairComponents = []
    let i = 0
    let key = 1
    while (i < this.props.pairAmount * 2) {
      pairComponents = [...pairComponents, <FirstColumnPair key={key} winnerClickHandle={this.props.winnerClickHandle} top={this.props.seedList[i]} bottom={this.props.seedList[i+1]} seedList={this.props.seedList}/>]
      key = key + 1;
      i = i + 2;
    }
    return pairComponents
  }

  render(){
    return (
      <div className = "FirstColumn" id = "bracketColumn">
      <div className = "columnHeader" >{this.props.name}</div>
      <div className = "firstPairContainer" id = "firstPairContainer">
            {this.generateFirstColumnPairs()}
      </div>
      </div>
    );
  }
}

export default FirstColumn;
