import React, { Component } from 'react';
import "./Admin.css";
import { Redirect } from 'react-router-dom'

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:"",
            addRoute: false, 
            deleteRoute: false,
            changeRoute: false,
            retrieveData: false
        }
    }
    render() {
        if (this.state.addRoute) {
            return (
                <Redirect to="/addroute"/>
            )
        }if(this.state.deleteRoute){
            return(
                <Redirect to="/deleteroute"/>
            )
        }if(this.state.changeRoute){
            return(
                <Redirect to="/changeroute"/>
            )
        }if(this.state.retrieveData){
            return(
                <div>
                    <Redirect to="/retrieve"/>
                </div>
            )

        } else {
            return (
                <div id="simdash">
                    <button onClick={(e) => this.setState({ addRoute: true })}>Add Another Route</button><br></br>
                    <button onClick={(e) => this.setState({deleteRoute: true})}>Delete A Route</button><br></br>
                    <button onClick={(e) => this.setState({changeRoute: true})}>Change A Route</button><br></br>
                    <button onClick={(e) => this.setState({retrieveData: true, value: "Gwapo"})}>Retrieve All Data</button>
                </div>
            )
        }
    }
}
export default Options;