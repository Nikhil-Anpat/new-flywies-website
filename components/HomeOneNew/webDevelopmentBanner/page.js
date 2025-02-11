import React, { useState, useEffect } from "react";

export default function WebDevelopmentBanner() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 20px",
            width: "100%",
            marginTop:'30px'
        },
        banner: {
            position: "relative",
            width: "100%",
            background: "linear-gradient(to right, #55AE45, #94E586)",
            color: "#ffffff",
            padding:isMobile ? "20px":"40px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            overflow: "visible", 
            height: isMobile? "220px":'305px'
        },
        leftContent: {
            width: "70%",
            textAlign: "left",
            paddingRight: "20px",
            zIndex: 2, 
        },
        heading: {
            fontSize:isMobile ? '14px': "26px",
            fontWeight: "bold",
            marginBottom:isMobile ?"5px": "10px",

        },
        text: {
            fontSize:isMobile ? '10px': "16px",
            fontStyle: "italic",
            marginBottom: isMobile ? "5px" :"20px",
        },
        button: {
            padding:isMobile ? "6px 10px":"12px 24px",
            backgroundColor: "#065F46",
            color: "#ffffff",
            fontWeight: "bold",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s ease",
        },
        buttonHover: {
            backgroundColor: "#047857",
        },
        rightContent: {
            width: "30%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible", 
        },
        imageContainer: {
            position: "absolute",
            right: "-20px",
            width: isMobile ? "125px" : "310px",
            overflow: "visible",
            bottom: isMobile ? '-57px':'-124px'

        },
        image: {
            width: "100%",
            objectFit: "contain",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.banner}>
                {/* Left Content (Text) */}
                <div style={styles.leftContent}>
                    <span style={styles.heading}>
                        Looking for a Web Development company for your project?
                    </span>
                    <p style={styles.text}>
                        Don't stress—your vision is in good hands. We're here to guide you every step of the way, ensuring your project is built with precision and care.
                    </p>
                    <button
                        style={styles.button}
                        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    >
                        Let’s Connect ➝
                    </button>
                </div>

                {/* Right Content (Image) */}
                <div style={styles.rightContent}>
                    <div style={styles.imageContainer}>
                        <img
                            src={isMobile ? "/assets/websiteWebappDevelopment/WebDevelopmentBannerSmall.svg" : "/assets/websiteWebappDevelopment/WebDevelopmentBanner.svg"}
                            alt="Business Collaboration"
                            style={styles.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
