import React from 'react'

class Signup extends React.Component {

    state = {
        name: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.fetchUser(this.state)
    }

    render() {
        return (
            <div className = "Signup">
                <h1 className="signup">Sign Up</h1>
                <form className="signupForm" onSubmit={this.submitHandler}>
                    <input className="welcomeInput" placeholder="Username" type="text" name="name"  onChange={this.changeHandler} />
                    <input className="welcomeInput" placeholder="Password" type="text" name="password"  onChange={this.changeHandler} />
                    <input className="welcomeBtn" type="submit" value="Submit" />
                </form>

                <div className="graphicOverlayNotHome"></div>
                <div className="blackOverlay"></div>
                <video autoPlay muted loop id="welcomeVideo" src="https://ak4.picdn.net/shutterstock/videos/1022621434/preview/stock-footage-males-hands-holding-joystick-playing-video-game-and-having-fun-close-up.webm" type="video/mp4" />            
            </div>
        )

    }
}

export default Signup