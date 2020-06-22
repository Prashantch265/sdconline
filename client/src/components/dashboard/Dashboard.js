import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Home from '../pages/Home';
import Events from '../pages/Events';

export default function Dashboard(){

    return (
        <div>
            <Container className="col-lg-12">
            <Switch>
                <Route exact path="/dashboard">
                    <Home/>
                </Route>
                <Route path="/dashboard/events">
                    <Events/>
                </Route>
            </Switch>  
            </Container>  
        </div>
    );
}

