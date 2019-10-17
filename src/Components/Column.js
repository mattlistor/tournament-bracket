import React, {Component} from 'react';
import Pair from './Pair.js';


// import '../App.css';

class Column extends Component {
      //interactivty starts out as 'locked'
  state = {
      interactive:false,
      interactivePairList: []
    }


  generateColumnPairs = () => {
    let pairComponents = []
    let i = 0
    let top = true 


    while (i < this.props.pairAmount) {
        (top ? 
        pairComponents = [...pairComponents, <Pair treePlacement={this.props.treeTopPlacement+i} topOrBottom="top" interactive={this.state.interactive} key={i} winnerClickHandle={this.props.winnerClickHandle} top="top" bottom="bottom" seedList={this.props.seedList}/>]
        :
        pairComponents = [...pairComponents, <Pair treePlacement={this.props.treeTopPlacement+i} topOrBottom="bottom" interactive={this.state.interactive} key={i} winnerClickHandle={this.props.winnerClickHandle} top="top" bottom="bottom" seedList={this.props.seedList}/>]
        )
        i = i + 1;
        top = !top
    }
    return pairComponents
  }

  componentDidMount() {

  }

  getHeight = () => {
    return this.state.columnHeight
  }

  render(){
    const style = {
        height: this.props.height + 'px'
      };
    return (
      <div className = "Column" id = "bracketColumn">
        <div className = "columnHeader" >{this.props.name}</div>
        <div className = "pairContainer" style={style}>
            {this.generateColumnPairs()}
        </div>
      </div>
    );
  }
}

export default Column;
