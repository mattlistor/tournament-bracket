import React, {Component} from 'react';
import Pair from './Pair.js';


// import '../App.css';

class Column extends Component {

// GENERATE THE PAIRS BASED ON THE AMOUNT NEEDED FOR THE COLUMN (this.props.pairAmount.forEach)

  state = {interactive:false}


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
    // let firstPairContainer = document.getElementsByClassName("firstPairContainer")
    // let columnHeight = firstPairContainer[0].clientHeight
    // this.setState({
    //     columnHeight: columnHeight
    // })

    // let i;
    // for (i = 0; i <  document.getElementsByClassName("pairContainer").length; i++) {
    //     // document.getElementsByClassName("pairContainer")[i].style.height = `${columnHeight}px`
    // }
  }

  getHeight = () => {
    return this.state.columnHeight
  }

  render(){
    console.log(this.props.height)
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
