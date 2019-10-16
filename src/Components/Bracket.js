import React, {Component} from 'react';
import FirstColumn from './FirstColumn.js';
import Column from './Column.js';
// import FinalColumn from './FinalColumn.js';


// import '../App.css';

class Bracket extends Component {
    state = {
        seedListFirstColumn: this.props.seedList, //need to narrow down by that particular bracket id
        // seedListFinalColumn: ["", ""],
        // pairAmountPerColumn: [],
        bracket: this.props.bracket
    }

    componentDidMount(){
        //grabs the height of the first column pair container (firstPairContainer)
        //changes the height of the other columns to that so that the css can generate the correct look
        let firstPairContainer = document.getElementsByClassName("firstPairContainer")
        let columnHeight = firstPairContainer[0].clientHeight
        this.setState({
            columnHeight: columnHeight,
            bracket: this.props.bracket
        })
    }

    componentDidUpdate(){
        // console.log("turtle", this.props.bracket)
    }

    winnerClickHandle = (e, name, num) => {
        console.log("ayooo", e.target, name)
        console.log(this.props.bracket)

        // when clicked
        // makes that pair not interactive anymore  
        // checks if all the pairs in that column are no longer interactive
        //      -if so, make the next column interactive 
        // takes the pair that was being clicked on as an argument 
        // find out if the pair clicked on was a top or bottom (topOrBottom)
        // find the child pair
        // if the top pair was clicked then adds it to top of child pair and vice versa
        // makes 
    }

    pairAmountPerColumn = () => {
        // figure out amount of columns needed excluding first and final round  
        let pairAmount = this.state.seedListFirstColumn.length / 4
        let pairAmountPerColumn = []
        while (pairAmount !== 1) {
            pairAmountPerColumn.push(pairAmount)
            pairAmount = pairAmount / 2 
        }
       
        return pairAmountPerColumn
    }

    generateColumnComponents = () => {
        let semiFinalColumn = this.pairAmountPerColumn().length+1
        return this.pairAmountPerColumn().map((pairAmount, index) => {
                if (semiFinalColumn === index + 2){
                    return <Column height={this.state.columnHeight} pairAmount={pairAmount} name="Semifinals" key={index} />
                }
                else{
                     return <Column height={this.state.columnHeight} pairAmount={pairAmount} name={`Round ${index+2}`} key={index} />
                }
            }
        )
    }

    columnAmount = () => {
        return Object.keys(this.props.bracket).length
    }

    render(){
        return ( 
            <div className="Bracket">
                <FirstColumn name="Round 1" winnerClickHandle={this.winnerClickHandle} pairAmount={Math.ceil(this.state.seedListFirstColumn.length/2)} playerAmount={this.state.seedListFirstColumn.length} seedList={this.state.seedListFirstColumn}/>
                {this.generateColumnComponents()}
                <Column height={this.state.columnHeight} pairAmount={1} name="Finals" />
                {/* <FinalColumn name="Finals" height={this.state.height} winnerClickHandle={this.winnerClickHandle} pairAmount={1} playerAmount={2} seedList={this.state.seedListFinalColumn}/> */}
            </div>
        );
  }
}

export default Bracket;
