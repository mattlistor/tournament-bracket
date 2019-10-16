import React, {Component} from 'react';
import FirstColumnPlayer from './FirstColumnPlayer.js';

// import '../App.css';

class FirstColumnPair extends Component { 
  
  render(){
    return (
        <div className="Pair">
            <p>{this.props.topOrBottom}</p>
            <FirstColumnPlayer topOrBottom="top" name={this.props.top.name} seedNum={this.props.top.seed_num} winnerClickHandle={this.props.winnerClickHandle} />
            <FirstColumnPlayer topOrBottom="bottom" name={this.props.bottom.name} seedNum={this.props.bottom.seed_num} winnerClickHandle={this.props.winnerClickHandle}/>
        </div>
    );
  }
}

export default FirstColumnPair;
