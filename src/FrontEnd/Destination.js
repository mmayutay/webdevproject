import React, { Component } from 'react';
import './ShowTables.css'
import swal from 'sweetalert';

class Destination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: [],
            situation: ""

        }
    }

    showDestination(e) {
        let list = this.state.show
        let ListSearched = this.props.places
        let placesFrom = this.props.placesFrom
        ListSearched.forEach(i => {
            placesFrom.forEach(j => {
                if (i === j) {
                    list.push(i)
                }
            });
        });
        console.log(this.props.location)
        let simple = "If you want to go to" + this.props.location + ",  ride any jeepneys that will pass on you location and you Naug in " + this.state.show + " or either of the places"
        this.setState({ situation: simple })
        console.log(this.state.situation)
        swal(this.state.situation)

    }



    render() {
        return (
            <center>
                <div id="tripGuideAsk">
                    <h1 id="tripGuide">Just Click the button below</h1><br />
                    <button onClick={(e) => this.showDestination(e)}>Click</button>
                </div>
            </center>
        )
    }
}
export default Destination;