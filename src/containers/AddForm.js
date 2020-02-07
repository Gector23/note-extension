import React from 'react';
import { connect } from 'react-redux';
import { addFolder, addNote} from '../actions/index';

class AddForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {inputValue: ""};
        this.inputRef = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({inputValue: ""});

        if (this.props.folderId === undefined) {
            let nextFolderId = localStorage.getItem("maxFolderId");
            nextFolderId !== null ? nextFolderId++ : nextFolderId = 0;
            localStorage.setItem("maxFolderId", nextFolderId);

            this.props.dispatch(addFolder(nextFolderId, this.inputRef.current.value));
        } else {
            let nextNoteId = localStorage.getItem("maxNoteId");
            nextNoteId !== null ? nextNoteId++ : nextNoteId = 0;
            localStorage.setItem("maxNoteId", nextNoteId);

            this.props.dispatch(addNote(this.props.folderId, nextNoteId, this.inputRef.current.value));
        }
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.inputValue} onChange={this.handleChange} ref={this.inputRef}></input>
                <button type="submit">Add</button>
            </form>
        );
    }
}

AddForm = connect()(AddForm);

export default AddForm;