import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Events extends React.Component{
    state = {
        date: new Date()
    }

    onChange = date => this.setState({date});

    render(){
        return(
            <Container>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                    <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    />
                    </div>
                    <div className="col-md-6">
                    <Card>
                        <Card.Header>Events</Card.Header>
                        <ListGroup>
                            <ListGroup.Item></ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Events;