import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './index.css';
import './FrontEnd/ShowTables.css'
import * as serviceWorker from './serviceWorker';
import Action from './FrontEnd/Action'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AskNickname from './FrontEnd/AskNickname';
import Auth from './FrontEnd/Auth';
import { Redirect } from 'react-router-dom'


const PrivateRoute =() => {
    return (
        <Route render={()=> Auth.getAuth()?(<Redirect to={{pathname: "/home"}}/>):(<Redirect to={{pathname: "/nickname"}}/>)}/>
    )
}

const routing = (
    <Router>
            <div className="App">
                <header className="App-header">
                    <PrivateRoute path="/home" component={Action}/>
                    <Route path="/nickname" component={AskNickname} />
                    <Route path="/home" component={Action} />
                </header>
            </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
