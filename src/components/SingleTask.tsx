import React from 'react';
import { Tasks } from './TaskListContainer';

interface Props {
  task: string;
  index: number;
  tasks: Tasks;
  setTasks: React.Dispatch<React.SetStateAction<Tasks>>;
  names: string[];
}

const SingleTask: React.FC<Props> = ({task, index, tasks, setTasks, names}) => {

  const moveLeft = () => {
    const before = tasks[names[index]];
    const after = tasks[names[index - 1]];

    before.splice(before.indexOf(task), 1);
    after.push(task);

    setTasks({...tasks, before, after});
  }

  const moveRight = () => {
    const before = tasks[names[index]];
    const after = tasks[names[index + 1]];
    
    before.splice(before.indexOf(task), 1);
    after.push(task);

    setTasks({...tasks, before, after});
  }
  
  return (
      <div className='singletask'>
        {index !== 0 ? <button onClick={moveLeft}>&#60;</button> : ''}
        <div className='tasktext'>{task}</div>
        {index !== names.length - 1 ? <button onClick={moveRight}>&#62;</button> : ''}
      </div>
    
  );
}

export default SingleTask;