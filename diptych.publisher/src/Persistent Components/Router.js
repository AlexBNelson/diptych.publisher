import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import App from '../App.js';
import Home from '../Home.js'
import MainPage from '../components/MainPage.js';


const HomePage = () => (
    <div>
        <Home />
        </div>
);



class Router extends Component {
    
    render() {
        return (
            

            <Locations>
                <Location path="/" handler={HomePage} />
            </Locations>

        );
    }
}

export default Router;