import React from 'react';
import { Container } from 'react-bootstrap';
import {Route, Switch, useRouteMatch, useParams} from 'react-router-dom';
import Navbar from '../toolbar/Navbar';
import Sidebar from '../toolbar/Sidebar';
import Home from '../pages/Home';
import Events from '../pages/Events';

export default function Dashboard(){
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path } = useRouteMatch();
    console.log('inside dashbaoar',path)

    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    function Content(){
        if (topicId === 'events'){
            return <Events/>;
        }
    }

    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <Container className="col-lg-12" id='main'>
                <Switch>
                    <Route exact path={path}>
                        <Home/>
                    </Route>
                    
                    <Route path={`${path}/:topicId`}>
                        <Content />
                    </Route>
                </Switch>
            </Container>
        </div>
    );
}

