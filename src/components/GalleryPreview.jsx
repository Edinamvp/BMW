import "../styles/gallery.css";

function GalleryPreview() {

  const images = [
    "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    "https://images.unsplash.com/photo-1556189250-72ba954cfc2b",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
    "https://images.unsplash.com/photo-1617531653332-bd46c24f2068"
  ];

  return (
    <section className="gallery-page">

      <h1>
        BMW Gallery
      </h1>

      <p>
        Explore iconic BMW designs, performance machines, and unforgettable driving experiences.
      </p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt="BMW Performance" 
          />
        ))}
      </div>

    </section>
  );
}

export default GalleryPreview;