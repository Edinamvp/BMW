import { useNavigate } from "react-router-dom";

function CarCard({ car }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/cars/${car.id}`);
  };

  return (
    <div 
      className="car-card" 
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div className="car-image-container">
        <img src={car.image} alt={car.name} />
      </div>
      <div className="car-card-content">
        <h3>{car.name}</h3>
        <p>{car.description}</p>
        <button 
          className="primary-btn" 
          onClick={(e) => {
            e.stopPropagation(); // Prevents double trigger
            handleCardClick();
          }}
        >
          View & Book Ride
        </button>
      </div>
    </div>
  );
}

export default CarCard;