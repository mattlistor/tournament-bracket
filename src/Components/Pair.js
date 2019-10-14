import React, {Component} from 'react';
import Player from './Player.js';

// import '../App.css';

class Pair extends Component { 
  
  render(){
    return (
        <div className="Pair">
            <Player topOrBottom="top" name={this.props.top.name} seedNum={this.props.top.seed_num} winnerClickHandle={this.props.winnerClickHandle} />
            <Player topOrBottom="bottom" name={this.props.bottom.name} seedNum={this.props.bottom.seed_num} winnerClickHandle={this.props.winnerClickHandle}/>
        </div>
    );
  }
}

export default Pair;
