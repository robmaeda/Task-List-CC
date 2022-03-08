import React from 'react';
import SingleTask from './SingleTask';
import { Tasks } from './TaskListContainer';

interface Props {
  person: string;
  index: number;
  color: string;
  tasks: Tasks;
  setTasks: React.Dispatch<React.SetStateAction<Tasks>>;
  names: string[];
}

const TaskList: React.FC<Props> = ({person, index, color, tasks, setTasks, names}) => {
  const num = index;
  const renderTasks = tasks[person];

  const addTask = () => {
    const ask = prompt("enter task:");

    if(ask !== null) {
      renderTasks.push(ask);
      setTasks({...tasks, renderTasks});
    }
  }

  return (
    <div className='tasklist'>
      <div className='name-container' style={{backgroundColor:color}}>
        {person}
      </div>
      <div className='singletask-container'>
        {renderTasks?.map((task, index) => (
          <SingleTask
            task={task}
            index={num}
            tasks={tasks}
            setTasks={setTasks}
            names={names}
          />
        ))}
      </div>
      <button onClick={addTask}>Add a Card</button>
    </div>
  );
}

export default TaskList;