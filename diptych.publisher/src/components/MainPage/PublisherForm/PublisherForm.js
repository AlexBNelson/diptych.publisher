import { Cropper } from 'react-cropper'
import React, { Component } from 'react';
import '../../../bootstrap.css';
import ChapterCreatorContainer from './ChapterCreator/ChapterCreatorContainer';




class PublisherForm extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            chapterCount: 0,
            chapters: []
        }
    }

    handleClick(index) {
        console.log(this.state.chapters.length)

        var chapterCount = this.state.chapterCount - 1
        var chapters = this.state.chapters.splice(index, 1)

        console.log(chapters.length)

        this.setState({
            chapters: chapters,
            chapterCount: chapterCount
        })
    }

    render() {
        return (
            <div>
                {this.state.chapters.map(function (i) {
                    return (
                        <div><ChapterCreatorContainer id={i}/><button onClick={this.handleClick.bind(this, i)} key={i}>Remove Chapter</button></div>
                    );
                }, this)}
                <button onClick=
                    {() => this.setState({
                        chapterCount: this.state.chapterCount + 1,
                        chapters: this.state.chapters.concat(<div><ChapterCreatorContainer id={this.state.chapterCount+1}
                             />
                        </div>)
                    })} >
                    Add Chapter
                </button >
            </div>
        );
    }
}


export default PublisherForm