import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';

export interface Tasks {
  [name: string] : string[];
};

const TaskListContainer: React.FC = () => {
  const names: string[] = ['Winnie', 'Bob', 'Thomas', 'George'];
  const colors: string[] = ['#8e6e95', '#39a59c', '#344759', '#e8741e'];
  const initialTasks: Tasks = {
    Winnie: ['task1', 'task2'],
    Bob: ['task3', 'task4'],
    Thomas: ['task5', 'task6'],
    George: ['task7', 'task8']
  };
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    const data = localStorage.getItem('task-list');

    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('task-list', JSON.stringify(tasks));
  });

  return (
    <div className='tl-container'>
      {names?.map((person, index) => (
        <TaskList
          person={person}
          index={index}
          color={colors[index]}
          tasks={tasks}
          setTasks={setTasks}
          names={names}
        />
      ))}
    </div>
  );
}

export default TaskListContainer;