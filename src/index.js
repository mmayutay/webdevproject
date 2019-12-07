import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './index.css';
import './FrontEnd/ShowTables.css'
import * as serviceWorker from './serviceWorker';
import Action from './FrontEnd/Action'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AskNickname from './FrontEnd/AskNickname';



const routing = (
    <Router>
        <div>
            <div className="App">
                <header className="App-header">
                    <Route path="/home" component={Action} />
                    <Route path="/nick" component={AskNickname} />
                </header>
            </div>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
