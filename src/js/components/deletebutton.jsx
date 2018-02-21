import React from 'react';
import { connect } from 'react-redux';

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this._handleOnClick = this._handleOnClick.bind(this);
    }
    _handleOnClick() {
        this.props.deleteUser(this.props.id);
    }
    render() {
        return (
            <span onClick={this._handleOnClick}>X</span>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (id) => {
            dispatch({
                type: 'DELETE',
                id
            })
        }
    }
};

DeleteButton = connect(null, mapDispatchToProps)(DeleteButton);

export default DeleteButton;