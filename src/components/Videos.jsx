import projectVideo from "../assets/videos/project1.mp4";

function Videos() {
    return (
        <section className="videos section">
            <div className="section-heading">
                <p>WATCH OUR WORK</p>
                <h2>Project Videos</h2>
            </div>

            <div className="video-container">
                <video controls>
                    <source
                        src={projectVideo}
                        type="video/mp4"
                    />

                    Your browser does not support videos.
                </video>
            </div>
        </section>
    );
}

export default Videos;