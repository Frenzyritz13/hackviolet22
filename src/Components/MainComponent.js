import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    render(){
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={ Home } />
                        <Route path="/login" component={Login } />
                        <Route path="/signup" component={ Signup } />
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;