import React, {Component} from 'react';
import Player from './Player.js';

// import '../App.css';

class Pair extends Component { 
  
  render(){
    return (
        <div className="Pair">
            <Player topOrBottom="top" name={this.props.top} num={this.props.topNum} winnerClickHandle={this.props.winnerClickHandle} />
            <Player topOrBottom="bottom" name={this.props.bottom} num={this.props.bottomNum} winnerClickHandle={this.props.winnerClickHandle}/>
        </div>
    );
  }
}

export default Pair;
