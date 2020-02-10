import React from 'react';
import { connect } from 'react-redux';
import { addFolder } from '../actions/index';
import styles from '../styles/AddFolder.module.scss';

class AddFolder extends React.Component {
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

        let nextFolderId = localStorage.getItem("maxFolderId");
        nextFolderId !== null ? nextFolderId++ : nextFolderId = 0;
        localStorage.setItem("maxFolderId", nextFolderId);

        this.props.dispatch(addFolder(nextFolderId, this.inputRef.current.value));
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    render() {
        const addFolderIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAvUlEQVRIie2UTQ7CIBBGnz8rb+Mt2hqv4TGMmt4Ke
        xl7gUa3TXBRTAALQqGJJr5kNpR+r8ykwJ9vogJaQDrqlCrwhWeRfAoPrRYo5xRI4OYTpGLkLDMEevl9wXqGzC2wH3uQa8gGOVpUAALoVAmGW+GNKSc44v4XLqmCwgpcqfVeWzNOEisQAYJGfyHkspPARu3vrGCbHr
        jrQz4oSSiLiL2TuBLZoljKAMEuRQBwxj2rOjX8RcXQioeqBu3Ln4QChU8M4+FlAAAAAElFTkSuQmCC`;

        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <input className={styles.input} value={this.state.inputValue} onChange={this.handleChange} ref={this.inputRef} placeholder="Enter folder name"></input>
                <button className={styles.submit} type="submit">
                    <img src={addFolderIconSrc} alt="folder icon"/>
                </button>
            </form>
        );
    }
}

AddFolder = connect()(AddFolder);

export default AddFolder;