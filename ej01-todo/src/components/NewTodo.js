import React from 'react';

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task_name: ''
    };
  }

  getTaskName = (event) => {
    const name = event.currentTarget.value;
    this.setState({ task_name: name });
  }

  render() {
    return (
      <div className="form__row">
        <label htmlFor="newTodoItem" className="form__label sr">Añadir nueva tarea</label>
        <input
            id="newTodoItem"
            name="newTodoItem"
            className="form__field"
            type="text"
            onChange={this.getTaskName}
            value={this.state.task_name} />
      </div>
    );
  }
}

export {NewTodo};
