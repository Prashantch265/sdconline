import React from 'react';
import {Navbar, Nav, Button, Card, Image, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/homepage.css';
import logo from '../img/logo192.png';
// import Carousel1 from '../img/Carousel1.png';
// import Carousel2 from '../img/Carousel2.png';
// import Carousel3 from '../img/Carousel3.png';
import block1 from '../img/block1.jpg';
import block2 from '../img/img3.jpg';

class Index extends React.Component{
    render(){
        return(
            <div>
            <Navbar className="col-lg-offsets-12" expand="lg" id="navbar" variant="dark">
                <Navbar.Brand href="#home" style={{maeginBottom: '0'}}>
                    <img alt="logo" src={logo} width="50px" 
                    height="50px" 
                    className="d-inline-block mt-1" align-top=""/>
                    {''}
                    <p style={{position: 'relative', left: '60px', top: '-60px', textAlign: 'left', marginTop: '0', marginBottom: '0', fontFamily: 'Times New Roman, Times, serif'}}>
                        <span style={{display: 'block', marginBottom: '0', fontSize: '22px', color: 'midnightblue'}}>Tribhuvan University</span>
                        <span style={{display: 'block', marginBottom: '0', fontSize: '13px', color: 'red'}}>BIM Program</span>
                        <span style={{display: 'block', fontSize: '18px', fontWeight: 'bold', color: 'midnightblue'}}>Shanker Dev Campus</span>
                    </p>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Button variant="primary"  style={{position: 'relative', top: '-25px'}}>
                        <Link to="/login" style={{textDecoration: 'none', color: 'white'}}>Sign in</Link>
                    </Button>
                </Nav>
            </Navbar>

            <hr style={{position: 'relative', top: '-16px'}}/>


            {/* <Container>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src={Carousel1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Carousel2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Carousel3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </Container> */}
            
            <Container fluid>
            <div className="row">
            <div className="col-sm-6 ml-auto mt-5">
                <h2>Ready to learn??
                    Ready to explore ??</h2>
                <p>
                    We have a perfect solution for you to guide you through your thick and thins. 
                    This is an online portal of Shanker Dev Campus for BIM program where students can continue their academic life even during this lockdown. 
                </p>
                <Button variant="primary">
                    <Link to="/login" style={{textDecoration: 'none', color: 'white'}}>Enroll now</Link>
                </Button> 
            </div>
            <div className="col-sm-5 mt-3 ml-auto">
            <Image src={block1} alt="" fluid/>
            </div>
            </div>

            <hr style={{border: '2px solid green'}}/>

            <div className="row">
                <div className="col-sm-4 ml-auto mt-2" style={{position: 'relative', left: '7px'}}>
                    <Image src={block2} alt="" fluid/>
                </div>
            <div className="col-sm-7 mt-5 ml-auto">
            <h2>About</h2>
            <p> The main aim of designing this portal is to engage the students in their acedamic life even during the time of pandemic 
            which will not only help them to build up their career but also help them to face different type of situation. 
            Online courses give students the opportunity to plan study time around the rest of their day, instead of the other way around. Students can study and work at their convenience. 
            Course material is always accessible online, making special library trips unnecessary.
            </p>
            </div>
            </div>
            </Container>

            <div className="row mt-5 mr-auto">
                <hr className="col-md-4" style={{border: '1px solid grey'}}/>
                <h3 className="col-md-4" style={{textAlign: 'center'}}>Features</h3>
                <hr className="col-md-4" style={{border: '1px solid grey'}}/>
            </div>

            <Container fluid className="mt-3 mb-5">
            <div className="row mb-3">
                <Card bg="light" className="col-md-3  ml-auto mr-auto" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Text Book</Card.Title>
                        <Card.Text>
                        Text books related to courses are availabel in (*.pdf).
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="light" className="col-md-3  ml-auto mr-auto" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Video Lectures</Card.Title>
                        <Card.Text>
                        Lectures made and uploaded by faculty members on topics of their respective subjects.  
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="light" className="col-md-3  ml-auto mr-auto" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Supplementary Resources</Card.Title>
                        <Card.Text>
                        Resources like pdf, doc, ppt that is supplementary to the lectures provided by faculty members.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="row mb-3">
                <Card bg="light" className="col-md-3  ml-auto mr-auto" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Excercise</Card.Title>
                        <Card.Text>
                        Assignments and Excercises distribution and submission.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="light" className="col-md-3  ml-auto mr-auto" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Q&A</Card.Title>
                        <Card.Text>
                        Read and Post Questions on where you got stuck to your respective teacher.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="light" className="col-md-3  ml-auto mr-auto" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Download Lectures and Resources</Card.Title>
                        <Card.Text>
                        Download Lectures and Resources to make it available offline.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </Container>
            </div>
        );
    }
}

export default Index;