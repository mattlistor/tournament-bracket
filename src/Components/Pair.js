import React, {Component} from 'react';
import Player from './Player.js';

// import '../App.css';

class Pair extends Component { 
  
  render(){
    return (
        <div className="Pair">
            <p>{this.props.topOrBottom} - {this.props.treePlacement}</p>
            <Player treePlacement={this.props.treePlacement} interactive={this.props.interactive} topOrBottom="top" name={this.props.top} seedNum="#" winnerClickHandle={this.props.winnerClickHandle} />
            <Player treePlacement={this.props.treePlacement} interactive={this.props.interactive} topOrBottom="bottom" name={this.props.bottom} seedNum="#" winnerClickHandle={this.props.winnerClickHandle}/>
        </div>
    );
  }
}

export default Pair;
