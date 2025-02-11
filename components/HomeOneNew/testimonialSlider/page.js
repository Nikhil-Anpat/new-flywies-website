"use client";

import { useState, useEffect } from "react";

const testimonials = [
    { text: "Your app brings so much peace and tolerance to our home.", name: "Rachael, UK", subtext: "on meditation’s positive effect on family life" },
    { text: "Exceptional service and innovative solutions!", name: "Satya, India", subtext: "Sub text displays here, it is an optional text." },
    { text: "Flyweis team delivered our project on time and exceeded expectations.", name: "Keri, UK", subtext: "on finding her happy place" },
    { text: "Change has already changed my life!", name: "Davido, London", subtext: "on using meditation daily" },
    { text: "Your app brings so much peace and tolerance to our home.", name: "Rachael, UK", subtext: "on meditation’s positive effect on family life" },
    { text: "Exceptional service and innovative solutions!", name: "Satya, India", subtext: "Sub text displays here, it is an optional text." },
    { text: "Flyweis team delivered our project on time and exceeded expectations.", name: "Keri, UK", subtext: "on finding her happy place" },
    { text: "Change has already changed my life!", name: "Davido, London", subtext: "on using meditation daily" },
];

export default function TestimonialSlider() {
    const [index, setIndex] = useState(3);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const prevSlide = () => {
        setIndex((prev) => (prev === 2 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            width: "100%",
            marginTop: "30px",
            position: "relative",
        },
        title: {
            fontSize: "32px",
            fontWeight: "bold",
            color: "#222",
            textAlign: "center",
            marginBottom: "20px",
        },
        highlight: {
            color: "green",
        },
        sliderContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            width: "100%",
            position: "relative",
            padding: '10px'
        },
        testimonialWrapper: {
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(calc(50% - ${index * 280}px - 125px))`,
            width: "fit-content",
        },
        testimonialBox: (isActive) => ({
            width: "250px",
            padding: "20px",
            backgroundColor: isActive ? "#F5F2ED" : "#F9F9F9",
            borderRadius: "10px",
            boxShadow: isActive ? "0 6px 10px rgba(0, 0, 0, 0.2)" : "0 2px 4px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            margin: "10px",
            opacity: isActive ? "1" : "0.6",
            transform: isActive ? "scale(1.1)" : "scale(0.9)",
            transition: "all 0.3s ease-in-out",
        }),
        quoteIcon: {
            color: "green",
            display: 'flex',
            width: '45px'
        },
        name: {
            marginTop: "10px",
            fontWeight: "bold",
            color: "#444",
        },
        subtext: {
            fontSize: "12px",
            color: "#666",
        },
        buttonContainer: {
            display: "flex",
            gap: "10px",
        },
        button: {
            backgroundColor: "white",
            border: "none",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        },
    };

    return (
        <div style={styles.container}>
            <span style={styles.title}>
                Client <span style={styles.highlight}>Testimonials</span>
            </span>

            <div style={styles.sliderContainer}>
                <div style={styles.testimonialWrapper}>
                    {testimonials.map((testimonial, i) => (
                        <div key={i} style={styles.testimonialBox(i === index)}>
                            <div style={styles.quoteIcon}><img src='assets/websiteWebappDevelopment/smallQotes.svg' alt='' /></div>
                            <p>{testimonial.text}</p>
                            <p style={styles.name}>{testimonial.name}</p>
                            <p style={styles.subtext}>{testimonial.subtext}</p>
                        </div>
                    ))}
                </div>
            </div>

           <div style={{width: '100%',display:"flex",justifyContent: "space-between",marginTop:'35px'}}>
           <div>
                <img src='assets/websiteWebappDevelopment/largeqotes.svg' alt='' />
            </div>
            {/* Buttons */}
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={prevSlide}>
                    <img src='assets/websiteWebappDevelopment/leftArrow.svg' alt='Left' />
                </button>
                <button style={styles.button} onClick={nextSlide}>
                    <img src='assets/websiteWebappDevelopment/rightArrow.svg' alt='Right' />
                </button>
            </div>
           </div>
        </div>
    );
}
