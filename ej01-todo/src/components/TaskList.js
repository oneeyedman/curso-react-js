import { connect } from 'react-redux';
import Task from './Task';


function TaskList(props) {
  return (
    <ul className="app__todo-list">
      {props.list.map(task => <li className="app__todo-item" key={task.id}><Task {...task} /></li>)}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return { list: state.list };
}


export default connect(mapStateToProps)(TaskList);
