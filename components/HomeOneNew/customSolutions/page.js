import React, { useState, useEffect } from "react";

export default function CustomSolutions() {
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
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: isMobile ? "center" : "left",
            padding: isMobile ? "" : "40px 20px",
            backgroundColor: "#fff",
            maxWidth: "1100px",
            margin: "auto",
        },
        contentWrapper: {
            flex: 1,
            padding: isMobile ? "10px 0" : "0 40px",
        },
        title: {
            fontSize: isMobile ? "20px" : "32px",
            fontWeight: "600",
            color: "black",
            marginBottom: "10px",
        },
        highlight: {
            color: "#53AE43",
        },
        description: {
            fontSize: isMobile ? "14px" : "16px",
            color: "#666",
            marginBottom: "20px",
            maxWidth: "700px",
            padding: '10px'
        },
        imageWrapper: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
        },
        image: {
            width: isMobile ? "90%" : "100%",
            maxWidth: "500px",
            height: "auto",
        },
        featureList: {
            display: "flex",
            flexDirection: "column",
            gap: "15px",
        },
        featureItem: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: isMobile ? "14px" : "16px",
            color: "#333",
            fontWeight: "500",
        },
        checkIcon: {
            width: "20px",
            height: "20px",
        },
        button: {
            backgroundColor: "#53AE43",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "20px",
        },
        customSolutionsTextContain: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        featureItemNew: {
            display: isMobile ? "flex" : "flex",
            flexDirection: isMobile ? 'column' : "column",
            alignItems: 'start',
            fontSize: isMobile ? "12px" : "16px",
        }
    };

    return (
        <>
            <div style={styles.customSolutionsTextContain}>
                <span style={styles.title}>
                    Custom <span style={styles.highlight}>Solutions</span>
                </span>
                <p style={styles.description}>
                    Whether you're a small business or a large enterprise, our custom solutions are designed to meet your specific needs and scale with your growth.
                </p>
            </div>
            <div style={styles.container}>
                {/* Left Side - Image */}
                <div style={styles.imageWrapper}>
                    <img
                        src={
                            isMobile
                                ? "/assets/websiteWebappDevelopment/customSolutionsSmall.svg"
                                : "/assets/websiteWebappDevelopment/customSolutions.svg"
                        }
                        alt="Custom Solutions"
                        style={styles.image}
                    />
                </div>

                {/* Right Side - Content */}
                <div style={styles.contentWrapper}>
                    {/* Features */}
                    <div style={styles.featureList}>
                        <div style={styles.featureItem}>
                            <img src="/assets/websiteWebappDevelopment/correct.svg" alt="check" style={styles.checkIcon} />
                            <span style={styles.featureItemNew}><b>Scalable for Growth:</b> Solutions that adapt and scale with your business.</span>
                        </div>
                        <div style={styles.featureItem}>
                            <img src="/assets/websiteWebappDevelopment/correct.svg" alt="check" style={styles.checkIcon} />
                            <span style={styles.featureItemNew}><b>Performance-Focused:</b> Optimized for speed, security, and reliability.</span>
                        </div>
                        <div style={styles.featureItem}>
                            <img src="/assets/websiteWebappDevelopment/correct.svg" alt="check" style={styles.checkIcon} />
                            <span style={styles.featureItemNew}><b>Tailored to Your Industry:</b> Custom-built to fit the specific needs of your sector.</span>
                        </div>
                    </div>

                    {/* Button */}
                    <button style={styles.button}>Let's Build Together</button>
                </div>
            </div>
        </>

    );
}
