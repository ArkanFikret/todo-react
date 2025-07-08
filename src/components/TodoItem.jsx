import React from 'react';

function TodoItem( {text, completed, onDelete, onToggle} ){

    return(
        <div style={{
            margin: '8px 0',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            aligItems: 'center'
        }}>
    
            <input type ="checkbox" checked={completed} onChange={onToggle}/>
            <span style={{
                marginLeft: '10px',
                textDecoration: completed ? 'line-through' : 'none'
            }}>
                {text}
            </span>
            <button onClick = {onDelete} style={{marginLeft: '10px'}}>Изптий</button>
        </div>
    )
}

export default TodoItem;