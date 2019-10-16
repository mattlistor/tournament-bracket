import React, {Component} from 'react';
import Sidebar from './Components/Sidebar.js';
import Bracket from './Components/Bracket.js';

import './App.css';
class App extends Component {
  state = {
    loggedIn: false,
    username: "",
    showUsername: false,
    usernameToShow: "",
    addSeeds: true,
    currentSeed: "",
    seedList: [],
    editingSeed: false,
    shuffle: false,
    showBracket: false,
    bracketSeedList: []
  }

  goTologIn = (e) => {
    e.preventDefault()
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }

  usernameChange = (e) => {
    this.setState({
      // showUsername: false,
      username: e.target.value,
      editingSeed: false
    })
  }

  submitLogin = (e) => {
    e.preventDefault()

    // if (this.state.username !== "" && !this.state.showUsername){
    //   this.setState({
    //     showUsername: !this.state.showUsername,
    //     usernameToShow: this.state.username
    //   })
    // }
    // if (this.state.usernameToShow !== "" && this.state.showUsername){
    //   this.setState({
    //     usernameToShow: this.state.username
    //   })  
    // }
    // if (this.state.usernameToShow === this.state.username){
    //   // this.setState({
    //   //   loggedIn: false
    //   // }) 
    // }
    
    // fetch to create a new user
  }

  checkbox = (e) => {
    this.setState({
      shuffle: e.target.checked,
      showBracket: false
    })
    // this.generate()
  }

  currentSeedChange = (e) => {
    this.setState({
      currentSeed: e.target.value,
      editingSeed: false
    })
  }

  submitSeed = (e) => {
    e.preventDefault()

    if (this.state.currentSeed !== "") {
      this.setState({
        seedList: [...this.state.seedList, this.state.currentSeed],
        username: "",
        editingSeed: false,
        currentSeed: "",
        showBracket: false
      })

      document.getElementById("seedInput").value = ""
    } 

    document.getElementById("seedInput").focus()
  }

  deleteSeed = (index) => {
    console.log("delete seed", index)
    let newArray = [...this.state.seedList]
    newArray.splice(index , 1)
    console.log(newArray)

    this.setState({
      seedList: newArray,
      showBracket: false
    })

  }

  editSeed = (index) => {
    let newArray = [...this.state.seedList]
    this.setState({
      seedList: newArray,
      editingSeed: true,
      editSeedIndex: index
    })
  }

  submitSeedEdit = (e, newSeedName) => {
    e.preventDefault()
    console.log("Submit seed edit -- ", newSeedName)
    
    let newArray = [...this.state.seedList]
    newArray[this.state.editSeedIndex] = newSeedName
    
    this.setState({
      editingSeed: false,
      seedList: newArray
    })

    //FIX BUG WHERE YOU COICK EDIT TWICE AND IT MAEKS IT BLANK

    // fetch to patch seed
}

  componentDidUpdate(){
    //puts focus on new edit form and makes the initial value of the input field the current seed name
    if (document.getElementById("editSeedForm") !== null){
      document.getElementById("editSeedForm").focus()
      document.getElementById("editSeedForm").value = this.state.seedList[this.state.editSeedIndex]
    } 
  }

  generate = () => {
    let seedList = this.state.seedList
    
    this.setState({
      showBracket: false
    })

    let allowedSeedAmounts = [4, 8, 16, 32, 64]
    if(allowedSeedAmounts.includes(seedList.length)){

      let data = this.state.seedList.map((seed, index) => {
        return {
          name: seed,
          seed_num: index + 1,
          bracket_id: 1
        }
      })
        
      //creates all seed in one bundle, not one-by-one
      fetch("http://localhost:3000/seeds", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({data}), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((res) => {
          //SHUFFLE FUNCTION IS CURRENTLY NOT WORKING
          //===========================================
          // var shuffledSeedList = this.shuffle(res)
          // let bracketSeedList
          // checks to shuffle, then creates a send-off list of Seed objects 
        //   if (this.state.shuffle) {
        //     this.setState({
        //       showBracket: true, 
        //       bracketSeedList: shuffledSeedList
        //     })
        //     bracketSeedList = shuffledSeedList
        //   }
        // if (!this.state.shuffle) {
        //   this.setState({
        //     showBracket: true, 
        //     bracketSeedList: res
        //   })
        //   bracketSeedList = res
        // }
          this.setState({
            showBracket: true, 
            bracketSeedList: res
          })
        return res
      })
      .then((bracketSeedList) => {
        // generate bracket object
        let bracket = {
          1: seedList.length / 2,
        }

        let pairAmount = seedList.length / 4
        let round = 2 
        let pairAmountPerColumn = [[]]
        while (pairAmount !== 1) {
            pairAmountPerColumn.push(pairAmount)
            bracket[round] = pairAmount
            pairAmount = pairAmount / 2
            round = round + 1
        }
        bracket[round] = 1

        let bracketArray = Object.keys(bracket).map(i => bracket[i])
        
        let bracketFinal =  []
        let seedListIndex = 0

        bracketArray.forEach((columnPairAmount, index) => {
          var i;
          bracketFinal[index] = []
          for (i = 0; i < columnPairAmount; i++) {
            //pushes a PAIR to the index (column) of the array (bracket)
            bracketFinal[index].push([bracketSeedList[seedListIndex], bracketSeedList[seedListIndex+1]])
            // console.log("column:", index)
            seedListIndex = seedListIndex + 2
          }
        })

        this.setState({
          bracket: bracketFinal
        })
        
        // fetch to make a new bracket object
      })
    }
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array 
  }
  
  render(){
    return (
      <div>
        {this.state.addSeeds ? 
        <Sidebar seedList={this.state.seedList} generate={this.generate} submitSeedEdit={this.submitSeedEdit} editingSeed={this.state.editingSeed} editSeedIndex={this.state.editSeedIndex} checkbox={this.checkbox} currentSeedChange={this.currentSeedChange} submitSeed={this.submitSeed} editSeed={this.editSeed} deleteSeed={this.deleteSeed}/>  
        :
        <div className="main">
          <video autoPlay muted loop id="myVideo" src="https://ak6.picdn.net/shutterstock/videos/1011043136/preview/stock-footage-close-up-hand-of-people-playing-games-with-friend-people-play-game-together-at-home-people.webm" type="video/mp4" />
          <div className="content">
            <h2>Tournament Bracket Generator</h2>
            {this.state.loggedIn? 
              <form>
                  <button id="myBtnLogin" onClick={(e) => this.goTologIn(e)}>Log In</button>
                  {/* Name: */}
                  <input type="text" placeholder="Enter username" name="name" onChange={(e) => this.usernameChange(e)}/>
                <input id="myBtn" type="submit" value="Submit"  onClick={(e) => this.submitLogin(e)}/>
                {/* {this.state.showUsername ? <div className="name">{this.state.usernameToShow}</div> : null} */}
              </form>
            : 
            <button id="myBtnLogin" onClick={(e) => this.goTologIn(e)}>Log In</button>
            }

            {/* CHECKBOX */}
            <label class="container">Custom Checkbox for Shuffle
              <input type="checkbox" onChange={(e) => this.checkbox(e)} />
              <span class="checkmark"></span>
            </label>

          </div>
        </div>
        }
        {this.state.showBracket ?
        <div className="bracket">
          <Bracket seedList={this.state.bracketSeedList} bracket={this.state.bracket}/>
        </div>
        :
        null
        }
  
      </div>
    );
  }
}

export default App;
