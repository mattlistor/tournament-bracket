import React, {Component} from 'react';
import BracketLink from './BracketLink.js';

class BracketIndexPage extends Component {

    state = {
        bracketIndexArray: []
    }

    getBracketFetch = () => {
        fetch("http://localhost:3000/brackets")
        .then((res) => res.json())
        .then((myJson) => {
            // console.log(myJson)
            this.setState({
                bracketIndexArray: myJson
            })
        })
    }

    // generateIndex = () => {
    //     this.getBracketFetch
    //     his.getBracketFetch()
    // }

    generateLinkComponenets = () => {
        this.getBracketFetch()

        return this.state.bracketIndexArray.map((bracket) => <BracketLink name={bracket.bracket}/>)
    }

    render(){
        return ( 
            <div className="BracketIndexPage">
                <h1>Index page for brackets</h1>
                {this.generateLinkComponenets()}
            </div>
        );
  }
}

export default BracketIndexPage;
