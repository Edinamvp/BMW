import "../styles/stats.css";

function Stats() {

    const stats = [

        {
            number: "100+",
            title: "BMW Models"
        },

        {
            number: "10M+",
            title: "Drivers Worldwide"
        },

        {
            number: "150+",
            title: "Countries"
        },

        {
            number: "50+",
            title: "Years of Innovation"
        }

    ];

    return (

        <section className="stats">

            <div className="stats-container">

                {stats.map((item, index) => (

                    <div className="stat-card" key={index}>

                        <h1>{item.number}</h1>

                        <p>{item.title}</p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Stats;