import React from 'react'

class Login extends React.Component {
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
        this.props.loginUser(this.state)
    } 
   

    render() {
        return (
            <div className="main">
                <video autoPlay muted loop id="myVideo" src="https://ak6.picdn.net/shutterstock/videos/1011043136/preview/stock-footage-close-up-hand-of-people-playing-games-with-friend-people-play-game-together-at-home-people.webm" type="video/mp4" />
                <div className="content">
                    <h2>Tournament Bracket Generator</h2>
                    <form onSubmit={(e) => this.submitHandler(e)}>
                        {/* Name: */}
                        <input type="text" placeholder="Username" name="name" onChange={(e) => this.changeHandler(e)}/>
                        <input type="text" placeholder="Password" name="password" onChange={(e) => this.changeHandler(e)}/>
                        <input id="myBtn" type="submit" value="Submit"  onClick={(e) => this.submitHandler(e)}/>
                        {/* {this.state.showUsername ? <div className="name">{this.state.usernameToShow}</div> : null} */}
                    </form>

                </div>
            </div>
        )

    }
}

export default Login
