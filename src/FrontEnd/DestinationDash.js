import React, { Component } from 'react';
import './ShowTables.css'
import { Button, Modal } from 'semantic-ui-react';
import Destination from './Destination';


class DestinationDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            situation: false,
            destined: false,
            routes: ["04C", "04I", "04H", "17C", "17B", "17D"],
            jeepneys: "",
            setUpRoute: "",
            places: ["Apas", "IT Park", "Salinas Drive", "University Of The Southern Philippines Foundation (Lahug)", "JY Square Mall", "Gorordo Ave.", "Lahug High School", "University Of The Philippines", "Golden Peak Hotel", "Philhealth", "Royal Concourse", "Asilo Dela Milagrosa", "Gen. Maxilom Ave.", "Mango Ave.", "Fooda Saversmart", "Horizons 101", "Mango Square", "The Beat", "Robinsons Fuente", "F. Ramos St.", "Junquera St.", "University Of San Carlos Main", "Sanciangko St.", "University Of Cebu Main", "GV Tower", "E Mall", "Panganiban St.", "Magallanes St.", "University Of San Jose-Recoletos", "Carbon Public Market", "F. Calderon St."," Progresso St."]
        }
    }

    locationHandler(e) {
        this.setState({ location: e.target.value })
    }

    displayInput(e) {
        e.preventDefault();
        this.setState({ situation: !this.state.situation });
    }

    ModalExampleShorthand = () => {
        if (!this.state.situation) {
            return (
                <Modal
                    trigger={<Button>Done</Button>}
                    header={this.state.setUpRoute}
                    content={this.state.places.map((values) => <li>{values}</li>)}
                    actions={[{ key: 'done', content: 'Done', positive: true }]}
                />
            )
        }
    }

    diplayValues(e) {
        const values = this.state.routes;
        let jeep = ""
        values.forEach(element => {
            jeep += element + ", ";
        });
        this.setState({ jeepneys: jeep + " are the Jeepneys that will pass to " + this.state.location })
    }

    routeHandler(e) {
        this.setState({ setUpRoute: e.target.value })
    }

    destinationHandler(e){
        this.setState({destined: true})
    }


    render() {  
        if(!this.state.destined){
        return (
            <div><br /><br /><br /><br />
                <div id="locationAsk">
                    <h1 id="locator">Hello! {this.props.name}, Can you please enter your Destination?</h1><br />
                    <input name="search" onChange={(e) => this.locationHandler(e)}></input><br /><br></br>
                    <button onClick={(e) => this.diplayValues(e)}>Click</button>
                </div>
                <div id="tablewrap">
                    <center>
                        <h1>{this.state.jeepneys}</h1>
                    </center>
                    <input onChange={(e) => this.routeHandler(e)}></input>
                    {this.ModalExampleShorthand()}
                </div>
            </div>
        )
        }else{
            return(
            <Destination name={this.props.name}></Destination>
            )
        }
    }
}
export default DestinationDash;