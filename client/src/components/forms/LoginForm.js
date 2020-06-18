import React from 'react';
import { Form, Button, Container, Card} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import logo from '../img/logo192.png';
import '../css/loginForm.css';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';
import classnames from 'classnames';

class LoginForm extends React.Component{
    constructor(){
        super();
        this.loginForm = this.loginForm.bind(this);
        this.state = {
            err: {}
        };
    }
    
    componentWillReceiveProps(nextProps){
        if (nextProps.auth.isAuthenticated) {
            //push user to dashboard
            this.props.history.push('/dashboard');
        }
        if (nextProps.err) {
            this.setState({
                err: nextProps.err
            });
        }
    }

    componentDidMount(){
        //if logged in and user navigates to login page then redirect to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    loginForm() {
        const { register, handleSubmit, errors } = useForm();
        const { err } = this.state;
        const onSubmit = userData => {
            console.log(userData);
            this.props.loginUser(userData);
            // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
        };
    
        return(
            <Container className="col-md-6 col-xl-4 my-5">
                <Card bg="light" className="p-4">
                    <Card.Img className="d-block mt-3 mx-auto" style={{width: '100px'}} src={logo} />
                    <Card.Title className="mt-3 text-center" style={{fontSize:'1.5rem'}} >Login</Card.Title>
                    
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group  controlId="std_id">
                            <Form.Label >Student ID</Form.Label>
                            <Form.Control type="text" placeholder="XX/07X" name="std_id"
                            err={err.std_id}
                            className={classnames("", {
                                invalid: err.std_id || err.std_idnotfound
                              })}
                            ref={register({ required : true })}/>
                            {errors.std_id && errors.std_id.type === "required" && (<p className="error">ID is required</p>)}
                            <p className="error">
                                {err.std_id}
                                {err.std_idnotfound}
                            </p>
                        </Form.Group>
    
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" name="email"
                            err={err.email}
                            className={classnames("", {
                                invalid: err.email || err.emailnotfound
                              })}
                            ref={register({ required : true })}/>
                            {errors.email && errors.email.type === "required" && (<p className="error">E-mail is required</p>)}
                            <p className="error">
                                {err.email}
                                {err.emailnotfound}
                            </p>
                        </Form.Group>
    
                        <Form.Group  controlId="name">
                            <Form.Label>Student name</Form.Label>
                            <Form.Control type="text" placeholder="full name" name="name"
                            err={err.name}
                            className={classnames("", {
                                invalid: err.name || err.namenotfound
                              })}
                            ref={register({ required : true, minLength : 6, maxLength : 20})}/>
                            {errors.name && errors.name.type === "required" && (<p className="error">Name is required</p>)}
                            {errors.name && errors.name.type === "minLength" && (<p className="error">must be minimum 6 letter</p>)}
                            {errors.name && errors.name.type === "maxLength" && (<p className="error">max. 20 letter</p>)}
                            <p className="error">
                                {err.name}
                                {err.namenotfound}
                            </p>
                        </Form.Group>
                         <div className="d-flex align-items-center justify-content-between">
                         <Form.Group  controlId="remember_me" className="mb-0">
                        <Form.Check type="checkbox" label="Remember me" name="checkbox"
                        ref={register}/>
                        </Form.Group>
                        <Button  variant="primary" type="submit">Submit</Button>
                        </div>       
                       
                            
                    </Form>
                </Card>
            </Container>
        );
    }

    render(){
        
    return <this.loginForm/>;
    }

}



LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    err: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    err: state.err
});

export default connect(
    mapStateToProps,
    { loginUser }
  )(withRouter(LoginForm));