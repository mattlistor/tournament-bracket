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
                <h1>Signup Form</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name"  onChange={this.changeHandler} />
                    <input type="text" name="password"  onChange={this.changeHandler} />

                    <input type="submit" value="signup" />
                </form>
            </div>
        )

    }
}

export default Signup