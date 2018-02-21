import React from 'react';
import DeleteButton from './deletebutton.jsx';

const TaskRow = (props) => {
    let todo = props.todo;
    return (
        <tr>
            <td>
                {todo.id}
            </td>
            <td>
                {todo.todo}
            </td>
            <td>
                <DeleteButton id={todo.id}/>
            </td>
        </tr>
    )
}

export default TaskRow;