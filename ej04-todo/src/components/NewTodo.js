import React, { useState } from 'react';
import { addAction } from "../state/actions";
import { connect } from "react-redux";
import { getNextID } from '../utils/lists';

function NewTodo(props) {
  const [task_name, setTask_name] = useState('');

  const handleNewTodoAddition = event => {
    const taskName = task_name.trim();
    const newID = getNextID(props.list);
    if (taskName) {
      console.log(`La nueva tarea se llama ${taskName}`)
     props.add({
       id: newID,
       creation_date: new Date().toISOString(),
       label: taskName,
       done: false,
       completion_date: null
     });
     setTask_name('')
    } else {
      console.log('Que qué?');
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    handleNewTodoAddition()
  }


  const getTaskName = event => {
    const name = event.currentTarget.value;
    setTask_name(name);
  }
  return (
    <form action="" className="app__add-todo-form form" onSubmit={ handleSubmit }>
      <div className="form__row">
        <label htmlFor="newTodoItem" className="form__label sr">Añadir nueva tarea</label>
        <input id="newTodoItem" name="newTodoItem" className="form__field" type="text" onChange={getTaskName}
               value={task_name}/>
      </div>
      <div className="form__row form__row--action">
        <button className="form__button form__add" type="button" onClick={handleNewTodoAddition}>Añadir</button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return { list: state.list};
};

const mapDispatchToProps = (dispatch) => {
  return { add: (obj) => dispatch(addAction(obj)) };
};

export default connect(mapStateToProps,mapDispatchToProps)(NewTodo);
