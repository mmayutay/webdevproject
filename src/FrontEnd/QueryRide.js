import React, {Component} from 'react';

class QueryRide extends Component {
    constructor(props){
        super(props);
        this.state = {
            ridesSug: ""
        }
    }

    render(){
        return(
            <div>
                <h1>Just click the button below to see the suggestion rides!</h1>
                <button>Click</button>
            </div>
        )
    }
}