import React, { Component } from 'react';
import swal from 'sweetalert';
import jeepMe from './jeepMe.png';
import { Redirect } from 'react-router-dom'


class AskNickname extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: "",
            state: false,
            signUp: false
        }
    }

    nickname(e) {
        this.setState({ nickname: e.target.value })
    }

    situationHandler(e) {
        if (this.state.nickname === "") {
            this.setState({ state: false })
            swal("Awww Snap!", "The Nickname is required!", "error");
        } else {
            this.setState({ state: true })
        }
    }

    onClickSign(e) {
        console.log("Sulod na!")
        this.setState({ signUp: true })
    }

    render() {
        if (this.state.state === false) {
            return (
                <center id="nickname">
                    <div id="sign" onClick={(e) => this.onClickSign(e)}><h3>Sign as Admin?</h3></div>
                    <br /><br /><br />
                    <img src={jeepMe} alt="Guide To The Better Trip!"></img>
                    <h2>Hello Mate!, May I ask your Nickname?</h2>
                    <input placeholder="Enter your nickname" onChange={(e) => this.nickname(e)}></input>
                    <br></br>
                    <button onClick={(e) => this.situationHandler(e)}>Click</button>
                </center>
            )
        } else {
            return (
                <Redirect to={{
                    pathname: "/home",
                    nickname: this.state.nickname
                }} />
            )
        }

    }
}
export default AskNickname;