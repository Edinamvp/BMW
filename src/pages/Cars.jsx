import { useState } from "react";
import cars from "../data/cars";
import CarCard from "../components/CarCard";
import "../styles/cars.css";

function Cars() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="cars-page">
      <header className="cars-header">
        <span className="subheading">Sheer Driving Pleasure</span>
        <h1>The BMW Lineup</h1>
        <p>Explore the ultimate driving machines across performance, electric, and luxury.</p>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by model (e.g., M3, X5, i4)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <section className="cars-grid">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <div className="no-results">
            <p>No BMW models found matching "{searchTerm}".</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cars;