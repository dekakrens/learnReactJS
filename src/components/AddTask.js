import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState({
    text: "",
    day: "",
    reminder: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!task.text) {
      alert("Please add task");
      return;
    }
    onAdd(task);
    setTask({ text: "", day: "", reminder: false });
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={task.text}
          onChange={(val) => setTask({ ...task, text: val.target.value })}
        ></input>
      </div>

      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={task.day}
          onChange={(val) => setTask({ ...task, day: val.target.value })}
        ></input>
      </div>

      <div className="form-control form-control-check">
        <label> Set Reminder</label>
        <input
          type="checkbox"
          checked={task.reminder}
          value={task.reminder}
          onChange={(val) =>
            setTask({ ...task, reminder: val.currentTarget.checked })
          }
        ></input>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  );
};

export default AddTask;
