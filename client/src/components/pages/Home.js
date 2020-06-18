import React from 'react';
import {Container, Button, Card} from 'react-bootstrap';
import DBMS from '../img/dbms.png';
import DSA from '../img/dsa.png';
import PHP from '../img/php.png';
import ECO from '../img/economics.png';
import ACC from '../img/accounting.png';
import '../css/innerclass.css';

class Home extends React.Component{

    render(){
        return(
            <Container className="col-lg-12">
                <div className="row mt-3 ml-2">
                    
                    <Card className="shadow mt-3 mr-3" style={{padding: '0px',width: '19rem' }}>
                    <div className="inner">
                    <Card.Img src={DBMS} alt="Card image" />
                    </div>
                    <Card.Body>
                        <Card.Title>
                        DBMS
                        </Card.Title>
                        <Button variant="primary">Enter</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>

                    <Card className="shadow mt-3 mr-3" style={{padding: '0px', width: '19rem'}}>
                    <div className="inner">
                    <Card.Img src={DSA} alt="Card image" />
                    </div>
                    <Card.Body>
                    <Card.Title>
                    DSA with JAVA
                        </Card.Title>
                        <Button variant="primary">Enter</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>

                    <Card className="shadow mt-3 mr-3" style={{padding: '0px', width: '19rem'}}>
                    <div className="inner">
                    <Card.Img src={PHP} alt="Card image" />
                    </div>
                    <Card.Body>
                    <Card.Title>
                    Web Technology -II
                        </Card.Title>
                        <Button variant="primary">Enter</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>

                    <Card className="shadow mt-3 mr-3" style={{padding: '0px', width: '19rem'}}>
                    <div className="inner">
                    <Card.Img src={ECO} alt="Card image" />
                    </div>
                    <Card.Body>
                    <Card.Title>
                    Economics
                        </Card.Title>
                        <Button variant="primary">Enter</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>

                    <Card className="shadow mt-3 mr-3" style={{padding: '0px', width: '19rem'}}>
                    <div className="inner">
                    <Card.Img src={ACC} alt="Card image" />
                    </div>
                    <Card.Body>
                    <Card.Title>
                        Cost and Financial Accounting
                        </Card.Title>
                        <Button variant="primary">Enter</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </div>

            </Container>
        );
    }
}

export default Home;