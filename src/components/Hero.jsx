import heroImage from "../assets/images/heroImage.jpeg";

function Hero() {
    return (
        <section className="hero" id="home"
            style={{
                backgroundImage: `url(${heroImage})`,
            }} >
            <div className="overlay"></div>

            <div className="hero-content">
                <p className="small-title">
                    WELCOME TO ROYAL INTERIOR DESIGNER
                </p>

                <h1>
                    Transform Your Space
                    <br />
                    Into <span>Luxury</span>
                </h1>

                <p>
                    Premium Ceiling Designs, Modern Furniture
                    and Beautiful Interior Solutions.
                </p>

                <div className="hero-buttons">
                    <a href="#gallery" className="btn primary-btn">
                        VIEW PROJECTS
                    </a>

                    <a href="#contact" className="btn secondary-btn">
                        CONTACT US
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;