import React, { useState } from 'react';
import '../styles/equipment_selection.css'; 

const EquipmentSelection = ({ selectedEquipment, setSelectedEquipment }) => {
  const equipmentList = [
    { id: 1, name: 'Grinding Machine', image: 'assets/images/3d-printer.jpg' },
    { id: 2, name: 'Drilling Machine', image: 'assets/images/3d-printer.jpg' },
    { id: 3, name: 'Hand Grinder', image: 'assets/images/3d-printer.jpg' },
    { id: 4, name: 'Jig Saw', image: 'assets/images/3d-printer.jpg' },
    { id: 5, name: 'Grinding Machine', image: 'assets/images/3d-printer.jpg' },
    { id: 6, name: 'Drilling Machine', image: 'assets/images/3d-printer.jpg' },
    { id: 7, name: 'Hand Grinder', image: 'assets/images/3d-printer.jpg' },
    { id: 8, name: 'Jig Saw', image: 'assets/images/3d-printer.jpg' },
    { id: 9, name: 'Jig Saw', image: 'assets/images/3d-printer.jpg' },
    { id: 10, name: 'Jig Saw', image: 'assets/images/3d-printer.jpg' },
  ];

  const handleSelect = (id) => {
    setSelectedEquipment((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="equipment-selection">
      {equipmentList.map((item) => (
        <div key={item.id} className="equipment-item">
          <img src={item.image} alt={item.name} className="equipments-image" />
          <label>
            <input
              type="checkbox"
              checked={selectedEquipment.includes(item.id)}
              onChange={() => handleSelect(item.id)}
            />
            {item.name}
          </label>
        </div>
      ))}
      
    </div>
  );
};

export default EquipmentSelection;
