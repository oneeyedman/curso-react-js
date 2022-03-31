import React from 'react';
import {addAction} from "../state/actions";
import {connect} from "react-redux";

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task_name: ''
    };
  }

  getTaskName = (event) => {
    const name = event.currentTarget.value;
    this.setState({task_name: name});
  }


  handleNewTodoAddition = (event) => {
    const taskName = this.state.task_name.trim();

    if (taskName) {
      console.log(`La nueva tarea se llama ${taskName}`)
     this.props.add(taskName);
    } else {
      console.log('Que qué?');
    }
  }

  render() {
    return (<form action="" className="app__add-todo-form form">
      <div className="form__row">
        <label htmlFor="newTodoItem" className="form__label sr">Añadir nueva tarea</label>
        <input id="newTodoItem" name="newTodoItem" className="form__field" type="text" onChange={this.getTaskName}
               value={this.state.task_name}/>
      </div>
      <div className="form__row">
        <button className="form__button form__add" type="button" onClick={this.handleNewTodoAddition}>Añadir</button>
      </div>
    </form>);
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return { add: (text) => dispatch(addAction(text)) };
};

export default connect(mapStateToProps,mapDispatchToProps)(NewTodo);
