import { useState } from 'react';
import './App.css'; // Import your CSS file for styling

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(false);
    onEdit(task.id, editedTitle);
  };

  return (
    <div className="task">
      {isEditing ? (
        <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} onBlur={handleEdit} autoFocus/>
      ) : (
        <>
        <table class="rwd-table">
        <tr  >
          <td  style={{"width": 120, "height" : 50}}> <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} /></td>
          <td style={{width: 260}}><span  onClick={() => setIsEditing(true)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span></td>
          <td style={{paddingLeft: 42 }}><button style={{width: 90}} onClick={() => onDelete(task.id)}>Delete</button></td>
          
          
          </tr>
      </table>
        </>
      )}
    </div>
  );
};
export default Task;
