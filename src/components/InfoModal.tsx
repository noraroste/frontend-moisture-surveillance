import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './infoModal.css';
import { plantTips } from '../utils/sensorMapping';

export function InfoModal({
  plantType,
  onClose,
}: {
  plantType: string;
  onClose: () => void;
}) {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const plantInfo = plantTips[plantType];
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>{plantType}</h2>
        <img
          src={plantInfo.imagePath}
          alt={plantType}
          className="modal-image"
        />
        <p>{plantInfo.tip}</p>
      </div>
    </div>
  );
}

export function InfoButton({ plantType }: { plantType: string }) {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="info-button" onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>
      {showModal && (
        <InfoModal plantType={plantType} onClose={handleCloseModal} />
      )}
    </div>
  );
}
