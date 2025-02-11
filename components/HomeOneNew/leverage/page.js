"use client";

import React, { useEffect, useState } from "react";

export default function Leverage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 968);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const styles = {
        leverageMain: {
            width: "100%",
            padding: isMobile ? "10px 20px" : "30px 40px",
            backgroundColor: "#f7f9fb",
        },
        leverageHead: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        leverageHeadSection: {
            width: "70%",
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        leverageHeadText1: {
            fontSize: isMobile ? "17px" : "30px",
            fontWeight: "600",
            color: "#000000",
        },
        leverageHeadText2: {
            display: "flex",
            justifyContent: "center",
            fontSize: isMobile ? "14px" : "22px",
            fontWeight: "400",
            color: "#000000",
        },
        leverageContent: {
            display: "flex",
            flexDirection: "column",
        },
        leverageContent1: {
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
        },
        leverageContentInner: {
            display: "flex",
            width: isMobile ? "100%" : "50%",
            padding: "20px 10px",
            gap: "10px",
            alignItems: "center",
        },
        leverageContentInnerText: {
            fontSize: isMobile ? "16px" : "22px",
        },
        mobileText: {
            display: isMobile ? "block" : "none",
            fontSize: "14px",
            textAlign: "center",
            marginTop: "10px",
        },
        desktopText: {
            display: isMobile ? "none" : "block",
        },
        mobileImg: {
            display: isMobile ? "block" : "none",
        },
        desktopImg: {
            display: isMobile ? "none" : "block",
        },
    };

    return (
        <div style={styles.leverageMain}>
            <div style={styles.leverageHead}>
                <span style={styles.leverageHeadText1}>
                    Leverage our proven Web <span style={{ color: "#53AE43" }}>Development Process</span>
                </span>

                {/* Mobile Text */}
                <span style={styles.mobileText}>
                    We’ve successfully delivered over 200 projects, mastering the art of executing a seamless, efficient, and optimized web-based software development process.
                </span>

                {/* Desktop Text */}
                <div style={{ ...styles.leverageHeadSection, ...styles.desktopText }}>
                    <span style={styles.leverageHeadText2}>We’ve successfully delivered over 200 projects, mastering the art</span>
                    <span style={styles.leverageHeadText2}>of executing a seamless, efficient, and optimized web-based</span>
                    <span style={styles.leverageHeadText2}>software development process.</span>
                </div>
            </div>

            <div style={styles.leverageContent}>
                <div style={styles.leverageContent1}>
                    <div style={styles.leverageContentInner}>
                        <img src="assets/websiteWebappDevelopment/one.svg" alt="one" style={styles.desktopImg} />
                        <img src="assets/websiteWebappDevelopment/smallOne.svg" alt="smallOne" style={styles.mobileImg} />
                        <span style={styles.leverageContentInnerText}>
                            <span style={{ fontWeight: "bold" }}>Consult with our experts</span> - to turn your idea into the right direction for web development.
                        </span>
                    </div>

                    <div style={styles.leverageContentInner}>
                        <img src="assets/websiteWebappDevelopment/two.svg" alt="two" style={styles.desktopImg} />
                        <img src="assets/websiteWebappDevelopment/smallTwo.svg" alt="smallTwo" style={styles.mobileImg} />
                        <span style={styles.leverageContentInnerText}>
                            <span style={{ fontWeight: "bold" }}>Design & Development</span> - We create a scalable, efficient solution tailored to your requirements.
                        </span>
                    </div>
                </div>

                <div style={styles.leverageContent1}>
                    <div style={styles.leverageContentInner}>
                        <img src="assets/websiteWebappDevelopment/three.svg" alt="three" style={styles.desktopImg} />
                        <img src="assets/websiteWebappDevelopment/smallThree.svg" alt="smallThree" style={styles.mobileImg} />
                        <span style={styles.leverageContentInnerText}>
                            <span style={{ fontWeight: "bold" }}>Testing & Optimization</span> - We ensure reliability, security, and performance through rigorous testing.
                        </span>
                    </div>

                    <div style={styles.leverageContentInner}>
                        <img src="assets/websiteWebappDevelopment/four.svg" alt="four" style={styles.desktopImg} />
                        <img src="assets/websiteWebappDevelopment/smallFour.svg" alt="smallFour" style={styles.mobileImg} />
                        <span style={styles.leverageContentInnerText}>
                            <span style={{ fontWeight: "bold" }}>Deployment & Support</span> - Smooth implementation with ongoing updates and technical support.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
