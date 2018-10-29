import { Cropper } from 'react-cropper'
import React, { Component } from 'react';
import '../../bootstrap.css';
import ChapterCreator from './PublisherForm/ChapterCreator/ChapterCreator.js'
import ChapterCreatorContainer from './PublisherForm/ChapterCreator/ChapterCreatorContainer';


class PublisherForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chapterCount: 3,
            chapters: [<ChapterCreatorContainer />, <ChapterCreatorContainer />, <ChapterCreatorContainer />]
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
                    chapters: this.state.chapters.concat(<ChapterCreatorContainer />)
            }) } > 
                Add Chapter
                </button >
                <button onClick=
                    {() => this.setState({
                    chapterCount: this.state.chapterCount - 1,
                    chapters: this.state.chapters.concat(<ChapterCreatorContainer />)
                    })}>
                Remove Chapter
                </button>
                </div>
            

        );
    }
}

export default PublisherForm