import React, {Component} from 'react';

// import '../App.css';

class Player extends Component { 

  render(){
    return (
      <>  
      {/* {this.props.interactive ?  */}
      {true ? 
            <div className="Player" id={this.props.topOrBottom} onClick={(e) => this.props.winnerClickHandle(e, this.props.treePlacement)}>
                {/* <div className="bracketSeedNum">{this.props.seedNum}</div>
                <div className="bracketSeedName">{this.props.name.substring(0, 18)}</div> */}
                <div className="bracketSeedNum">{}</div>
                <div className="bracketSeedName">{}</div>
            </div>
        : 
            <div className="playerNotInteractive" id={this.props.topOrBottom}>
              {/* <div className="bracketSeedNum">{this.props.seedNum}</div>
              <div className="bracketSeedName">{this.props.name.substring(0, 18)}</div> */}
              <div className="bracketSeedNum">{}</div>
              <div className="bracketSeedName">{}</div>
            </div>
      }

        </>
    );
  }
}

export default Player;
