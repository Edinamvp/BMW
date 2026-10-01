import "../styles/global.css"; // or wherever your css file lives

const galleryImages = [
  "https://hips.hearstapps.com/hmg-prod/images/2023-bmw-760i-xdrive-101-1650340309.jpg?crop=0.886xw:0.748xh;0.101xw,0.188xh&resize=1200:*",
  "https://cdn.motor1.com/images/mgl/0eJ3wj/s3/2023-bmw-3.0-csl.webp",
  "https://www.thesun.co.uk/wp-content/uploads/2023/12/brilliant-beamer-incredibly-rare-bmw-867952909.jpg?strip=all&w=960",
  "https://mediapool.bmwgroup.com/cache/P9/201805/P90304842/P90304842-the-new-bmw-m3-cs-05-2018-2250px.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8FEOXAbKkYvjCgY7PUUprkeqoYBoCAK2zNomIxlRpWUV4hB6mRsiWWYB&s=10",
  "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/6-Series/8419/1617875919382/front-view-118.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYp6rqaolwOFoeY_X0QNyZEA4ZFeJrAuqk10m1-7GFXA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAn7OVu54h3J-GIkWnk3dUTK1HuAKel9c2CtLUskksaoRzFw9r6kbHlc&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8NGW7YbLDXafEtsDyhXcTIhMz-hly3ap0_sd6zp_3HQ&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuYlf44dxUynsKtEM7knszUoxKT6NMjlVuzjoFHQi18DM3oSxuG9l7-U&s=10",
  "https://sk-cars.pl/media/car_on_slider_homepage/www_phone_version11_2xnETgQ.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUvBoHOFnFZDL39HN_-1XE-5ec7b-6frzoMPM1p4J3z_omh2H8GaXc_YG&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJzYLt2sX7r61iU3o6ExQXITRDsXSClU1McfqTuvyJNDaiH24v3WkS1Ht&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBExHuiE9qWZXX82WeO5FehsA-NCFbnEKsBrNMvPyjJWtebXLslR_rU7U&s=10",
  "https://i.pinimg.com/736x/39/7b/f3/397bf3bf0bd254d4516aa5583d7cd27d.jpg",
  
];

function Gallery() {
  return (
    <div className="gallery-page">
      <h1>BMW Gallery</h1>
      <p>Explore high-resolution captures of sheer driving pleasure.</p>
      
      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <img key={index} src={img} alt={`BMW Gallery ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

