import React, {Component} from 'react';
import FirstColumn from './FirstColumn.js';
import FinalColumn from './FinalColumn.js';


// import '../App.css';

class Bracket extends Component {
    state = {
        seedListFirstColumn: this.props.seedList,
        seedListFinalColumn: ["", ""]
        //narrow down by that particular bracket id
    }

    winnerClickHandle = (e, name, num) => {
        console.log("ayooo", e.target, name, num)
    }
  

    render(){
        return ( 
            <div className="Bracket">
            <FirstColumn name="Round 1" winnerClickHandle={this.winnerClickHandle} pairAmount={Math.ceil(this.state.seedListFirstColumn.length/2)} playerAmount={this.state.seedListFirstColumn.length} seedList={this.state.seedListFirstColumn}/>
            {/* in-between columns component array  */}
            {/* <FinalColumn name="Finals" winnerClickHandle={this.winnerClickHandle} pairAmount={1} playerAmount={2} seedList={this.state.seedListFinalColumn}/> */}
            </div>
        );
  }
}

export default Bracket;
