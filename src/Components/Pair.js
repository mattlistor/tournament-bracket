import React, {Component} from 'react';
import Player from './Player.js';

// import '../App.css';

class Pair extends Component { 
  
  render(){
    return (
        <div className="Pair">
            <Player interactive={this.props.interactive} topOrBottom="top" name={this.props.top} seedNum="#" winnerClickHandle={this.props.winnerClickHandle} />
            <Player interactive={this.props.interactive} topOrBottom="bottom" name={this.props.bottom} seedNum="#" winnerClickHandle={this.props.winnerClickHandle}/>
        </div>
    );
  }
}

export default Pair;
