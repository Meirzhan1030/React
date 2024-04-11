import React, { useState } from 'react';
import './AdvertisementBoard.css';

function AdvertisementBoard() {
  const [advertisements, setAdvertisements] = useState([]);
  const [newAdText, setNewAdText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedAdText, setEditedAdText] = useState('');

  const handleAddAdvertisement = () => {
    if (newAdText.trim() !== '') {
      setAdvertisements([...advertisements, newAdText]);
      setNewAdText('');
    }
  };

  const handleDeleteAdvertisement = (index) => {
    const updatedAdvertisements = [...advertisements];
    updatedAdvertisements.splice(index, 1);
    setAdvertisements(updatedAdvertisements);
  };

  const handleEditAdvertisement = (index) => {
    setEditIndex(index);
    setEditedAdText(advertisements[index]);
  };

  const handleSaveEditedAdvertisement = () => {
    const updatedAdvertisements = [...advertisements];
    updatedAdvertisements[editIndex] = editedAdText;
    setAdvertisements(updatedAdvertisements);
    setEditIndex(null);
  };

  return (
    <div className="advertisement-board">
      <h1>Рекламная доска</h1>
      <div className="add-advertisement">
        <input
          type="text"
          value={newAdText}
          onChange={(e) => setNewAdText(e.target.value)}
          placeholder="Введите текст объявления"
        />
        <button onClick={handleAddAdvertisement}>Добавить рекламу</button>
      </div>
      <ul className="advertisement-list">
        {advertisements.map((ad, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedAdText}
                  onChange={(e) => setEditedAdText(e.target.value)}
                />
                <button onClick={handleSaveEditedAdvertisement}>Сохранять</button>
              </>
            ) : (
              <>
                {ad}
                <button onClick={() => handleEditAdvertisement(index)}>Редактировать</button>
                <button onClick={() => handleDeleteAdvertisement(index)}>Удалить</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvertisementBoard;
