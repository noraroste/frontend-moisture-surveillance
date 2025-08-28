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
        <h2 className="modal-heading">{plantType}</h2>
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
