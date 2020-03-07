import React from 'react';
import {connect} from 'react-redux';
import {addNote, saveNoteEdit, endNoteEdit, addAlert} from '../actions/index';
import styles from '../styles/AddNote.module.scss';

class AddNote extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.editNote) {
            this.state = {
                inputValue: this.props.editNote.text,
                isOpen: true
            }
        } else {
            this.state = {
                inputValue: "",
                isOpen: false
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleFormHandleClick = this.handleFormHandleClick.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.editNote && this.props.editNote) {
            this.setState({
                inputValue: this.props.editNote.text,
                isOpen: true
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.inputValue.trim() === "") {
            this.props.onAlert("warning", "Note is empty");
            this.setState({inputValue: ""});
            return;
        }

        if (this.props.editNote) {
            this.props.onSaveNoteEdit(this.props.editNote.noteId, this.state.inputValue);
        } else {
            const noteId = `n${new Date().getTime().toString(16)}`;

            this.props.onNewNote(this.props.folderId, noteId, this.state.inputValue);
        }

        this.setState({
            inputValue: "",
            isOpen: false
        });
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    handleCancel() {
        this.setState({inputValue: ""});

        if (this.props.editNote) this.props.onEndNoteEdit(this.props.editNote.noteId);
    }

    handleFormHandleClick() {
        this.setState( state => ({
            isOpen: !state.isOpen
        }))
    }

    addNoteIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAw0lEQVRIie2Vuw3CMBRFD5+CDVAoWYAlKEAskwHSMgKr0FACPQ0CW
    sgMaaHIQwTjYPs5VOFKV5H8ucdOnOcezSsBdsAY2PR/AMiAibjTZHACpMAAWAN34GAOWgC5dLpcANNK+FnalwJZSfubbpHhT6d12wwNHwJHo/8CjLSAqPAqwCVVuC9AHe4LMD/oiddp2QPbWMC3lTvn
        hwBsr+VjvqZUBP3+XQUgSH9ACwG5PH2qqs1QlvxazfG/E2y+AjPFRtusBwCphbcWtqpBAAAAAElFTkSuQmCC`;
    doubleDownIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABRUlEQVRIie3US0scURCG4YdsRuOIMYiKCM4ETeJt459240YX3j
    UxCyGIZBE0G8EL3v9EuzjVdC+k5+IEBP3gQPfpr96qrlPdvOu1qYE1jHQR+wnLmKgyrSPDH3zuAD6E3xG7UWUcxUmHSQbwK2IupC5UagynEXCM4Rbwn+G9RLONgsAkziLwEIPPeD7iR3iu8KVdeK4pnAfgIKptBf/QCtq
    QDno87psByLCH/li7sXeN6fB+xV8sVSVYi8B/inGbDlCGrVgZbgOaw29if6UqwTCOwniumIiZEiDDA+afgR+gXpWA9MHkM32h6O+3qPoRC6W9juCtkizGglnchWdHOpuOVFdMyh3mSs/KlW93A881IE1Phnup79+lVuWH
    3jW8nGRf8SYPcb2JvpfCc/VLrcinqKfwXDWsSn/LnsPLSWr/C/5G9QRgEF0XPzDmZAAAAABJRU5ErkJggg==`;
    doubleUpIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABPElEQVRIie3TSysFcRjH8U82LodcEpJyyCVh403b2LBwvy+UJKVQ
    Ui4dxJsYi3mmM8mZ42iUhV89NfP8n//3mecy/KtktYf9GnwVm+goG96FbSRhW+gsC17BfoBf8RbPpVTyGT6PWbwooZJenAToCdO5s1k8x9n2T5L04TQAD5gM/2IYzEmrSrDTSpJG8Kw171gI30yukiN0N4P34ywu3GIs/
    NM5UCId9HwuSS38x82SrEXgDUbDN5UDbIUlUc3MF0lWihJUsY6ReJ+QDjjBnrTPndgNXy0+IKvyEktFCfIax716fyu5sy4cqG9YNqe278LHcBeAE/R8EdMoSVMN4zounksH30gVHEbso7SlhRrCVVy4wMA3Pqgi3Z5sra
    tFwestwjP1qv87G0WBVemqDrYAz9SHZfX1/tcf0QcbuF0NXFnSaQAAAABJRU5ErkJggg==`;
    cancelIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjklEQVRIie2Vyw2AIBQER3uQaIlarhwsRy+Y4AfCPuTmnEx0dwg+FH
    4MzIAz5FzIZlmAHfCixIXMHjqSDMAaHtyAqaD8nhnVQE4ilysSc3mJpLo8J/ms/CSeEH+7tozzK/GqpZX3FdKuInuh6Ra9vVDLYSwuT92TJSWjaJYocy5LLIdIkjT/XEPjH87PgwNng1K28QMLlAAAAABJRU5ErkJggg=
    =`;

    render() {
        return (
            <div className={this.state.isOpen ? styles.conatiner + " " + styles["conatiner-open"] : styles.conatiner}>
                <form className={this.state.isOpen ? styles.form + " " + styles["form-active"] : styles.form} onSubmit={this.handleSubmit}>
                    <textarea className={styles.textarea} value={this.state.inputValue} onChange={this.handleChange} placeholder="Enter note"></textarea>
                    <div className={styles.controls}>
                        <button className={styles.button} type="submit">
                            <img src={this.addNoteIconSrc} alt="note icon"/>
                        </button>
                        <div className={styles.button} onClick={this.handleCancel}>
                            <img src={this.cancelIconSrc} alt="cancel icon"/>
                        </div>
                    </div>
                </form>
                <div className={styles["form-handle"]} onClick={this.handleFormHandleClick}>
                    <img src={this.state.isOpen ? this.doubleUpIconSrc : this.doubleDownIconSrc} alt="handle icon"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let editNote = state.notes.find(note => note.edit === true && note.folderId === ownProps.folderId);
    return {editNote};
}

const mapDispatchToProps = dispatch => {
    return {
        onNewNote: (folderId, noteId, text) => dispatch(addNote(folderId, noteId, text)),
        onSaveNoteEdit: (noteId, text) => dispatch(saveNoteEdit(noteId, text)),
        onEndNoteEdit: noteId => dispatch(endNoteEdit(noteId)),
        onAlert: (alertTypr, text) => dispatch(addAlert(alertTypr, text))
    }
}

AddNote = connect(mapStateToProps, mapDispatchToProps)(AddNote);

export default AddNote;