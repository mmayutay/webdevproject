import React, { Component } from 'react';
import './ShowTables.css'

class Destination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: []

        }
    }

    showDestination(e){
        let list = this.state.show
        let ListSearched = this.props.places
        let placesFrom = this.props.placesFrom
        ListSearched.forEach(i => {
            placesFrom.forEach(j => {
                if(i === j){
                    list.push(i)
                }
            });
        });
        console.log(this.state.show)
    }



    render() {
        return (
            <center>
                <div id="tripGuideAsk">
                    <h1 id="tripGuide">Hello! {this.props.name}, Thank you for using our application and enjoy your ride!</h1><br />
                    <button onClick={(e) => this.showDestination(e)}>Click</button>
                </div>
            </center>
        )
    }
}
export default Destination;