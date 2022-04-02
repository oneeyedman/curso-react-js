import { connect } from "react-redux";
import { completeAction, toggleCompletionAction } from "../state/actions";
import { formatDate } from "../utils/date";

function Task(props) {
  const { label, id, done, completed_date } = props;
  const handleStatusChange = event => {
    const taskID = event.currentTarget.id;
    props.toggle(taskID);
  }
  return (
    <div className={`task ${done ? 'task--done':''}`}>
      <input id={ id } name="tasks" className="task__field" type="checkbox" onChange={handleStatusChange} checked={done} />
      <label htmlFor={ id } className="task__label">{ label }</label>
      {done && <time dateTime={ completed_date } className="task__completion-date">{ formatDate(completed_date) }</time>}

      <button type="button" className="task__delete-me">Borrar tarea</button>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    complete: (id) => dispatch(completeAction(id)),
    toggle: (id) => dispatch(toggleCompletionAction(id)),
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(Task);
