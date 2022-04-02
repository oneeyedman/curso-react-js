import { connect } from "react-redux";
import { completeAction } from "../state/actions";
import { formatDate } from "../utils/date";

function Task(props) {
  const { label, id, done, completed_date } = props;
  const handleStatusChange = event => {
    const taskID = event.currentTarget.id;
    props.complete(taskID);
  }
  return (
    <div className={`task ${done ? 'task--done':''}`}>
      <input id={ id } name="tasks" type="checkbox" onChange={handleStatusChange} checked={done} />
      <label htmlFor={ id }>{ label }</label>
      {done && <time dateTime={ completed_date }>{ formatDate(completed_date) }</time>}
    </div>
  );
}



const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return { complete: (id) => dispatch(completeAction(id)) };
};

export default connect(mapStateToProps,mapDispatchToProps)(Task);
