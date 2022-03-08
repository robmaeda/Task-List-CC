import React from 'react';
import './App.css';
import TaskListContainer from './components/TaskListContainer';

const App: React.FC = () => {
  return (
    <div className='app'>
      <TaskListContainer />
    </div>

  );
}

export default App;
