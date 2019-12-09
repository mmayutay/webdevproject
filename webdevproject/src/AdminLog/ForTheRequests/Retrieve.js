import React, { Component } from 'react'
import home from './home.png'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { Redirect } from 'react-router-dom'
import List from './List';


class Retrieve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            ret: []
        }
    }
    onclickHome(e) {
        this.setState({ home: true })
    }
    componentDidMount() {
        axios.get('http://localhost:3000/jeepme/retrieveAll')
            .then(response => {
                this.setState({ret: response.data});
            })
            .catch(error => {
                console.log(error);
            });

    }

    dataTable() {
        return this.state.ret.map((res, i) => {
            console.log(res);
            return <List obj={res} key={i} />;
        })
    }
    render() {
        if (!this.state.home) {
            return (
                <center>
                    <div>
                        <img src={home} alt="Smiley face" onClick={(e) => this.onclickHome(e)} />
                    </div>
                    <div className="table-wrapper">
                        <h1 id="ListRetrieve">List of Routes</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Route</th>
                                <th>Places</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </Table>
                </div>
                </center>
                
            )
        } else {
            return (
                <Redirect to="/options"/>
            )
        }
    }
}
export default Retrieve;