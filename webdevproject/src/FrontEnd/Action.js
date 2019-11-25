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
                { key: 'ax', value: 'ax', text: 'Ayala' },
                { key: 'al', value: 'al', text: 'Banawa' },
                { key: 'dz', value: 'dz', text: 'Basak Pardo' },
                { key: 'as', value: 'as', text: 'Bulacao' },
                { key: 'ad', value: 'ad', text: 'Colon' },
                { key: 'ao', value: 'ao', text: 'Carbon' },
                { key: 'ai', value: 'ai', text: 'Guadalupe' },
                { key: 'ag', value: 'ag', text: 'Lahug' },
                { key: 'ar', value: 'ar', text: 'Labangon' },
                { key: 'am', value: 'am', text: 'Inayawan' },
                { key: 'aw', value: 'aw', text: 'Pier' },
                { key: 'au', value: 'au', text: 'Talamban' },
                { key: 'at', value: 'at', text: 'Pit-os' }
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
              console.log(response.data)
              this.setState({greeting: response.data})
          })
          .catch((error) => {
            console.log(error);
          });
    }
    onclickSample(e) {
        console.log(this.state.greeting)
    }

    render(){
        return(
            <div id="flex">
                <div id="chose">
                    <div id="editor">{this.DropdownExampleClearableMultiple()}</div><br></br>
                    <div id="editor">{this.DestinationChoose()}<br></br></div><br/>
                    <center><button onClick={(e) => this.onclickHandler(e)}>Review</button></center>
                </div>
                <div id="display">
                    <h1>{this.state.greeting}</h1>
                </div>
            </div>
        )
    }
}

export default Action;