import React from 'react';
import '../App.css';

const FavoriteItem = ({ index, favorite, isEditing, editingValue, onEdit, onSave, onDelete, onChangeEditingValue }) => {
  return (
    <li className="favorite-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editingValue}
            onChange={(e) => onChangeEditingValue(e.target.value)}
          />
          <button className='botao' onClick={onSave}>Salvar</button>
        </>
      ) : (
        <>
          <span className="favorite-text">{favorite}</span>
          <div className="button-group">
            <button className='botao' onClick={() => onEdit(index)}>Editar</button>
            <button className='botao' onClick={() => onDelete(index)}>Remover</button>
          </div>
        </>
      )}
    </li>
  );
};

export default FavoriteItem;
