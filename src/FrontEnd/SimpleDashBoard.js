import React, { Component } from 'react';
import './ShowTables.css'
import { Button, Modal } from 'semantic-ui-react';
import DestinationDash from './DestinationDash';
import { Dropdown } from 'semantic-ui-react'
import ThankYou from './ThankYou';


class SimpleDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            situation: false,
            changeDes: false,
            destined: false,
            routes: ["13C", "62C", "13B", "62B"],
            jeepneys: "",
            setUpRoute: "",
            placesFrom: ['Talamban', 'Gov. M. Cuenco Ave.', 'Gaisano Grand Mall (talamban)', 'University of San Carlos (talamban)', 'Banilad', 'Banilad Town Center', 'Gaisano Country Mall', 'University of Cebu (Banilad)', 'Paradise Village', 'Cebu Country Club', 'Samantabhadra Institute', 'Arch. Reyes Ave.', 'BIR', 'Cebu Business Park', 'Pag-ibig Fund', 'Ayala Center Cebu', 'Mindanao Ave.', 'Samar Loop', 'Luzon Ave.', 'Tune Hotels', 'Arch. Reyes Ave.', 'Hotel Elizabeth', 'Gorordo Ave.', 'Asilo dela Milagrosa', 'Camp Sutero (Cebu City Police office)', 'Gen. Echavez St.', 'Sikatuna St.', 'Parian', 'Colon St.', 'Gaisano Main', 'University of the Visayas', 'Colonnade Supermarket.'],
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
                    header={"This Jeepney will pass on this places!, kindly check if the place you want to go are in the LIST below!"}
                    content={this.state.placesFrom.map((values) => <li>{values}</li>)}
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
        e.preventDefault()
        this.setState({ destined: true })
    }

    DestinationShift(e) {
        e.preventDefault()
        this.setState({ changeDes: true })
    }
    exposedCampaignOnChange = (e, { value }) => {
        e.persist = () => {};
        this.setState({ location: e.target.textContent })
    }

    DropdownExampleClearableMultiple = () => (
        <Dropdown
            search
            clearable
            selection
            options={this.state.countryOptions}
            placeholder='Location'
            onChange={this.exposedCampaignOnChange}
        />
    )

    render() {
        if (!this.state.changeDes) {
            if (!this.state.destined) {
                return (
                    <div>
                        <div id="locationAsk">
                            <h1 id="locator">Hello! <b>{this.props.name}</b>, Can you please enter your Location?<b>(Barangay)</b></h1><br />
                            <div id="editor">{this.DropdownExampleClearableMultiple()}<br></br></div>
                            <button onClick={(e) => this.diplayValues(e)}>Click</button>
                        </div>
                        <div id="flex-container">
                            <div id="tablewrap">
                                <center>
                                    <h1 id="display">{this.state.jeepneys}</h1>
                                </center>
                            </div>
                            <div id="clarify">
                                <input onChange={(e) => this.routeHandler(e)}></input>
                                <center>{this.ModalExampleShorthand()}<br></br><br></br></center>                                
                                <center>
                                    <h1>Have you seen your Destination??</h1>
                                    <button onClick={(e) => this.destinationHandler(e)}>Yes</button>
                                    <button onClick={(e) => this.DestinationShift(e)}>No</button>
                                </center>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <ThankYou name={this.props.name}></ThankYou>
                )
            }
        } else {
            return (
                <DestinationDash name={this.props.name} placesFrom={this.state.placesFrom}></DestinationDash>
            )
        }
    }
}
export default SimpleDashBoard;