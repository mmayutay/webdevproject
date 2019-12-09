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
import Login from './AdminLog/Login';
import Retrieve from './AdminLog/ForTheRequests/Retrieve';
import ChangeRoute from './AdminLog/ForTheRequests/ChangeRoute'
import Options from './AdminLog/Options';
import DeleteRoute from './AdminLog/ForTheRequests/DeleteRoute';
import AddRoute from './AdminLog/ForTheRequests/AddRoute';


const PrivateRoute =() => {
    return (
        <Route render={()=> Auth.getAuth()?(<Redirect to={{pathname: "/home"}}/>):(<Redirect to={{pathname: "/nickname"}}/>)}/>
    )
}

const ProtectedRoute = () => {
    return (
        <Route render={()=> Auth.getAuth()?(<Redirect to={{pathname: "/options"}}/>):(<Redirect to={{pathname: "/login"}}/>)}/>
    )
}

const routing = (   
    <Router>
            <div className="App">
                <header className="App-header">
                    <ProtectedRoute path="/options" component={Options}/>
                    <PrivateRoute path="/home" component={Action}/>
                    <Route path="/addroute" component={AddRoute}/>
                    <Route path="/deleteroute" component={DeleteRoute}/>
                    <Route path="/options" component={Options}/>
                    <Route path="/changeroute" component={ChangeRoute}/>
                    <Route path="/retrieve" component={Retrieve}/>
                    <Route path="/nickname" component={AskNickname} />
                    <Route exact path="/home" component={Action} />
                    <Route path="/login" component={Login}/>
                </header>
            </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
