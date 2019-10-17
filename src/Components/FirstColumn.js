import React, {Component} from 'react';
import FirstColumnPair from './FirstColumnPair.js';


// import '../App.css';

class FirstColumn extends Component {
  
  getCoordinates = (treePlacement) => {
    // getCoordinates() from treePlacement
    // get number of columns [x]
    // get number of rows in first column [y]
    // [x][y]
    // build map that looks like this:
    // 
    // [0,0] === 3   [1,0] === 1   [2,0] === 0
    // [0,1] === 4   [1,1] === 2   
    // [0,2] === 5      
    // [0,3] === 6   
    
    let columnAmount = JSON.parse(this.props.bracket).length
    let rowAmount = this.props.seedList.length / 2
    let treeArray = []
    let treeTopPlacement = this.props.treeTopPlacement
    for (let x = 0; x < columnAmount; x++){
      treeArray[x] = []
      // starts at 3 and adds up ++ each loop
      for (let y = 0; y < rowAmount; y++){
        treeArray[x].push(treeTopPlacement + y) 
      }
      rowAmount = rowAmount / 2
      treeTopPlacement = treeTopPlacement-rowAmount
    }

    // find where the argument 'treePlacement' is located in 'treeArray'and return those coordinates
    let columnAmount2 = JSON.parse(this.props.bracket).length
    let rowAmount2 = this.props.seedList.length / 2 
    treeTopPlacement = this.props.treeTopPlacement-rowAmount2
    for (let x = 0; x < columnAmount2; x++){
      // debugger
      // starts at 3 and adds up ++ each loop
      for (let y = 0; y < rowAmount2; y++){
        if (treeArray[x][y] === treePlacement){
          return [x, y] 
        }
      }
      rowAmount = rowAmount / 2
      treeTopPlacement = treeTopPlacement-rowAmount2
    }
  }
  
  generateFirstColumnPairs = () => {
    let pairComponents = []
    let i = 0
    let key = 1
    let top = true
    let x = 0 
    while (i < this.props.pairAmount * 2) {
      (top ?
      pairComponents = [...pairComponents, <FirstColumnPair treeTopPlacement={this.props.treeTopPlacement} treePlacement={this.props.treeTopPlacement+x} coordinates={0, 0} topOrBottom="top" key={key} winnerClickHandle={this.props.winnerClickHandle} top={this.props.seedList[i]} bottom={this.props.seedList[i+1]} seedList={this.props.seedList}/>]
      :
      pairComponents = [...pairComponents, <FirstColumnPair treeTopPlacement={this.props.treeTopPlacement} treePlacement={this.props.treeTopPlacement+x} coordinates={0, 0} topOrBottom="bottom" key={key} winnerClickHandle={this.props.winnerClickHandle} top={this.props.seedList[i]} bottom={this.props.seedList[i+1]} seedList={this.props.seedList}/>]
      )
      key = key + 1;
      i = i + 2;
      x = x + 1
      top = !top
    }
    return pairComponents
  }

  render(){
    // console.log("props: ", JSON.parse(this.props.bracket)[0].length)
    // console.log("props: ", this.props.seedList.length/2)
    // console.log(this.getCoordinates(0)) // should be [0, 0]
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
