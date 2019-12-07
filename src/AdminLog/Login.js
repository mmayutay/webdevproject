import React, {Component} from 'react';
import "./Admin.css";
import Options from './Options';
import swal from 'sweetalert'
import axios from 'axios';

class Login extends Component  {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            situation: false

        }
    }
    onclickHandler(e){
        axios.post('http://localhost:3001/jeepme/login', {
            username: this.state.username, 
            password: this.state.password
        })
        swal(this.state.username + " is your name and your password is " + this.state.password)
        this.setState({situation: true})
    }

    render(){
        if(!this.state.situation){
            return(
                <center>
                   <div className="card">
                        <h1 id="admin">Admin</h1>
                        <input autoComplete="off" placeholder="Username" type="text" className="w3-input w3-border" id="user" onChange={(e) => this.setState({username: e.target.value})}></input><br></br>
                        <input placeholder="Password" type="password" className="w3-input w3-border" id="pass" onChange={(e) => this.setState({password: e.target.value})}></input><br></br>
                        <button id="button" onClick={(e) => this.onclickHandler(e)}>Login</button>
                    </div>
                </center>
            )
        }else{
            return(
                <Options></Options>
            )
        }
    }
}
export default Login;