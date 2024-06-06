import './List.css';
import TodoItem from './TodoItem';
import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from '../App';

const List = () => {
  const [search, setSearch] = useState('');
  const todos = useContext(TodoStateContext);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  const { totalCount, donCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const donCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - donCount;

    return {
      totalCount,
      donCount,
      notDoneCount,
    };
  }, [todos]);

  // const { totalCount, donCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 👍</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {donCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
