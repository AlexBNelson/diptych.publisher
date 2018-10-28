import { Cropper } from 'react-cropper'
import React, { Component } from 'react';
import '../../bootstrap.css';
import ChapterCreator from './PublisherForm/ChapterCreator.js'


class PublisherForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chapterCount: 3,
            chapters: [<ChapterCreator />, <ChapterCreator />, <ChapterCreator />]
        }
    }

    render() {

        var chapters = this.state.chapters

        return (
            
            <div>
                {chapters}
                <button onClick=
                    {() => this.setState({
                    chapterCount: this.state.chapterCount + 1,
                    chapters: this.state.chapters.concat(<ChapterCreator />)
            }) } > 
                Add Chapter
                </button >
                <button onClick=
                    {() => this.setState({
                    chapterCount: this.state.chapterCount - 1,
                    chapters: this.state.chapters.concat(<ChapterCreator />)
                    })}>
                Remove Chapter
                </button>
                </div>
            

        );
    }
}

export default PublisherForm