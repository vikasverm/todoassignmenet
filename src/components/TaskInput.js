import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/actions';
import { Form, Button } from 'react-bootstrap';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, completed: false }));
      setTask('');
    }
  };

  return (
    <Form className="mb-3" style={{ height: '40px' }}>
      <Form.Group className="d-flex align-items-center" style={{ height: '100%' }}>
        <Form.Control
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow-1"
          style={{ height: '100%', minHeight: 'unset' }}
        />
        <Button
          variant="primary"
          onClick={handleAddTask}
          className="ml-2"
          style={{ height: '100%', padding: '0 10px', fontSize: '14px' }}
        >
          Add Task
        </Button>
      </Form.Group>
    </Form>
  );
};

export default TaskInput;
