import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddDrink from './AddDrink';

function AddDrinkModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Drink</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddDrink />
        </Modal>
      )}
    </>
  );
}

export default AddDrinkModal;