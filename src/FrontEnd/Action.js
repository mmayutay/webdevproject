import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react'
import './ShowTables.css'
import axios from 'axios';
import swal from 'sweetalert';
import home from "./home.png";
import AskNickname from './AskNickname';

class Action extends Component {
    constructor(props){
        super(props);
        this.state = {
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
    componentDidMount(){
        let list = []
        axios.get('http://localhost:3001/api/requestroute').then(response =>{
            response.data.forEach(element => {
                list.push({"key": element.location, "value": element.location, "text": element.location})
            });
        })
        this.setState({countryOptions: list})
    }

    exposedCampaignOnChange = (e, { value }) => {
        e.persist = () => {};
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
        e.persist = () => {};
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

    onclickHandler(e){
        e.preventDefault();
        axios.post('http://localhost:3001/api/greeting', {
            located: this.state.location,
            destined: this.state.destination
          })
          .then((response) => {
              if(typeof response.data === 'string'){
                swal(response.data)
            }if(response.data.value.length === 0){
                swal(this.state.location+" is your location and your destination is " + this.state.destination + ", click again!")
            }else{
                console.log(response.data.destinationRoutes)
                this.setState({toRideLocation: response.data.locationRoutes})
                this.setState({toRideDestination: response.data.destinationRoutes})
                this.setState({greeting: "If you want to go to "+ this.state.location.toUpperCase()+", you may ride "
                +this.state.toRideLocation+" and you may get off at "+response.data.value + " and look for " + this.state.toRideDestination+
            " to reach " + this.state.destination.toUpperCase()})
              }
          })
          .catch((error) => {
            console.log(error);
          });
    }

    onclickHome(e){
        this.setState({home: true})
    }

    render(){
        if(this.state.home === false){
            return(
                <div id="flex">
                    <div id="chose">
                        <h1>Hello {this.props.name}, I hope that it will help you to go to your Destination!</h1>
                        <div id="editor">{this.DropdownExampleClearableMultiple()}</div><br></br>
                        <div id="editor">{this.DestinationChoose()}<br></br></div><br/>
                        <center><button onClick={(e) => this.onclickHandler(e)}>Review</button></center>
                    </div>
                    <div id="display">
                        <img  id="home" onClick={(e) => this.onclickHome(e)} src={home} alt="home"></img>
                        <h1 id="mess">{this.state.greeting}</h1>
                    </div>
                </div>
            )
        }else{
            return(
                <AskNickname></AskNickname>
            )
        }
}
}

export default Action;