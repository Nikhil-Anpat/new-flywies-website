"use client";
import React, { useEffect, useState } from "react";

const StrategyForm = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const styles = {
        strategyContainerMain: {
            background: `url("../../../assets/websiteWebappDevelopment/bgStrategy.svg") no-repeat center center/cover`,
            padding: isMobile ? "20px" : "40px",
            backgroundColor: "green",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
        strategyHead: {
            marginBottom: "20px",
        },
        strategyHeadText: {
            fontSize: isMobile ? "20px" : "24px",
            fontWeight: "bold",
            color: "white",
        },
        strategyHeadText2: {
            fontSize: isMobile ? "14px" : "16px",
            color: "white",
        },
        strategyForm: {
            background: "white",
            padding: isMobile ? "15px" : "20px",
            borderRadius: "10px",
            width: isMobile ? "100%" : "90%",
            maxWidth: "1000px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        },
        strategyFormUpper: {
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
            alignItems: isMobile ? "center" : "flex-start",
        },
        formRow: {
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            width: isMobile ? "100%" : "70%",
            gap: isMobile ? "10px" : "15px",
        },
        formGroup: {
            display: "flex",
            flexDirection: "column",
            width: isMobile ? "100%" : "30%",
        },
        formGroupFullWidth: {
            width: isMobile ? "100%" : "70%",
        },
        label: {
            fontWeight: "bold",
            marginBottom: "5px",
            textAlign: "start",
            color: "black",
        },
        input: {
            padding: "10px",
            borderRadius: "5px",
            width: "100%",
            background: "#e1e1e1",
            border: "none",
            outline: "none",
        },
        strategyFormBottom: {
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
            marginTop: "15px",
        },
        contactInfo: {
            width: "30%",
            display: isMobile ? "none" : "flex",
            alignItems: "center",
        },
        contactLink: {
            color: "#53AD43",
            fontWeight: "bold",
        },
        formFooter: {
            width: isMobile ? "100%" : "30%",
            justifyContent: "center",
            alignContent: 'end',
            marginTop: isMobile ? "10px" : "0",
        },
        submitBtn: {
            backgroundColor: "green",
            color: "white",
            padding: isMobile ? "12px" : "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            width: isMobile ? "100%" : "auto",
        },
    };

    return (
        <div style={styles.strategyContainerMain}>
            <div style={styles.strategyHead}>
                <h2 style={styles.strategyHeadText}>Book a Free Strategy Session with Our Experts</h2>
                <p style={styles.strategyHeadText2}>
                    Have an idea? Let’s discuss the best way to build your app. Our experts are here to guide you.
                </p>
            </div>

            <div style={styles.strategyForm}>
                <div style={styles.strategyFormUpper}>
                    <div style={styles.formRow}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Full Name</label>
                            <input type="text" placeholder="Enter your name" style={styles.input} />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Phone Number</label>
                            <div className="px-2" style={{ display: "flex", background: "#e1e1e1", borderRadius: "5px" }}>
                                <img src="assets/websiteWebappDevelopment/smallFlag.svg" alt="flag" />
                                <input
                                    type="text"
                                    placeholder="+91 9999999999"
                                    style={{ ...styles.input, background: "#e1e1e1", border: "none", outline: "none" }}
                                />
                            </div>
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Email ID</label>
                            <input type="email" placeholder="example@mail.com" style={styles.input} />
                        </div>
                    </div>

                    <div style={styles.contactInfo}>
                        <div style={{ display: "flex", flexDirection: "column", paddingLeft: "4px", paddingTop: "6px" }}>
                            We will contact you ASAP or you can
                            <div style={{ display: "flex", gap: "10px" }}>
                                <span style={styles.contactLink}>Schedule a Call</span>
                                <img src="assets/websiteWebappDevelopment/calender.svg" alt="calendar" />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={styles.strategyFormBottom}>
                    <div style={{ ...styles.formGroup, ...styles.formGroupFullWidth }}>
                        <label style={styles.label}>Tell us about your project</label>
                        <textarea rows={3} placeholder="Write here..." style={styles.input}></textarea>
                    </div>

                    <div style={styles.formFooter}>
                        <button style={styles.submitBtn}>Let’s Connect</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategyForm;
