import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  function removeFavorite(id) {
    const updatedFavorites = favorites.filter((car) => car.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  return (
    <section className="favorites-page">
      <h1>Your Favorite BMWs ❤️</h1>

      {favorites.length === 0 ? (
        <p className="empty">No saved BMW models yet.</p>
      ) : (
        <div className="favorites-container">
          {favorites.map((car) => (
            <div className="favorite-card" key={car.id}>
              <img src={car.image} alt={car.name} />

              <div className="favorite-info">
                <h2>{car.name}</h2>
                <p>{car.price}</p>

                <div className="favorite-buttons">
                  <Link to={`/cars/${car.id}`}>
                    <button className="view-btn">View Details</button>
                  </Link>

                  <button
                    className="remove-btn"
                    onClick={() => removeFavorite(car.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;