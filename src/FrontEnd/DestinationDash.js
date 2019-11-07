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
            routes: ["13C", "62C", "13B", "62B"],
            jeepneys: "",
            setUpRoute: "",
            places: ['Talamban', 'Gov. M. Cuenco Ave.', 'Gaisano Grand Mall (talamban)', 'University of San Carlos (talamban)', 'Banilad', 'Banilad Town Center', 'Gaisano Country Mall', 'University of Cebu (Banilad)', 'Paradise Village', 'Cebu Country Club', 'Samantabhadra Institute', 'Arch. Reyes Ave.', 'BIR', 'Cebu Business Park', 'Pag-ibig Fund', 'Ayala Center Cebu', 'Mindanao Ave.', 'Samar Loop', 'Luzon Ave.', 'Tune Hotels', 'Arch. Reyes Ave.', 'Hotel Elizabeth', 'Gorordo Ave.', 'Asilo dela Melagrosa', 'Camp Sutero (Cebu City Police office)', 'Gen. Echavez St.', 'Sikatuna St.', 'Parian', 'Colon St.', 'Gaisano Main', 'University of the Visayas', 'Colonnade Supermarket.']
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