import React, {Component} from 'react';
import Pair from './Pair.js';


// import '../App.css';

class Column extends Component {
          //interactivty starts out as 'locked'
  state = {
      interactive:false,

    }


  generateColumnPairs = () => {
    let pairComponents = []
    let i = 0
    while (i < this.props.pairAmount) {
        pairComponents = [...pairComponents, <Pair interactive={this.state.interactive} key={i} winnerClickHandle={this.props.winnerClickHandle} top="top" bottom="bottom" seedList={this.props.seedList}/>]
        i = i + 1;
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
      <div className = "Column" id = "bracketColumn" height = {`${this.props.height}`}>
        <div className = "columnHeader" >{this.props.name}</div>
        <div className = "pairContainer" style={style}>
            {this.generateColumnPairs()}
        </div>
      </div>
    );
  }
}

export default Column;
