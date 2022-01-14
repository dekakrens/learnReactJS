import { Task } from ".";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((item) => {
        return (
          <Task
            key={item.id}
            task={item}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </>
  );
};

export default Tasks;
