import React, {Component} from 'react';
import FirstColumn from './FirstColumn.js';
import FinalColumn from './FinalColumn.js';


// import '../App.css';

class Bracket extends Component {
    state = {
        seedListFirstColumn: this.props.seedList, //need to narrow down by that particular bracket id
        seedListFinalColumn: ["", ""],
        columnAmount: Math.ceil(this.state.seedList.length/2) - 2 //excludes first and last column
    }

    winnerClickHandle = (e, name, num) => {
        console.log("ayooo", e.target, name, num)
    }

    generateColumns = () => {
        let amountOfColumns = this.state.columnAmount-2
        {Math.ceil(this.state.seedListFirstColumn.length/2)}
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
