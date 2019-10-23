import React, {Component} from 'react';
import SeedContainer from './SeedContainer.js';
import NavBar from './NavBar.js';


// import '../App.css';

class Sidebar extends Component {
  
  render(){
    return (
        <div className="content">
            {/* <NavBar/> */}
            <h1 className="sidebar">TOURNAMENT <br></br> BRACKET  <br></br> GENERATOR</h1>
            
            {/* SEED FORM */}
            <div className="lowerContainer">
              <form className="seedForm">
                  <input id="seedInput" spellCheck="false" type="text" placeholder="Enter Seeds" name="name" maxLength="18" onChange={(e) => this.props.currentSeedChange(e)}/>
                  <input id="myPlusBtn" type="submit" value="+"  onClick={(e) => this.props.submitSeed(e)}/>
              </form>
            
              <div className="checkbox-and-button">
                  {/* GENERATE BRACKET BUTTON */}
                  {/* <button className="generateBtn" onClick={() => this.props.generate()}>GENERATE</button> */}

                  {[4, 8, 16, 32].includes(this.props.seedList.length) ?
                  <button className="generateBtnGreenLight" onClick={() => this.props.generate()}>GENERATE</button>
                  :
                  <button className="generateBtn" onClick={() => this.props.generate()}>GENERATE</button>
                  }
                  <button className="generateBtn" onClick={() => this.props.logOut()}>LOGOUT</button>


                  {/* CHECKBOX */}
                  <label className="container">
                  <input type="checkbox" onChange={(e) => this.props.checkbox(e)} />
                  <span className="checkmark"></span>
                  <div className="shuffleLabel">Shuffle Seeds</div>
                  </label>


              </div>

              <SeedContainer greenLight={false} seedList={this.props.seedList} submitSeedEdit={this.props.submitSeedEdit} editingSeed={this.props.editingSeed} editSeedIndex={this.props.editSeedIndex} editSeed={this.props.editSeed} deleteSeed={this.props.deleteSeed}/>

              {/* SEED CONATINER */}
              {/* {[4, 8, 16, 32].includes(this.props.seedList.length) ?
              <SeedContainer greenLight={true} seedList={this.props.seedList} submitSeedEdit={this.props.submitSeedEdit} editingSeed={this.props.editingSeed} editSeedIndex={this.props.editSeedIndex} editSeed={this.props.editSeed} deleteSeed={this.props.deleteSeed}/>
              :
              <SeedContainer greenLight={false} seedList={this.props.seedList} submitSeedEdit={this.props.submitSeedEdit} editingSeed={this.props.editingSeed} editSeedIndex={this.props.editSeedIndex} editSeed={this.props.editSeed} deleteSeed={this.props.deleteSeed}/>
              } */}
            </div>

      </div> 
    );
  }
}

export default Sidebar;
