import React from 'react';
import TaskListHeader from './tasklistheader.jsx';
import TaskRow from './taskrow.jsx';
import DeleteButton from './deletebutton.jsx';
import { connect } from 'react-redux';

const filterTodos = (todos, filter) => {
    let regex = new RegExp(filter, "i");
    let newTodos = todos.filter(todo => todo.todo.match(regex));
    return newTodos;
}
class TaskList extends React.Component {
    componentDidMount() {
        window.fetch('http://localhost:3000/Todos').then((response) => {
            response.json().then((todoJson) => {
                this.props.getUsers(JSON.parse(JSON.stringify(todoJson)));
            });
        })
    };
    render() {
        if(this.props.todos.length) {
            return (
                <table>
                    <tbody>
                     <TaskListHeader />
                    {
                        this.props.todos.map((todo) => {
                            return <TaskRow key={todo.id} todo={todo}/>;
                        })
                    }
                    </tbody>
                 </table>
             )
        }
       else {
           return (
               <div>
                   No todo items.
                </div>
           )
       }
    }
};


const mapStateToProps = state => {
    return {
        todos: filterTodos(state.todos, state.filter)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUsers: (todos) => {
              dispatch({
                  type: 'FETCH_SUCCESS',
                  todos
            });
        }
    };
};

TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskList;