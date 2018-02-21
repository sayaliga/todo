import React, { Component } from 'react';
import rand from 'unique-random';
import { connect } from 'react-redux';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        let id = rand(1,10)();
        this.props.addUser({
            id,
            todo: this.name.value
        });
    }
    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <input name="name" type="text" ref={(input) => this.name = input} placeHolder='Add a new todo'></input>
                <input type="submit" value="Add"></input>
            </form>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (newTodo) => {
            dispatch({
                type: 'ADD',
                todo: newTodo
            })
        }
    }
}

Form = connect(null, mapDispatchToProps)(Form);

export default Form;