import React, {Component} from 'react';

class Welcome extends Component {
    
  render(){

    return (
        <div className="Welcome">
            <div className="welcomeMessage">
                <h1 className="welcome_to">Welcome to</h1>
                <h1 className="welcome">TOURNAMENT<br></br>BRACKET<br></br>GENERATOR</h1>
            </div>
            <div className="line"></div>
            <div className ="welcomeButtons">
                <button className="welcomeBtn" onClick={() => this.props.goToSignup()}>Sign up</button>
                <button className="welcomeBtn" onClick={() => this.props.goToLogin()}>Log in</button>
            </div>
            {/* <img className="logo" src="https://i.imgur.com/yPWENUo.png" alt=""></img> */}

            <div className="graphicOverlay"></div>
            <div className="blackOverlay"></div>
            <video autoPlay muted loop id="welcomeVideo" src="https://ak4.picdn.net/shutterstock/videos/1022621434/preview/stock-footage-males-hands-holding-joystick-playing-video-game-and-having-fun-close-up.webm" type="video/mp4" />
        </div>
    );
  }
}

export default Welcome;
