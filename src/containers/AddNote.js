import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/index';
import styles from '../styles/AddNote.module.scss';

class AddNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {inputValue: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const noteId = `n${new Date().getTime().toString(16)}`;

        this.props.dispatch(addNote(this.props.folderId, noteId, this.state.inputValue));

        this.setState({inputValue: ""});
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    render() {
        const addNoteIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAw0lEQVRIie2Vuw3CMBRFD5+CDVAoWYAlKEAskwHSMgK
        r0FACPQ0CWsgMaaHIQwTjYPs5VOFKV5H8ucdOnOcezSsBdsAY2PR/AMiAibjTZHACpMAAWAN34GAOWgC5dLpcANNK+FnalwJZSfubbpHhT6d12wwNHwJHo/8CjLSAqPAqwCVVuC9AHe4LMD/oiddp2QPbWMC3lTvn
        hwBsr+VjvqZUBP3+XQUgSH9ACwG5PH2qqs1QlvxazfG/E2y+AjPFRtusBwCphbcWtqpBAAAAAElFTkSuQmCC`;

        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <textarea className={styles.textarea} value={this.state.inputValue} onChange={this.handleChange} placeholder="Enter note"></textarea>
                <button className={styles.submit} type="submit">
                    <img src={addNoteIconSrc} alt="note icon"/>
                </button>
            </form>
        );
    }
}

AddNote = connect()(AddNote);

export default AddNote;