import React from 'react';
import {connect} from 'react-redux';
import {addFolder, addAlert} from '../actions/index';
import styles from '../styles/AddFolder.module.scss';

class AddFolder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {inputValue: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.inputValue.trim() === "") {
            this.props.onAlert("warning", "Enter folder name");
            this.setState({inputValue: ""});
            return;
        }

        if (this.props.folderNames.has(this.state.inputValue.trim())) {
            this.props.onAlert("warning", "A folder with the same name already exists");
            this.setState( state => ({
                inputValue: state.inputValue.trim()
            }));
            return;
        }

        const folderId = `f${new Date().getTime().toString(16)}`;

        this.props.onNewFolder(folderId, this.state.inputValue.trim());

        this.setState({inputValue: ""});
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    addFolderIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAvUlEQVRIie2UTQ7CIBBGnz8rb+Mt2hqv4TGMmt4Kexl7gUa3TXB
    RTAALQqGJJr5kNpR+r8ykwJ9vogJaQDrqlCrwhWeRfAoPrRYo5xRI4OYTpGLkLDMEevl9wXqGzC2wH3uQa8gGOVpUAALoVAmGW+GNKSc44v4XLqmCwgpcqfVeWzNOEisQAYJGfyHkspPARu3vrGCbHrjrQz4oSSiLiL2T
    uBLZoljKAMEuRQBwxj2rOjX8RcXQioeqBu3Ln4QChU8M4+FlAAAAAElFTkSuQmCC`;

    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <input className={styles.input} value={this.state.inputValue} onChange={this.handleChange} placeholder="Enter folder name"></input>
                <button className={styles.submit} type="submit">
                    <img src={this.addFolderIconSrc} alt="folder icon"/>
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    let folderNames = new Set();

    state.folders.forEach(folder => {
        folderNames.add(folder.name);
    });

    return {folderNames};
}

const mapDispatchToProps = dispatch => {
    return {
        onNewFolder: (folderId, folderName) => dispatch(addFolder(folderId, folderName)),
        onAlert: (alertTypr, text) => dispatch(addAlert(alertTypr, text))
    };
}

AddFolder = connect(mapStateToProps, mapDispatchToProps)(AddFolder);

export default AddFolder;