import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from "../redux/containers/Dashboard/Dashboard";
import Cocktails from "../redux/containers/Cocktails/Cocktails";
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from "react-bootstrap";

function Wrapper() {
    return(
        <Router>
            <Navbar style={{backgroundColor: "pink"}} variant="dark">
                <Link to={'/'}>
                    <Navbar.Brand className="text-dark" style={{ fontFamily: "Permanent Marker"}}>
                        Make That Bevy🍹
                    </Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <Link to={'/cocktails'} className="nav-link text-dark" style={{ fontFamily: "Permanent Marker"}}>
                        Cocktails
                    </Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route path='/' component={Dashboard} exact/>
                <Route path='/cocktails' component={Cocktails} />
            </Switch>
        </Router>
    );
};

export default Wrapper;