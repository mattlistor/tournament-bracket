import React, {Component} from 'react';
import SeedContainer from './SeedContainer.js';

// import '../App.css';

class Sidebar extends Component {
  
  render(){
    return (
        <div className="content">
            <h1>Tournament <br></br> Bracket  <br></br> Generator</h1>
            
            {/* SEED FORM */}
            <form className="seedForm">
                <input id="seedInput" type="text" placeholder="Enter 4, 8, 16, or 32 Seeds" name="name" maxLength="18" onChange={(e) => this.props.currentSeedChange(e)}/>
                <input id="myPlusBtn" type="submit" value="+"  onClick={(e) => this.props.submitSeed(e)}/>
            </form>
           
            <div className="checkbox-and-button">
                {/* GENERATE BRACKET BUTTON */}
                <button className="generateBtn" onClick={() => this.props.generate()}>Generate</button>


                {/* CHECKBOX */}
                <label className="container">Shuffle Seeds
                <input type="checkbox" onChange={(e) => this.props.checkbox(e)} />
                <span className="checkmark"></span>
                </label>
            </div>

            {/* SEED CONATINER */}
            <SeedContainer seedList={this.props.seedList} submitSeedEdit={this.props.submitSeedEdit} editingSeed={this.props.editingSeed} editSeedIndex={this.props.editSeedIndex} editSeed={this.props.editSeed} deleteSeed={this.props.deleteSeed}/>
      </div> 
    );
  }
}

export default Sidebar;
