import React, { Component } from 'react';
import './ShowTables.css'

class Destination extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
        <center>
            <div id="tripGuideAsk">
                <h1 id="tripGuide">Hello! {this.props.name}, have a nice trip and have a good day!!</h1><br />
            </div>
        </center>
        )
    }
}
export default Destination;