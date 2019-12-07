import React, {Component} from 'react'
import "../Admin.css";

class DeleteRoute extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h1>What do you want to delete? (Barangay or Route)</h1>
                <input></input>
            </div>
        )
    }
}
export default DeleteRoute;