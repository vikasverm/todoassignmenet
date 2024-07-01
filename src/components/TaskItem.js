import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from './redux/actions';
import { ListGroup, Button, Modal, Form } from 'react-bootstrap';
import { CheckCircle, XCircle, PencilSquare } from 'react-bootstrap-icons';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    dispatch(editTask(task.id, updatedTask));
    setIsEditing(false);
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <>
      <ListGroup.Item className={`d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''}`}>
        <span>{task.text}</span>
        <div>
          <Button variant="success" onClick={handleToggle} className="mr-2">
            <CheckCircle /> {task.completed ? 'Unmark' : 'Complete'}
          </Button>
          <Button variant="warning" onClick={() => setIsEditing(true)} className="mr-2">
            <PencilSquare /> Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            <XCircle /> Delete
          </Button>
        </div>
      </ListGroup.Item>

      <Modal show={isEditing} onHide={() => setIsEditing(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskItem;
