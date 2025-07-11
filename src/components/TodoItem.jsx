function TodoItem({ text, completed, createdAt, onDelete, onToggle }) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <div className="todo-content">
        <span className={completed ? "completed" : ""}>{text}</span>
        <small className="created-at">Добавено на: {createdAt}</small>
      </div>
      <button onClick={onDelete}>Изтрий</button>
    </div>
  );
}

export default TodoItem;
