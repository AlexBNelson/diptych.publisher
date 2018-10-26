import { Cropper } from 'react-cropper'
import React, { Component } from 'react';
import '../../bootstrap.css';
import './cropper.css'


class PublisherForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chapterCount: 3
        }
    }

    addChapter() {
        this.setState({
            chapterCount: this.state.chapterCount + 1
        })
    }

    removeChapter() {
        this.setState({
            chapterCount: this.state.chapterCount - 1
        })}

    render() {

        var chapters = []
        
        for(let i = 0; i < this.state.chapterCount; i++) {
            chapters.push(<h1> Hello </h1>)
        }

        return (
            
                <Cropper src='http://fengyuanchen.github.io/cropper/img/picture.jpg' />
            <button onclick="addChapter()"> 
                Add Chapter
                </button>
            <button onclick="removeChapter()">
                Remove Chapter
                </button>
            

        );
    }
}

export default PublisherForm