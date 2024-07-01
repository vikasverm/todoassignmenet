import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Container className="mt-5">
      <h1 className="text-center">To-Do App</h1>
      <TaskInput />
        <TaskList />
      </Container>
    </Provider>
  );
};

export default App;
