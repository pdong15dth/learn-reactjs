import PropTypes from 'prop-types';
import classnames from "classnames";
import './styles.scss'

TodoList.propTypes = {
    todolist: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todolist: [],
    onTodoClick: null,
}

function TodoList({ todoList, onTodoClick }) {
    const handleTodoList = (todo, index) => {
        if (!onTodoClick) {
            return
        }
        onTodoClick(todo, index)
    }
    return (
        <ul className="todo-list">
            {todoList.map((todo, index) => (
                <li key={todo.id} className={classnames({
                    completed: todo.status === 'completed',
                    'todo-item': true
                })} onClick={() => handleTodoList(todo, index)}>
                    {todo.title} - {todo.status}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;