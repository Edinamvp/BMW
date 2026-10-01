import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import cars from "../data/cars";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/carDetails.css";

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  const car = cars.find((c) => String(c.id) === String(id));
  console.log("URL id:", id);
  console.log("Cars:", cars);
  console.log("Found car:", car);
 

  // Check if car is already in favorites on page load
  useEffect(() => {
    if (car) {
      const currentFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const exists = currentFavorites.some((fav) => fav.id === car.id);
      setIsSaved(exists);
    }
  }, [car]);

  if (!car) {
    return (
      <>
        {/* <Navbar /> */}
        <h1 style={{ textAlign: "center", padding: "100px" }}>Car Not Found</h1>
        {/* <Footer /> */}
      </>
    );
  }

  const handleToggleFavorite = () => {
    const currentFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = currentFavorites.some((fav) => fav.id === car.id);

    let updatedFavorites;
    if (exists) {
      updatedFavorites = currentFavorites.filter((fav) => fav.id !== car.id);
      setIsSaved(false);
      alert(`${car.name} removed from your Favorites!`);
    } else {
      updatedFavorites = [...currentFavorites, car];
      setIsSaved(true);
      alert(`${car.name} added to your Favorites! ❤️`);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleBookTestDrive = () => {
    alert(`Thank you! A BMW representative will contact you to schedule a test drive for the ${car.name}.`);
  };

  return (
    <>
      {/* <Navbar /> */}

      <section className="car-details">
        <div className="details-container">
          <div className="details-image">
            <img src={car.image} alt={car.name} />
          </div>

          <div className="details-info">
            <h1>{car.name}</h1>

            <div className="car-badge">{car.category}</div>

            <p className="rating">⭐⭐⭐⭐⭐ 4.9 / 5</p>

            <p className="price">{car.price}</p>

            <p className="description">{car.description}</p>

            <div className="spec-grid">
              <div className="spec-card">
                <h3>Horsepower</h3>
                <p>{car.horsepower}</p>
              </div>
              <div className="spec-card">
                <h3>Top Speed</h3>
                <p>{car.topSpeed}</p>
              </div>
              <div className="spec-card">
                <h3>Engine</h3>
                <p>{car.engine}</p>
              </div>
              <div className="spec-card">
                <h3>Fuel</h3>
                <p>{car.fuel}</p>
              </div>
              <div className="spec-card">
                <h3>Transmission</h3>
                <p>{car.transmission}</p>
              </div>
              <div className="spec-card">
                <h3>Drive</h3>
                <p>{car.drivetrain}</p>
              </div>
              <div className="spec-card">
                <h3>Acceleration</h3>
                <p>{car.zeroToSixty}</p>
              </div>
              <div className="spec-card">
                <h3>Year</h3>
                <p>{car.year}</p>
              </div>
            </div>

            <div className="button-group">
              <button onClick={() => navigate(-1)}>← Back</button>
              <button onClick={handleToggleFavorite}>
                {isSaved ? "❤️ Saved" : "❤️ Save"}
              </button>
              <button onClick={handleBookTestDrive}>Book Test Drive</button>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default CarDetails;