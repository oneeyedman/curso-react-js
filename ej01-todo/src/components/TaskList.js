function TaskList(props) {
  return (
    <ul className="app__todo-list">
      {props.list.map(task => <li className="app__todo-item" key={task}>{ task }</li>)}
    </ul>
  );
}

export {TaskList};
