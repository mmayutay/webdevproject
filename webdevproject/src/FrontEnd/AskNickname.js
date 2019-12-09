import React, { Component } from 'react';
import swal from 'sweetalert';
import jeepMe from './jeepMe.png';
import { Redirect } from 'react-router-dom'
import Auth from './Auth';
import './ShowTables.css'



class AskNickname extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: "",
            state: false,
            signUp: false,
            authenticated: Auth.getAuth()
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
            this.setState({ state: true, authenticated: true })
        }
    }

    onClickSign(e) {
        this.setState({ signUp: true })
    }

    render() {
        if(this.state.signUp){
            return(
                <Redirect to={{
                    pathname: "/login"
                }}/>
            )
        }
        if (this.state.state === false) {
            return (
                <center id="nickname">
                    <div id="sign" onClick={(e) => this.onClickSign(e)}><h3>Sign as Admin?</h3></div>
                    <br /><br /><br />
                    <img id="img" src={jeepMe} alt="Guide To The Better Trip!"></img><br></br><br></br>
                    <input placeholder="Enter your nickname" onChange={(e) => this.nickname(e)}></input>
                    <br></br>
                    <button onClick={(e) => this.situationHandler(e)}>Click</button>
                </center>
            )
        } else {
            return (
                <div>
                    {this.state.authenticated}
                    <Redirect to={{
                        pathname: "/home",
                        nickname: this.state.nickname,
                        state: this.state.state
                    }} />
                </div>
            )
        }

    }
}
export default AskNickname;