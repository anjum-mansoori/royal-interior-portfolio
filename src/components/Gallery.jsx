import { useState } from "react";

import ceiling1 from "../assets/images/ceiling1.jpeg";
import ceiling2 from "../assets/images/ceiling2.jpeg";
import ceiling3 from "../assets/images/ceiling3.jpeg";
import ceiling4 from "../assets/images/ceiling4.jpeg";
import ceiling5 from "../assets/images/ceiling5.jpeg";
import ceiling6 from "../assets/images/ceiling6.jpeg";
import ceiling7 from "../assets/images/ceiling7.jpeg";
import ceiling8 from "../assets/images/ceiling8.jpeg";
import ceiling16 from "../assets/images/ceiling16.jpeg";
import ceiling10 from "../assets/images/ceiling10.jpeg";
import ceiling11 from "../assets/images/ceiling11.jpeg";
import ceiling12 from "../assets/images/ceiling12.jpeg";
import ceiling13 from "../assets/images/ceiling13.jpeg";
import ceiling14 from "../assets/images/ceiling14.jpeg";
import ceiling17 from "../assets/images/ceiling17.jpeg";
import ceiling24 from "../assets/images/ceiling24.jpeg";
import ceiling19 from "../assets/images/ceiling19.jpeg";
import ceiling20 from "../assets/images/ceiling20.jpeg";
import ceiling21 from "../assets/images/ceiling21.jpeg";
import ceiling22 from "../assets/images/ceiling22.jpeg";
import ceiling25 from "../assets/images/ceiling25.jpeg";
import ceiling26 from "../assets/images/ceiling26.jpeg";
import ceiling27 from "../assets/images/ceiling27.jpeg";
import heroImage from "../assets/images/heroImage.jpeg";

import furniture1 from "../assets/images/furniture1.jpeg";
import furniture2 from "../assets/images/furniture2.jpeg";
import furniture3 from "../assets/images/furniture3.jpeg";
import furniture4 from "../assets/images/furniture4.jpeg";
import furniture5 from "../assets/images/furniture5.jpeg";
import furniture6 from "../assets/images/furniture6.jpeg";
import furniture8 from "../assets/images/furniture8.jpeg";

function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const projects = [
        {
            image: ceiling1,
            category: "Ceiling",
            title: "Modern LED Ceiling"
        },
        {
            image: ceiling2,
            category: "Ceiling",
            title: "Luxury False Ceiling"
        },
        {
            image: ceiling3,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling4,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling5,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling6,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling7,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling8,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling16,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling10,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling11,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling12,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling13,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling14,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: furniture6,
            category: "Furniture",
            title: "Luxury Furniture"
        },
        {
            image: ceiling17,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: furniture4,
            category: "Furniture",
            title: "Luxury Furniture"
        },
        {
            image: furniture5,
            category: "Furniture",
            title: "Luxury Furniture"
        },
        {
            image: ceiling24,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling19,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling20,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: furniture8,
            category: "Furniture",
            title: "Luxury Furniture"
        },
        {
            image: ceiling27,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling21,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling22,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling25,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: ceiling26,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: furniture1,
            category: "Furniture",
            title: "Luxury Furniture"
        },
        {
            image: heroImage,
            category: "Ceiling",
            title: "Premium POP Design"
        },
        {
            image: furniture2,
            category: "Furniture",
            title: "Custom Wardrobe"
        },
        {
            image: furniture3,
            category: "Furniture",
            title: "Modern TV Unit"
        }
    ];

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                (project) =>
                    project.category === activeCategory
            );

    return (
        <section className="gallery section" id="gallery">
            <div className="section-heading">
                <p>OUR WORK</p>
                <h2>Featured Projects</h2>
            </div>

            <div className="gallery-buttons">
                <button
                    className={
                        activeCategory === "All" ? "active" : ""
                    }
                    onClick={() => setActiveCategory("All")}
                >
                    All
                </button>

                <button
                    className={
                        activeCategory === "Ceiling" ? "active" : ""
                    }
                    onClick={() =>
                        setActiveCategory("Ceiling")
                    }
                >
                    Ceiling
                </button>

                <button
                    className={
                        activeCategory === "Furniture"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setActiveCategory("Furniture")
                    }
                >
                    Furniture
                </button>
            </div>

            <div className="gallery-grid">
                {filteredProjects.map(
                    (project, index) => (
                        <div className="project-card" key={index}>
                            <img
                                src={project.image}
                                alt={project.title}
                                onClick={() => setSelectedImage(project)}
                            />

                            <div className="project-info">
                                <p>{project.category}</p>
                                <h3>{project.title}</h3>
                            </div>
                        </div>
                    )
                )}

                {selectedImage && (
                    <div className="image-modal">
                        <div className="modal-content">
                            <button
                                className="close-btn"
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕
                            </button>

                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                            />
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

export default Gallery;