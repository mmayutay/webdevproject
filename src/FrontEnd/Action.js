import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import './ShowTables.css'
import axios from 'axios';
import swal from 'sweetalert';
import { Modal } from 'semantic-ui-react';
import home from './home.png'
import { Redirect } from 'react-router-dom'

class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationTemp: "",
            greeting: "",
            values: [],
            location: "",
            destination: "",
            countryOptions: [],
            toRideLocation: [],
            toRideDestination: [],
            home: false
        }
    }
    componentDidMount() {
        let list = []
        axios.get('http://localhost:3001/api/requestroute').then(response => {
            response.data.forEach(element => {
                list.push({ "key": element._id, "value": element.location, "text": element.location })
            });
        })
        this.setState({ countryOptions: list })
    }

    exposedCampaignOnChange = (e, { value }) => {
        e.persist = () => { };
        this.setState({ location: e.target.textContent })
    }

    DropdownExampleClearableMultiple = () => (
        <Dropdown
            // search
            clearable
            selection
            options={this.state.countryOptions}
            placeholder='Location'
            onChange={this.exposedCampaignOnChange}
        />
    )

    valueChosen = (e, { value }) => {
        e.persist = () => { };
        this.setState({ destination: e.target.textContent })
    }

    DestinationChoose = () => (
        <Dropdown
            // search
            clearable
            selection
            options={this.state.countryOptions}
            placeholder='Destination'
            onChange={this.valueChosen}
        />
    )

    onclickHandler(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/api/greeting', {
            located: this.state.location,
            destined: this.state.destination
        })
            .then((response) => {
                if (typeof response.data === 'string') {
                    swal(response.data)
                    this.setState({greeting: "Click The Review button again!"})
                } else if (response.data.value.length === 0) {
                    this.setState({locationTemp: response.data.location})
                } else {
                    if(this.state.locationTemp !== response.data.location){
                        this.setState({greeting: "Click The Review button again!"})
                        this.setState({locationTemp: response.data.location})
                    }else{
                        this.setState({
                            greeting: "If you are from " + response.data.location.toUpperCase() + ", you may ride "
                                + response.data.locationRoutes + " and you may get off at " + response.data.value + " and look for " + response.data.destinationRoutes +
                                " to reach " + response.data.destination.toUpperCase()
                        })
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onclickHome(e) {
        swal({
            icon: "warning",
            title: "Do you want to exit?",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if(willDelete){
                this.setState({ home: true })
            }else{
                this.setState({home: false})
            }
        })
        
    }

    render() {
        if (this.state.home === false) {
            return (
                <div id="flex">
                    <div id="chose">
                        <img src={home} alt="Home page" id="home" onClick={(e) => this.onclickHome(e)}/>
                        <h1>Hello {this.props.location.nickname}, I hope that it will help you to go to your Destination!</h1>
                        <div id="editor">{this.DropdownExampleClearableMultiple()}</div><br></br>
                        <div id="editor">{this.DestinationChoose()}<br></br></div><br />
                        <Modal
                            trigger={<center><button onClick={(e) => this.onclickHandler(e)}>Review</button></center>}
                            header={this.state.location + " to " + this.state.destination}
                            content={this.state.greeting}
                            actions={[{ key: 'done', content: 'Done', positive: true }]}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <Redirect to="/nick"/>
            )
        }
    }
}

export default Action;