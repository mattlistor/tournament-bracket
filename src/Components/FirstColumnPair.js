import React, {Component} from 'react';
import FirstColumnPlayer from './FirstColumnPlayer.js';

// import '../App.css';

class FirstColumnPair extends Component { 
  
  render(){
    return (
        <div className="Pair">
            <p>{this.props.topOrBottom} - {this.props.treePlacement}</p>
            <FirstColumnPlayer treeTopPlacement={this.props.treeTopPlacement} treePlacement={this.props.treePlacement} topOrBottomPair={this.props.topOrBottom} topOrBottom="top" seedObj={this.props.top} seedNum={this.props.top.seedNum} winnerClickHandle={this.props.winnerClickHandle} />
            <FirstColumnPlayer treeTopPlacement={this.props.treeTopPlacement} treePlacement={this.props.treePlacement} topOrBottomPair={this.props.topOrBottom} topOrBottom="bottom" seedObj={this.props.bottom} seedNum={this.props.bottom.seedNum} winnerClickHandle={this.props.winnerClickHandle}/>
        </div>
    );
  }
}

export default FirstColumnPair;
