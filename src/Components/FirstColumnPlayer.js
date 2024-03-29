import React, {Component} from 'react';

// import '../App.css';

class FirstColumnPlayer extends Component { 

  generatePlayer = () => {
    // decides if the player should be gold or locked or neither 
    if (this.props.bracket[this.props.coordinates[0]][this.props.coordinates[1]][this.props.topOrBottom].gold){
      return(
        <div id="player" className="pulse">
          <div className="PlayerGold" id={this.props.topOrBottom}>
            <div className="bracketSeedNum">{this.props.seedObj.seed_num}</div>
            <div className="bracketSeedName">{this.props.seedObj.name.substring(0, 14)}</div>
          </div>
        </div>
      )
    }
    else if (this.props.locked){
      return(
          <div className="PlayerLocked" id={this.props.topOrBottom}>
            <div className="bracketSeedNum">{this.props.seedObj.seed_num}</div>
            <div className="bracketSeedName">{this.props.seedObj.name.substring(0, 14)}</div>
          </div>
      )
    }
    else {
      return(
          <div className="Player" id={this.props.topOrBottom} onClick={(e) => this.props.winnerClickHandle(e, this.props.treePlacement, this.props.topOrBottomPair, this.props.topOrBottom)}>
            <div className="bracketSeedNum">{this.props.seedObj.seed_num}</div>
            <div className="bracketSeedName">{this.props.seedObj.name.substring(0, 14)}</div>
          </div>
      )
    }
  }

  render(){ 
    return (
      <>
      {this.generatePlayer()}
      </>

    );
  }
}

export default FirstColumnPlayer;
