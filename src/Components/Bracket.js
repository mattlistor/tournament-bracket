import React, {Component} from 'react';
import FirstColumn from './FirstColumn.js';
import Column from './Column.js';
import FinalColumn from './FinalColumn.js';


// import '../App.css';

class Bracket extends Component {
    state = {
        seedListFirstColumn: this.props.seedList, //need to narrow down by that particular bracket id
        seedListFinalColumn: ["", ""],
        pairAmountPerColumn: []
    }

    winnerClickHandle = (e, name, num) => {
        console.log("ayooo", e.target, name, num)
    }

    pairAmountPerColumn = () => {
        
        // figure out amount of columns needed excluding first and final round  
        let pairAmount = this.state.seedListFirstColumn.length / 4
        let pairAmountPerColumn = []
        while (pairAmount !== 1) {
            pairAmountPerColumn.push(pairAmount)
            pairAmount = pairAmount / 2 
        }

        // this.setState({
        //     pairAmountPerColumn: pairAmountPerColumn
        // })

        console.log(pairAmountPerColumn)
       
        return pairAmountPerColumn
    }

    generateColumnComponents = () => {
        return this.pairAmountPerColumn().map((pairAmount, index) => <Column pairAmount={pairAmount} name="Round #" key={index} />)
    }

    render(){
       this.pairAmountPerColumn()
        return ( 
            <div className="Bracket">
            <FirstColumn name="Round 1" winnerClickHandle={this.winnerClickHandle} pairAmount={Math.ceil(this.state.seedListFirstColumn.length/2)} playerAmount={this.state.seedListFirstColumn.length} seedList={this.state.seedListFirstColumn}/>
            {this.generateColumnComponents()}
            <FinalColumn name="Finals" winnerClickHandle={this.winnerClickHandle} pairAmount={1} playerAmount={2} seedList={this.state.seedListFinalColumn}/>
            </div>
        );
  }
}

export default Bracket;
