import { Cropper } from 'react-cropper'
import React, { Component } from 'react';
import '../../bootstrap.css';
import './cropper.css'
import ChapterCreator from './PublisherForm/ChapterCreator.js'


class PublisherForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chapterCount: 3,
            chapters: []
        }
    }

    addChapter() {
        this.setState({
            chapterCount: this.state.chapterCount + 1,
            chapters: this.state.chapters.push(<ChapterCreator />)
        })
    }

    removeChapter() {
        this.setState({
            chapterCount: this.state.chapterCount - 1,
            chapters: this.state.chapters.pop(<ChapterCreator />)
        })}

    render() {
       var chapters = this.state.chapters
        return (
            
            { chapters }

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