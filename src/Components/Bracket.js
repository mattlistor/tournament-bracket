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
    }

    componentDidMount(){
        //grabs the height of the first column pair container (firstPairContainer)
        //changes the height of the other columns to that so that the css can generate the correct look
  
        let firstPairContainer = document.getElementsByClassName("firstPairContainer")
        let columnHeight = firstPairContainer[0].clientHeight
        this.setState({
            columnHeight: columnHeight,
        })
    }

    componentDidUpdate(){
        // console.log("turtle", this.props.bracket)
    }

    // winnerClickHandle = (e, treePlacement, seedId, topOrBottomPair) => {
    winnerClickHandle = (e, treePlacement) => {

        console.log("coorindates: ", this.getCoordinates(treePlacement))
        console.log("treePlacement: ", treePlacement)
        console.log("childIndex: ", this.getChildIndex(treePlacement))

        // when clicked
        // makes that pair not interactive anymore  
        // checks if all the pairs in that column are no longer interactive
        //      -if so, make the next column interactive 
        // takes the pair that was being clicked on as an argument 
        // find out if the pair clicked on was a top or bottom (topOrBottom)
        // find the child pair
        // if the top pair was clicked then adds it to top of child pair and vice versa
        // makes 
        // edit bracket object and rerender
        
    }

    getChildIndex = (parentIndex) => {
        return Math.floor((parentIndex - 1) / 2);
    }

    getCoordinates = (treePlacement) => {
        // getCoordinates() from treePlacement
        // get number of columns [x]
        // get number of rows in first column [y]
        // [x][y]
        // build map that looks like this:
        // 
        // [0,0] === 3   [1,0] === 1   [2,0] === 0
        // [0,1] === 4   [1,1] === 2   
        // [0,2] === 5      
        // [0,3] === 6   

        let columnAmount = JSON.parse(this.props.bracket).length
        let rowAmount = this.props.seedList.length / 2
        let treeArray = []
        let treeTopPlacement = this.props.treeSize-(this.props.seedList.length/2)
        for (let x = 0; x < columnAmount; x++){
          treeArray[x] = []
          // starts at treeTopPlacement and adds up ++ each loop
          for (let y = 0; y < rowAmount; y++){
            treeArray[x].push(treeTopPlacement + y) 
          }
          rowAmount = rowAmount / 2
          treeTopPlacement = treeTopPlacement-rowAmount
        }
        console.log(treeArray)
    
        // find where the argument 'treePlacement' is located in 'treeArray'and return those coordinates
        let columnAmount2 = JSON.parse(this.props.bracket).length
        let rowAmount2 = this.props.seedList.length / 2 
        treeTopPlacement = this.props.treeTopPlacement-rowAmount2
        for (let x = 0; x < columnAmount2; x++){
          // debugger
          // starts at treeTopPlacement and adds up ++ each loop
          for (let y = 0; y < rowAmount2; y++){
            if (treeArray[x][y] === treePlacement){
              return [x, y] 
            }
          }
          rowAmount = rowAmount / 2
          treeTopPlacement = treeTopPlacement-rowAmount2
        }
    }

    topTreePlacementsPerColumn = () => {
        let bracketObj = JSON.parse(this.props.bracket)
        //end goal: [3, 1, 0]
        let topTree = this.props.treeSize
        let topTreePlacementsPerColumn = bracketObj.map((pairs, index) => {
            topTree = topTree-(pairs.length)
            return topTree
        })
        // topTreePlacementsPerColumn.shift() //remove first column
        return topTreePlacementsPerColumn
    }

    generateColumnComponents = () => {
        let bracketObj = JSON.parse(this.props.bracket)
        // let firstColumnTopTreePlacement = getChildIndex
        let firstColumn = 0
        let semiFinalColumn = bracketObj.length-2 //index of second to last column
        let finalColumn = bracketObj.length-1 //index of last column 

        let columnComponents = bracketObj.map((pairs, index) => {
            if (index === semiFinalColumn){
                return <Column treeTopPlacement={this.topTreePlacementsPerColumn()[index]} height={this.state.columnHeight} winnerClickHandle={this.winnerClickHandle} pairAmount={pairs.length} name="Semifinals" key={index} columnNumber={index}/>
            }
            else if(index === finalColumn){
                return <Column treeTopPlacement={this.topTreePlacementsPerColumn()[index]} height={this.state.columnHeight} winnerClickHandle={this.winnerClickHandle} pairAmount={pairs.length} name="Finals" key={index} columnNumber={index}/>
            }
            else if(index === firstColumn){
                // return <FirstColumn name="Round 1" winnerClickHandle={this.winnerClickHandle} pairAmount={pairs.length} playerAmount={this.state.seedListFirstColumn.length} seedList={this.state.seedListFirstColumn}/>
            }
            else{
                return <Column treeTopPlacement={this.topTreePlacementsPerColumn()[index]} height={this.state.columnHeight} winnerClickHandle={this.winnerClickHandle} pairAmount={pairs.length} name={`Round ${index+2}`} key={index} columnNumber={index}/>
            }
        })
        columnComponents.shift() // remove the first column 
        // console.log(columnComponents)
        return columnComponents
    }

    render(){
        // console.log(this.topTreePlacementsPerColumn())
        // console.log(this.props.bracket)
        return ( 
            <div className="Bracket">
                <FirstColumn treeTopPlacement={this.props.treeSize-(this.props.seedList.length/2)} name="Round 1" winnerClickHandle={this.winnerClickHandle} pairAmount={Math.ceil(this.state.seedListFirstColumn.length/2)} playerAmount={this.state.seedListFirstColumn.length} seedList={this.state.seedListFirstColumn} bracket={this.props.bracket}/>
                {this.generateColumnComponents()}
                {/* <Column height={this.state.columnHeight} pairAmount={1} name="Finals" /> */}
                {/* <FinalColumn name="Finals" height={this.state.height} winnerClickHandle={this.winnerClickHandle} pairAmount={1} playerAmount={2} seedList={this.state.seedListFinalColumn}/> */}
            </div>
        );
  }
}

export default Bracket;
