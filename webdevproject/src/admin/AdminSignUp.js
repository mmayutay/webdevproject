import React, {Component} from 'react';
import swal from 'sweetalert';

class AdminSignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email:"",
            pass:"",
            phone:"",
            state: false
        }
    }

    nameHandler(e){
        this.setState({name: e.target.value})
    }

    emailHandler(e){
        this.setState({email: e.target.value})
    }

    passwordHandler(e){
        this.setState({pass: e.target.value})
    }

    phoneHandler(e){
        this.setState({phone: e.target.value})
    }

    registerHandler(e) {
        if(this.state.name === ""){
            this.setState({state:false})
            swal("Aww snap!", "The name is required", "error");
        }
        
        if(this.state.email === ""){
            this.setState({state:false})
            swal("Aww snap!", "The email is required", "error");
        }
        if(this.state.pass === ""){
            this.setState({state:false})
            swal("Aww snap!", "The code is required", "error");
        }
        if(this.state.phone === ""){
            this.setState({state:false})
            swal("Aww snap!", "The phone is required", "error");
        }
        else{
            this.setState({state:true})
        }
    }

    render() {
        if(this.state.state === false)
        {
            return(
                <center id="admin">
                    <br/>
                    <h2>Fill up the form</h2>
                    Name:<br/>
                    <input placeholder="name" onChange={(e) => this.nameHandler(e)}></input><br/>
                    Email:<br/>
                    <input placeholder="email" onChange={(e) => this.emailHandler(e)}></input><br/>
                    Password:<br/>
                    <input type="password" placeholder="password" onChange={(e) => this.passwordHandler(e)}></input><br/>
                    Phone:<br/>
                    <input placeholder="phone" onChange={(e) => this.phoneHandler(e)}></input><br/>
                    <button onClick={(e) => this.registerHandler(e)}>SignUp</button>

                </center>
            )
        }
        else
        {
             
        }
    }
}

export default AdminSignUp;