import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditDrink from './EditDrink';

function EditDrinkModal({drinkItem}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditDrink drinkItem={drinkItem}/>
        </Modal>
      )}
    </>
  );
}

export default EditDrinkModal;