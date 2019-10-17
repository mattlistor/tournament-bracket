import React, {Component} from 'react';

// import '../App.css';

class Player extends Component { 

  render(){
    return (
      <>  
      {/* {this.props.interactive ?  */}
      {true ? 
            <div className="Player" id={this.props.topOrBottom} onClick={(e) => this.props.winnerClickHandle(e, this.props.treePlacement, this.props.topOrBottomPair, this.props.topOrBottom)}>
                <div className="bracketSeedNum">{this.props.seedObj.seed_num}</div>
                <div className="bracketSeedName">{this.props.seedObj.name.substring(0, 18)}</div>
                {/* <div className="bracketSeedNum">{}</div>
                <div className="bracketSeedName">{}</div> */}
            </div>
        : 
            <div className="playerNotInteractive" id={this.props.topOrBottom}>
              <div className="bracketSeedNum">{this.props.seedObj.seed_num}</div>
              <div className="bracketSeedName">{this.props.seedObj.name.substring(0, 18)}</div>
              {/* <div className="bracketSeedNum">{}</div>
              <div className="bracketSeedName">{}</div> */}
            </div>
      }

        </>
    );
  }
}

export default Player;
