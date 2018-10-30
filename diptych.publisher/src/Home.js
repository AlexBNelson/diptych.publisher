import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuidePane from './components/MainPage/GuidePane.js'
import PublisherForm from './components/MainPage/PublisherForm/PublisherForm.js'

class Home extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <GuidePane />
                    </div>
                    <div class="col-6">
                        <PublisherForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
