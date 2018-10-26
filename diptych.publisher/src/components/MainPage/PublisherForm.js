import { Cropper } from 'react-cropper'
import React, { Component } from 'react';
import '../../bootstrap.css';
import './cropper.css'


class PublisherForm extends Component {

    render() {

        var images = []

        var i

        for (int i = 0; i < 4; i++) {
            images.push
        }
        return (

            <form>
                <Cropper src='http://fengyuanchen.github.io/cropper/img/picture.jpg' />
            </form>

        );
    }
}

export default PublisherForm