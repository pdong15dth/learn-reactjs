import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import queryString from 'query-string';

ListPage.propTypes = {};

const initTodoList = [
  {
    id: 1,
    title: 'Eat',
    status: 'new',
  },
  {
    id: 2,
    title: 'Sleep',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Code',
    status: 'new',
  },
];
function ListPage(props) {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    return params.status || 'all';
  });

  useEffect(() => {
    setFilteredStatus(queryString.parse(location.search).status || 'all');
  }, [location.search]);

  const handleTodoList = (todo, index) => {
    //clone current array to the new one
    const newTodoList = [...todoList];
    console.log(newTodoList);
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };
    console.log(todoList);
    setTodoList(newTodoList);
    //update todo list
  };

  const handleShowAllClick = () => {
    //setFilteredStatus('all')
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompletedClick = () => {
    //setFilteredStatus('completed')
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewClick = () => {
    //setFilteredStatus('new')
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleTodoFormSubmit = (values) => {
    console.log("Form Submit " + values)
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: values.status
    }
    const newTodoList = [...todoList, newTodo]
    setTodoList(newTodoList)
  }

  const renderdTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  console.log(renderdTodoList);
  return (
    <div>
      <h3>What To do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
      <h3>Todo List</h3>
      <TodoList todoList={renderdTodoList} onTodoClick={handleTodoList}></TodoList>
      <div>
        <button onClick={handleShowAllClick}>Show all</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
