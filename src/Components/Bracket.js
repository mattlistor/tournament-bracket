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
        bracket: JSON.parse(this.props.bracket),
        bracketId: this.props.bracketId
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
        // console.log("turtle")
    }

    // winnerClickHandle = (e, treePlacement, seedId, topOrBottomPair) => {
    winnerClickHandle = (e, treePlacement, topOrBottomPair, topOrBottomPlayer) => {

        // console.log("coorindates: ", this.getCoordinates(treePlacement))
        // console.log("treePlacement: ", treePlacement)
        // console.log("childIndex: ", this.getChildIndex(treePlacement))
        // console.log("topOrBottom pair: ", topOrBottomPair)
        // console.log("topOrBottom player: ", topOrBottomPlayer)

        let opposite = "top" 
        if (topOrBottomPlayer === "top"){
            opposite = "bottom"
        }
        if (topOrBottomPlayer === "bottom"){
            opposite = "top"
        }

        let x = this.getCoordinates(treePlacement)[0]
        let y = this.getCoordinates(treePlacement)[1]
        if(treePlacement === 0) {
            // only does an action if the user clicks on a player that isnt blank & has a partner
            if(this.state.bracket[x][y][topOrBottomPlayer]){
                if(this.state.bracket[x][y][opposite]){
                    alert(`winner! ${this.state.bracket[x][y][topOrBottomPlayer].name}` )
                }
            }
        }
        else {
            // console.log("has a partner? ", this.state.bracket[x][y][opposite])

            // only does an action if the user clicks on a player that isnt blank & has a partner
            if(this.state.bracket[x][y][topOrBottomPlayer]){
                if(this.state.bracket[x][y][opposite]){
                    // console.log("================made it!")
                    let x2 = this.getCoordinates(this.getChildIndex(treePlacement))[0]
                    let y2 = this.getCoordinates(this.getChildIndex(treePlacement))[1]
                    // console.log("seed you clicked on: ", this.state.bracket[x][y][opposite])
                    // console.log("needs to go to: ", this.getCoordinates(this.getChildIndex(treePlacement)), this.getChildIndex(treePlacement))
                    // console.log("top or bottom player in child(new) pair: ", topOrBottomPair)

                    // PUTS THE SELECTED INTO THE CHILD IN THE BRACKET
                    // WHERE THE MAGIC MAPPENS 
                    let updatedBracket = this.state.bracket
                    updatedBracket[x2][y2][topOrBottomPair] = this.state.bracket[x][y][topOrBottomPlayer]

                    // this.setState causes a rerender of <Bracket/>, causing it to update on the screen
                    this.setState({
                        bracket: updatedBracket
                    })
                }
                }
            }

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
        
        // let bracket = {1: this.props.seedList.length / 2}
        // let pairAmount = this.props.seedList.length / 4
        // let round = 2 
        // let pairAmountPerColumn = [[]]
        // while (pairAmount !== 1) {
        //     pairAmountPerColumn.push(pairAmount)
        //     bracket[round] = pairAmount
        //     pairAmount = pairAmount / 2
        //     round = round + 1
        // }
        // bracket[round] = 1
  
        // let bracketArray = Object.keys(bracket).map(i => bracket[i])
        // let treePlacementSize = bracketArray.reduce((a, b) => a + b, 0)

        // let bracketFinal = this.state.bracket
        // bracketFinal["treePlacementSize"] = treePlacementSize

        //fetch to PATCH request updated bracket
        //  console.log(fetch(`http://localhost:3000/brackets/${this.state.bracketId}`, {
        //     method: 'GET', // or 'PUT'
        //     // body: JSON.stringify(
        //     //   {
        //     //   bracket: {
        //     //     bracket: JSON.stringify(bracketFinal),
        //     //     user_id: 1
        //     //     }
        //     //   }
        //     // ), 
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   }))
        console.log("end click handle")
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
                return <Column bracket={this.state.bracket} getCoordinates={this.getCoordinates} treeTopPlacement={this.topTreePlacementsPerColumn()[index]} height={this.state.columnHeight} winnerClickHandle={this.winnerClickHandle} pairAmount={pairs.length} name="Semifinals" key={index} columnNumber={index}/>
            }
            else if(index === finalColumn){
                return <Column bracket={this.state.bracket} getCoordinates={this.getCoordinates} treeTopPlacement={this.topTreePlacementsPerColumn()[index]} height={this.state.columnHeight} winnerClickHandle={this.winnerClickHandle} pairAmount={pairs.length} name="Finals" key={index} columnNumber={index}/>
            }
            else if(index === firstColumn){
                // return <FirstColumn name="Round 1" winnerClickHandle={this.winnerClickHandle} pairAmount={pairs.length} playerAmount={this.state.seedListFirstColumn.length} seedList={this.state.seedListFirstColumn}/>
            }
            else{
                return <Column bracket={this.state.bracket} getCoordinates={this.getCoordinates} treeTopPlacement={this.topTreePlacementsPerColumn()[index]} height={this.state.columnHeight} winnerClickHandle={this.winnerClickHandle} pairAmount={pairs.length} name={`Round ${index+2}`} key={index} columnNumber={index}/>
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
                <FirstColumn getCoordinates={this.getCoordinates} treeTopPlacement={this.props.treeSize-(this.props.seedList.length/2)} name="Round 1" winnerClickHandle={this.winnerClickHandle} pairAmount={Math.ceil(this.state.seedListFirstColumn.length/2)} playerAmount={this.state.seedListFirstColumn.length} seedList={this.state.seedListFirstColumn} bracket={this.state.bracket}/>
                {this.generateColumnComponents()}
                {/* <Column height={this.state.columnHeight} pairAmount={1} name="Finals" /> */}
                {/* <FinalColumn name="Finals" height={this.state.height} winnerClickHandle={this.winnerClickHandle} pairAmount={1} playerAmount={2} seedList={this.state.seedListFinalColumn}/> */}
            </div>
        );
  }
}

export default Bracket;
