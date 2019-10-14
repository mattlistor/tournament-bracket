import React, {Component} from 'react';

// import '../App.css';

class Player extends Component { 
  
  mouseDownHandle = (e) => {
      console.log("Winner! ", e.target)
    //   if(e.target.children[1]){
    //       e.target.children[1].innerText="winner"
    //   }
    //   else{
    //     e.target.innerText="winner"
    //   }
  }

  mouseUpHandle = (e) => {
    console.log("Mouse up! ", e.target)
    // if(e.target.children[1]){
    //     e.target.children[1].innerText="turtle"
    // }
    // else{
    //   e.target.innerText="winner"
    // }
}

  render(){
    return (
        <div className="Player" id={this.props.topOrBottom} onClick={(e) => this.props.winnerClickHandle(e, this.props.name, this.props.num)}>
            <div className="bracketSeedNum">{this.props.num}</div>
            <div className="bracketSeedName">{this.props.name.substring(0, 18)}</div>
        </div>
    );
  }
}

export default Player;
