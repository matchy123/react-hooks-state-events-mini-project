import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [deletedTasks, setDeletedTasks] = useState([]);

  function handleDelete(index) {
    const updatedDeletedTasks = [...deletedTasks, index];
    setDeletedTasks(updatedDeletedTasks);
  }

  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        if (!deletedTasks.includes(index)) {
          return (
            <Task key={index} text={task.text} category={task.category} handleDelete={() => handleDelete(index)}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default TaskList;
