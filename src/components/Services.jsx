import "../styles/services.css";

function Services() {

    const services = [

        {
            title: "Performance",
            description: "Experience legendary BMW M engineering."
        },

        {
            title: "Luxury",
            description: "Premium interiors with unmatched comfort."
        },

        {
            title: "Electric",
            description: "The future of sustainable driving."
        },

        {
            title: "Safety",
            description: "Advanced driver assistance technologies."
        }

    ];

    return (

        <section className="services">

            <h1>Why Choose BMW?</h1>

            <div className="services-grid">

                {services.map((service, index) => (

                    <div className="service-card" key={index}>

                        <h2>{service.title}</h2>

                        <p>{service.description}</p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Services;