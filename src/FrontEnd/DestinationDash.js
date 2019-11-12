import React, { Component } from 'react';
import './ShowTables.css'
import { Button, Modal } from 'semantic-ui-react';
import Destination from './Destination';
import { Dropdown } from 'semantic-ui-react'


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
            places: ['Apas', 'IT Park', 'Salinas Drive', 'University Of The Southern Philippines Foundation (Lahug)', 'JY Square Mall', 'Gorordo Ave.', 'Lahug High School', 'University Of The Philippines', 'Golden Peak Hotel', 'Philhealth', 'Royal Concourse', 'Asilo Dela Milagrosa', 'Gen. Maxilom Ave.', 'Mango Ave.', 'Fooda Saversmart', 'Horizons 101', 'Mango Square', 'The Beat', 'Robinsons Fuente', 'F. Ramos St.', 'Junquera St.', 'University Of San Carlos Main', 'Sanciangko St.', 'University Of Cebu Main', 'GV Tower', 'E Mall', 'Panganiban St.', 'Magallanes St.', 'University Of San Jose-Recoletos', 'Carbon Public Market', 'F. Calderon St.', 'Progresso St.'],
            countryOptions: [
                { key: 'af', value: 'af', text: 'Apas' },
                { key: 'ax', value: 'ax', text: 'Bacayan' },
                { key: 'al', value: 'al', text: 'Banilad' },
                { key: 'dz', value: 'dz', text: 'Basak Pardo' },
                { key: 'as', value: 'as', text: 'Basak San Nicolas' },
                { key: 'ad', value: 'ad', text: 'Bonbon' },
                { key: 'ao', value: 'ao', text: 'Buhisan' },
                { key: 'ai', value: 'ai', text: 'Bulacao' },
                { key: 'ag', value: 'ag', text: 'Busay' },
                { key: 'ar', value: 'ar', text: 'Calamba' },
                { key: 'am', value: 'am', text: 'Capitol Site' },
                { key: 'aw', value: 'aw', text: 'Carreta' },
                { key: 'au', value: 'au', text: 'Cogon Ramos' },
                { key: 'at', value: 'at', text: 'Cogon Pardo' },
                { key: 'az', value: 'az', text: 'Day‑as' },
                { key: 'bs', value: 'bs', text: 'Duljo Fatima' },
                { key: 'bh', value: 'bh', text: 'Ermita' },
                { key: 'bd', value: 'bd', text: 'Guadalupe' },
                { key: 'bb', value: 'bb', text: 'Labangon' },
                { key: 'by', value: 'by', text: 'Lahug' },
                { key: 'be', value: 'be', text: 'Pit-os' },
                { key: 'bz', value: 'bz', text: 'Talamban' },
                { key: 'bj', value: 'bj', text: 'Tisa' },
            ]
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

    destinationHandler(e) {
        this.setState({ destined: true })
    }

    exposedCampaignOnChange = (e, { value }) => {
        e.persist();
        console.log(e.target.textContent);
        this.setState({ location: e.target.textContent })
    }

    DropdownExampleClearableMultiple = () => (
        <Dropdown
            clearable
            selection
            options={this.state.countryOptions}
            placeholder='Location'
            onChange={this.exposedCampaignOnChange}
        />
    )

    render() {
        if (!this.state.destined) {
            return (
                <div>
                    <div id="locationAsk">
                        <h1 id="locator">Hello! <b>{this.props.name}</b>, Can you please enter your Destination?<b>(Barangay)</b></h1><br />
                        {this.DropdownExampleClearableMultiple()}<br></br>
                        {/* <input name="search" onChange={(e) => this.locationHandler(e)}></input><br /><br></br> */}
                        <button onClick={(e) => this.diplayValues(e)}>Click</button>
                    </div>
                    <div id="flex-container">
                        <div id="tablewrap">
                            <center>
                                <h1>{this.state.jeepneys}</h1>
                            </center>
                        </div>
                        <div id="clarify">
                            <input onChange={(e) => this.routeHandler(e)}></input>
                            <center>{this.ModalExampleShorthand()}<br></br><br></br></center>
                            <center>
                                <h1>Have you seen your Destination??</h1>
                                <button onClick={(e) => this.destinationHandler(e)}>Yes</button>
                                <button>No</button>
                            </center>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <Destination name={this.props.name}></Destination>
            )
        }
    }
}
export default DestinationDash;