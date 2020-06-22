import React from 'react'
import Navbar from '../components/toolbar/Navbar'
import Sidebar from '../components/toolbar/Sidebar'
// import { Route, Redirect} from 'react-router-dom'
// import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
// import Login from '../components/pages/Loginpage'


function AuthLayout(props){
  return(
    <div>
      <Navbar/>
      <Sidebar/>
        <div>
            {props.children}
        </div>
      </div>
  );
}

// const AuthLayout = ({auth,...rest}) => (
//   <Route
//     {...rest}
//     render={props =>
//       auth.isAuthenticated === true ? (
//         <Layout />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
  // const isAuthenticated = auth.isAuthenticated;
  //       if(isAuthenticated){
  //         props => {
  //           return(
  //             <div>
  //                   <Navbar/>
  //                   <Sidebar/>
  //                   <div>
  //                       {props.children}
  //                   </div>
  //               </div>
  //           );
  //       }
  //         }
  //       else {
  //           return <Login />;
  //       }
// );
    

  // AuthLayout.propTypes = {
  //   auth: PropTypes.object.isRequired
  // };
  
  // const mapStateToProps = state => ({
  //   auth: state.auth
  // });




export default AuthLayout;