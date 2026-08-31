function About() {
    return (
        <section className="about section" id="about">
            <div className="section-heading">
                <p>WHO WE ARE</p>
                <h2>Creating Beautiful Spaces</h2>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <h3>Royal Interior Designer</h3>

                    <p>
                        We transform ordinary spaces into beautiful,
                        modern and luxurious interiors.
                    </p>

                    <p>
                        From premium false ceiling designs to custom
                        furniture, TV units, wardrobes and complete
                        interior solutions, we focus on quality,
                        creativity and customer satisfaction.
                    </p>

                    <a href="#contact" className="btn primary-btn">
                        GET IN TOUCH
                    </a>
                </div>

                <div className="stats">
                    <div>
                        <h3>100+</h3>
                        <p>Projects Completed</p>
                    </div>

                    <div>
                        <h3>25+</h3>
                        <p>Years Experience</p>
                    </div>

                    <div>
                        <h3>100%</h3>
                        <p>Client Satisfaction</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;