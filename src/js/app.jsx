import React from 'react';
import ReactDom from 'react-dom';
import TaskList from './components/tasklist.jsx';
import FilterBar from './components/filterbar.jsx'
import Form from './components/addnew.jsx';
import todoReducer from '../js/reducers/todoReducer';
import filterReducer from '../js/reducers/filterReducer';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

let reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});
let store = createStore(reducer);

class App extends React.Component {
    render() {
        return (
            <div>
                <Form />
                <FilterBar />
                <hr />
                <TaskList />
            </div>
        )
    }
};

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);