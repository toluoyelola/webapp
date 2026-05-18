import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTaskStatus } from './boardSlice';

export default function TaskBoard() {
  const [taskTitle, setTaskTitle] = useState('');
  const tasks = useSelector((state) => state.board.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;
    dispatch(addTask({ id: Date.now(), title: taskTitle, status: 'todo' }));
    setTaskTitle('');
  };

  const renderColumn = (statusName, title) => (
    <div style={{ flex: 1, margin: '10px', padding: '10px', background: '#f4f4f4' }}>
      <h3>{title}</h3>
      {tasks.filter((t) => t.status === statusName).map((task) => (
        <div key={task.id} style={{ background: '#fff', padding: '10px', marginBottom: '10px', border: '1px solid #ccc' }}>
          <p>{task.title}</p>
          {statusName !== 'todo' && <button onClick={() => dispatch(updateTaskStatus({ id: task.id, newStatus: 'todo' }))}>Move to To Do</button>}
          {statusName !== 'in-progress' && <button onClick={() => dispatch(updateTaskStatus({ id: task.id, newStatus: 'in-progress' }))}>Move to In Progress</button>}
          {statusName !== 'done' && <button onClick={() => dispatch(updateTaskStatus({ id: task.id, newStatus: 'done' }))}>Move to Done</button>}
          <button style={{ color: 'red', display: 'block', marginTop: '5px' }} onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <form onSubmit={handleAddTask} style={{ margin: '20px' }}>
        <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="New task..." />
        <button type="submit">Add Task</button>
      </form>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {renderColumn('todo', 'To Do')}
        {renderColumn('in-progress', 'In Progress')}
        {renderColumn('done', 'Done')}
      </div>
    </div>
  );
}