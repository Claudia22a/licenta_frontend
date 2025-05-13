import { useState } from 'react';
import { BabiesContext } from './BabiesContext';
import api from '../../api/axios';

export const BabiesProvider = ({ children }) => {
  const [babies, setBabies] = useState([]);
  const [selectedBabyId, setSelectedBabyId] = useState(null);
  const existingSelectedBabyId = Number(localStorage.getItem('selectedBabyId'));

  const addBaby = (baby) => {
    setBabies((prev) => {
      const updated = [...prev, baby];
      if (!selectedBabyId) setSelectedBabyId(baby.id);
      return updated;
    });
  };

  const selectBaby = (id) => setSelectedBabyId(id);

  const selectedBaby = babies.find((b) => b.id === selectedBabyId);

  const loadBabies = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get('/api/v1/babies', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBabies(res.data);
      if (res.data.length > 0 && !selectedBabyId) {
        if (existingSelectedBabyId) setSelectedBabyId(existingSelectedBabyId);
        else setSelectedBabyId(res.data[0].id);
      }
    } catch (err) {
      console.error(
        'Failed to load babies:',
        err.response?.data || err.message
      );
    }
  };

  return (
    <BabiesContext.Provider
      value={{
        babies,
        setBabies,
        addBaby,
        selectedBaby,
        selectBaby,
        selectedBabyId,
        loadBabies,
      }}
    >
      {children}
    </BabiesContext.Provider>
  );
};
