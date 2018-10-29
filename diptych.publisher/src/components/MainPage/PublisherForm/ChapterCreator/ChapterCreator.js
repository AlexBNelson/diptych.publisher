import { Cropper } from 'react-cropper'
import React, { Component } from 'react';
import '../../../../bootstrap.css';
import { removeImageUrl } from '../../../../actions/index.js'
import { connect } from 'react-redux'


                class ChapterCreator extends Component {
                    constructor(props) {
                        super(props);
                        this.handleSubmit = this.handleSubmit.bind(this);
                        this.handleRemove = this.handleRemove.bind(this);
                        this.fileInput = React.createRef();
                    }

                    componentDidMount() {
                    }

                    handleSubmit(event) {
                        event.preventDefault();
                        alert(
                            `Selected file - ${
                            this.fileInput.current.files[0].name
                            }`
                        );
                    }

                    handleRemove(event) {
                        event.preventDefault();

                        const { dispatch } = this.props;
                        dispatch(removeImageUrl(this.props.id))
                    }

                    render() {
                        return (
                            <div>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Upload file:
          <input type="file" ref={this.fileInput} />
                                </label>
                                <br />
                                <button type="submit">Submit Image</button>
                                <h3>Text: </h3>
                                <textarea rows="4" cols="50">
                                </textarea>
                            </form>
                            <form onSubmit={this.handleRemove}>
                                <button type="submit">Remove Chapter</button>
                                </form>
                                </div>
                        );
                    }
}
export default connect()(ChapterCreator)