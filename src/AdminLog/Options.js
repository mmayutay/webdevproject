import React, {Component} from 'react';
import "./Admin.css";
import AddRoute from './ForTheRequests/AddRoute';

class Options extends Component {
    constructor(props){
        super(props);
        this.state = {
            boolean: false
        }
    }
    render(){
        if(!this.state.boolean){
        return(
            <div id="simdash">
                <button onClick={(e) => this.setState({boolean: true})}>Add Another Route</button><br></br><br></br>
                <button>Delete A Route</button><br></br><br></br>
                <button id="chButton">Change A Route</button><br></br>
            </div>
        )
        }else{
            return(
            <AddRoute></AddRoute>
            )
        }
    }
}
export default Options;