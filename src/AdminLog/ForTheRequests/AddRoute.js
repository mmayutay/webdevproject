import React, {Component} from 'react'
import "../Admin.css";
import swal from 'sweetalert'

class AddRoute extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }
    onclickHandler(e){
        swal({
            title: "Enter the route below!",
            text: "In the field you are going to enter the route # of the jeepney:",
            content: "input",   
          }).then((value) => {
              swal({
                  title: value,
                  text: "Enter the places that " + value + " passes in which it is separated by comma!",
                  content: "input"
              }).then((passes) => {
                  if(passes !== null){
                    let newval = passes.split(", ")
                    newval.forEach(element => {
                        console.log(element)
                    }); 
                  }
              })
          })
          
    }
    render(){   
        return(
            <center>
                <div className="AddRoute"> 
                    <h1>What place? (in barangay)</h1><br></br>
                    <input autoComplete="off" type="text" className="w3-input w3-border" id="barangay"></input><br></br>
                    <button id="addButton" onClick={(e) => this.onclickHandler(e)}>Submit</button><br></br>
                </div>
            </center>
        )
    }
}
export default AddRoute;