function Contact() {

    return (
        <section className="contact section" id="contact">

            <div className="section-heading">
                <p>CONTACT US</p>
                <h2>Let's Build Your Dream Space</h2>
            </div>

            <div className="contact-content">

                <div className="contact-box">
                    <h3>Get In Touch</h3>

                    <p>
                        Contact us for premium interior and
                        custom design solutions.
                    </p>

                    <p>📞 +91 8668734462 </p>
                    <p>✉️ kismatmansoori01@email.com</p>
                    <p>📍 Mumbai, India</p>
                </div>

                <form
                    className="contact-form"
                    action="https://formsubmit.co/kismatmansoori01@gmail.com"
                    method="POST"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        maxLength="10"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Tell us about your project..."
                        rows="5"
                        required
                    />

                    <button
                        type="submit"
                        className="btn primary-btn"
                    >
                        SEND MESSAGE
                    </button>

                </form>
            </div>
        </section>
    );
}

export default Contact;