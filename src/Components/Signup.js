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
                <video autoPlay muted loop id="welcomeVideo" src="https://media.istockphoto.com/videos/guys-sitting-on-couch-playing-video-games-video-id473174500" type="video/mp4" />
            </div>
        )

    }
}

export default Signup