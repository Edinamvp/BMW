import featuredCars from "../data/featuredCars";
import CarCard from "./CarCard";

import "../styles/featured.css";

function FeaturedCars(){

return(

<section className="featured">

<h1>

Featured BMW Models

</h1>

<p className="subtitle">

Explore some of BMW's most powerful vehicles.

</p>

<div className="cars-container">

{

featuredCars.map((car)=>(

<CarCard

key={car.id}

car={car}

/>

))

}

</div>

</section>

)

}

export default FeaturedCars;