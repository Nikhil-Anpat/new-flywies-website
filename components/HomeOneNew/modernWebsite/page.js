"use client";

import React, { useEffect, useState } from "react";

export default function ModernWebsite() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const styles = {
        modernMain: {
            width: "100%",
            padding: isMobile ? "10px 20px" : "30px 40px",
            backgroundColor: "#FFFFFF",
        },
        modernSubmain: {
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "initial",
            textAlign: isMobile ? "center" : "initial",
        },
        modernLeft: {
            width: isMobile ? "100%" : "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "initial",
            marginBottom: isMobile ? "15px" : "0",
        },
        modernMainRight: {
            width: isMobile ? "100%" : "60%",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
        },
        modernMainRightHead: {
            fontSize: "30px",
            fontWeight: "700",
            display: isMobile ? "none" : "block",
        },
        modernMainRightContent: {
            fontSize: isMobile ? "18px" : "22px",
            fontWeight: "400",
            paddingTop: isMobile ? "10px" : "20px",
            padding: isMobile ? "10px" : "0",
        },
        modernBottomContent: {
            display: "flex",
            gap: "5px",
            padding: isMobile ? "0px 3px" : "0px 10px",
            fontSize: isMobile ? "13px" : "inherit",
        },
        modernMobileTitle: {
            display: isMobile ? "block" : "none",
            fontSize: "20px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "10px",
        },
        mobileOnly: {
            display: isMobile ? "block" : "none",
        },
        desktopOnly: {
            display: isMobile ? "none" : "block",
        },
    };

    return (
        <div style={styles.modernMain}>
            {/* Mobile title */}
            <span style={styles.modernMobileTitle}>
                Modern <span style={{ color: "green" }}>Websites</span> and <span style={{ color: "green" }}>Web Apps</span>
            </span>

            <div style={styles.modernSubmain}>
                <div style={styles.modernLeft}>
                    <img src="assets/websiteWebappDevelopment/modernImg.svg" alt="modern" />
                </div>

                <div style={styles.modernMainRight}>
                    {/* Desktop title */}
                    <span style={styles.modernMainRightHead}>
                        Modern <span style={{ color: "green" }}>Websites</span> and <span style={{ color: "green" }}>Web Apps</span>
                    </span>

                    {/* Features (Mobile) */}
                    <div style={styles.mobileOnly}>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px" }}>
                            {["Accessible", "Performant", "Responsive", "Secure"].map((item, index) => (
                                <div style={styles.modernBottomContent} key={index}>
                                    <img src="assets/websiteWebappDevelopment/smallCorrect.svg" alt="correct" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <span style={styles.modernMainRightContent}>
                        We build world-class web applications for startups, mid-sized businesses,
                        and enterprises, ensuring they are fast, secure, and scalable. By leveraging the latest technologies
                        and industry trends, we create digital solutions that offer seamless performance and exceptional user
                        experiences.
                    </span>

                    {/* Features (Desktop) */}
                    <div style={styles.desktopOnly}>
                        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px" }}>
                            {["Accessible", "Performant", "Responsive", "Secure"].map((item, index) => (
                                <div style={{ ...styles.modernBottomContent, gap: "8px" }} key={index}>
                                    <img src="assets/websiteWebappDevelopment/correct.svg" alt="correct" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
