import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react'
import './ShowTables.css'
import axios from 'axios';

class Action extends Component {
    constructor(props){
        super(props);
        this.state = {
            greeting: "",
            values: [],
            location: "",
            destination: "",
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

    valueChosen = (e, { value }) => {
        e.persist = () => {};
        this.setState({ destination: e.target.textContent })
    }

    DestinationChoose = () => (
        <Dropdown
            search
            clearable
            selection
            options={this.state.countryOptions}
            placeholder='Destination'
            onChange={this.valueChosen}
    />
    )

    onclickHandler(e){
        e.preventDefault();
        axios.post('http://localhost:3001/api/greeting', {
            located: this.state.location,
            destined: this.state.destination
          })
          .then((response) => {
              this.setState({greeting: response.data})
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render(){
        return(
            <div>
                <div id="chose">
                    <div id="editor">{this.DropdownExampleClearableMultiple()}</div><br></br>
                    <div id="editor">{this.DestinationChoose()}<br></br></div><br/>
                    <button onClick={(e) => this.onclickHandler(e)}>Search</button>
                </div>
                <div id="display">
                    <h1>{this.state.greeting}</h1>
                </div>
            </div>
        )
    }
}

export default Action;