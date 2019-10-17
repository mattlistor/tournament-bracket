import React, {Component} from 'react';
import Player from './Player.js';

// import '../App.css';

class Pair extends Component { 
  
  render(){
    return (
        <div className="Pair">
            <p>{this.props.topOrBottom} - {this.props.treePlacement}</p>
            <Player treePlacement={this.props.treePlacement} topOrBottomPair={this.props.topOrBottom} interactive={this.props.interactive} topOrBottom="top" seedObj={this.props.top} seedNum="#" winnerClickHandle={this.props.winnerClickHandle} />
            <Player treePlacement={this.props.treePlacement} topOrBottomPair={this.props.topOrBottom} interactive={this.props.interactive} topOrBottom="bottom" seedObj={this.props.bottom} seedNum="#" winnerClickHandle={this.props.winnerClickHandle}/>
        </div>
    );
  }
}

export default Pair;
