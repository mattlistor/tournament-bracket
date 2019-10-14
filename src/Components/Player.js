import React, {Component} from 'react';

// import '../App.css';

class Player extends Component { 

  render(){
    console.log("player render: ", this.props.name, this.props.seedNum)
    return (
        <div className="Player" id={this.props.topOrBottom} onClick={(e) => this.props.winnerClickHandle(e, this.props.name, this.props.num)}>
            <div className="bracketSeedNum">{this.props.seedNum}</div>
            <div className="bracketSeedName">{this.props.name.substring(0, 18)}</div>
        </div>
    );
  }
}

export default Player;
