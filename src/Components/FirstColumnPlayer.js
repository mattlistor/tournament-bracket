import React, {Component} from 'react';

// import '../App.css';

class FirstColumnPlayer extends Component { 

  render(){ 
    return (
      <>
      {/* decides if the player should be gold or not */}
      {this.props.bracket[this.props.coordinates[0]][this.props.coordinates[1]][this.props.topOrBottom].gold ? 
        <div className="PlayerGold" id={this.props.topOrBottom} onClick={(e) => this.props.winnerClickHandle(e, this.props.treePlacement, this.props.topOrBottomPair, this.props.topOrBottom)}>
            <div className="bracketSeedNum">{this.props.seedObj.seed_num}</div>
            <div className="bracketSeedName">{this.props.seedObj.name.substring(0, 18)}</div>
        </div>
      : 
         <div className="Player" id={this.props.topOrBottom} onClick={(e) => this.props.winnerClickHandle(e, this.props.treePlacement, this.props.topOrBottomPair, this.props.topOrBottom)}>
            <div className="bracketSeedNum">{this.props.seedObj.seed_num}</div>
            <div className="bracketSeedName">{this.props.seedObj.name.substring(0, 18)}</div>
        </div>
      }
      </>

    );
  }
}

export default FirstColumnPlayer;
