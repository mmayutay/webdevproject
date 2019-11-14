import React, {Component} from 'react';
import './ShowTables.css'

class ThankYou extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <center>
                <div id="tripGuideAsk">
                    <h1 id="tripGuide">Hello! {this.props.name}, Thank you for using our application and enjoy your ride!</h1><br />
                </div>
            </center>
        )
    }
}

export default ThankYou;