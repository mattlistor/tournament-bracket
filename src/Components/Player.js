import React, {Component} from 'react';

// import '../App.css';

class Player extends Component { 

  render(){
    let x = this.props.coordinates[0]
    let y = this.props.coordinates[1]
    // console.log(this.props.coordinates)
    // this.props.bracket[this.props.coordinates[0]][this.props.coordinates[1]][this.props.topOrBottom]
    console.log("Here! ", this.props.bracket[x][y][this.props.topOrBottom])
    return (
      <>  
      {/* decides if the player should be gold or not */}
      {(this.props.bracket[x][y][this.props.topOrBottom] !== undefined && this.props.bracket[x][y][this.props.topOrBottom].gold === true) ? 
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

export default Player;
