import { Cropper } from 'react-cropper'
import React, { Component } from 'react';
import '../../bootstrap.css';
import './cropper.css'
import React, { Component } from 'react';
import '../../bootstrap.css';


class ImageSelector extends Component {

    render() {
        return (

            <input type="file"> Choose Image</input>
            <Cropper src = 'http://fengyuanchen.github.io/cropper/img/picture.jpg' />
        );
    }
}

export default ImageSelector