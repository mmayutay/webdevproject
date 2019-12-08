import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            values: ""
        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.jeepneyRoute}</td>
                <td>{this.props.obj.passes}</td>
                <td>-------</td>
            </tr>
        );
    }
}

export default List;