import { Cropper } from 'react-cropper'
import React, { Component } from 'react';
import '../../../bootstrap.css';


                class ImageSelector extends Component {
                    constructor(props) {
                        super(props);
                        this.handleSubmit = this.handleSubmit.bind(this);
                        this.fileInput = React.createRef();
                    }

                    handleSubmit(event) {
                        event.preventDefault();
                        alert(
                            `Selected file - ${
                            this.fileInput.current.files[0].name
                            }`
                        );
                    }

                    render() {
                        return (
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Upload file:
          <input type="file" ref={this.fileInput} />
                                </label>
                                <br />
                                <button type="submit">Submit</button>
                                <h3>Text: </h3>
                                <textarea rows="4" cols="50">
                                </textarea>
                            </form>
                        );
                    }
                }
export default ImageSelector