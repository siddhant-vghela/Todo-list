import { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks,{ id: Date.now(), title: newTask, completed: false },]; setTasks(updatedTasks); setNewTask('');
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (id, newTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
  };

  return (
    // <div className="task-list">
    //   <input  type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter task"/>
    //   <button onClick={addTask}>Add Task</button>

    //   {tasks.map((task) => (
    //     <Task key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTask} onEdit={editTask}/>
    //   ))}
    // </div>

<div className="task-list">
    <table >
      <tr>
        <td id="slabo" style={{width: 120}}><span>Task</span></td>
        <div class="material-textfield">
        <td style={{width: 300}}><input  type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder=" "/><label>Details</label></td>
        </div>
        <td><button class="btn btn-intermediate" onClick={addTask}>Add Task</button></td>
      </tr>
      </table>
      
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTask} onEdit={editTask}/>
      ))}
    </div>
  );
};

export default TaskList;