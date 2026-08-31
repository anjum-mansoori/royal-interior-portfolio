function Services() {
    const services = [
        {
            icon: "✦",
            title: "False Ceiling",
            text: "Modern POP, gypsum and luxury false ceiling designs."
        },
        {
            icon: "✦",
            title: "LED Ceiling",
            text: "Beautiful LED lighting and modern ceiling solutions."
        },
        {
            icon: "✦",
            title: "Custom Furniture",
            text: "Premium furniture designed according to your space."
        },
        {
            icon: "✦",
            title: "TV Units",
            text: "Modern and stylish TV unit designs for your home."
        },
        {
            icon: "✦",
            title: "Wardrobes",
            text: "Smart and elegant custom wardrobe solutions."
        },
        {
            icon: "✦",
            title: "Complete Interiors",
            text: "Beautiful interior solutions from design to completion."
        }
    ];

    return (
        <section className="services section" id="services">
            <div className="section-heading">
                <p>WHAT WE DO</p>
                <h2>Our Services</h2>
            </div>

            <div className="service-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">
                            {service.icon}
                        </div>

                        <h3>{service.title}</h3>

                        <p>{service.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;