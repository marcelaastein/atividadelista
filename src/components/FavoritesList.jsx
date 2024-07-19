import React, { useState, useCallback } from 'react';
import FavoriteItem from './FavoriteItem';
import '../App.css';

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const [newFavorite, setNewFavorite] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState('');

  const addFavorite = useCallback(() => {
    if (newFavorite.trim() !== '') {
      setFavorites(prevFavorites => [...prevFavorites, newFavorite]);
      setNewFavorite('');
    }
  }, [newFavorite]);

  const editFavorite = (index) => {
    setEditingIndex(index);
    setEditingValue(favorites[index]);
  };

  const saveEdit = () => {
    setFavorites(prevFavorites =>
      prevFavorites.map((fav, index) =>
        index === editingIndex ? editingValue : fav
      )
    );
    setEditingIndex(null);
    setEditingValue('');
  };

  const deleteFavorite = (index) => {
    setFavorites(prevFavorites =>
      prevFavorites.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      <h2>Lista de Sites ou Blogs Favoritos</h2>
      <div className="input-container">
        <input
          type="text"
          value={newFavorite}
          onChange={(e) => setNewFavorite(e.target.value)}
          placeholder="Escreva aqui o seu favorito"
        />
        <button className='botao' onClick={addFavorite}>Adicionar</button>
      </div>
      <ul className='lista-favoritos'>
        {favorites.map((favorite, index) => (
          <FavoriteItem
            key={index}
            index={index}
            favorite={favorite}
            isEditing={editingIndex === index}
            editingValue={editingValue}
            onEdit={editFavorite}
            onSave={saveEdit}
            onDelete={deleteFavorite}
            onChangeEditingValue={setEditingValue}
          />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
