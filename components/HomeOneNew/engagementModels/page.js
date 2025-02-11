import { colors } from "@material-ui/core";
import React from "react";

export default function EngagementModels() {
    const styles = {
        container: {
            textAlign: "center",
            padding: "40px 20px",
        },
        heading: {
            fontSize: "32px",
            fontWeight: "bold",
            color: "#000",
        },
        subHeading: {
            fontSize: "18px",
            color: "#555",
            marginBottom: "30px",
        },
        highlight: {
            color: "#16A34A",
        },
        cardsContainer: {
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
        },
        card: {
            background: "linear-gradient(to bottom, #55AE45, #94E586)",
            color: "#fff",
            padding: "20px",
            borderRadius: "16px",
            width: "350px",
            height:'220px',
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        },
        cardTitle: {
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "10px",
            color:'white'
        },
        cardText: {
            fontSize: "14px",
            fontStyle: "italic",
            marginBottom: "20px",
        },
        iconContainer: {
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
        },
        icon: {
            width: "40px",
            height: "40px",
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>
                Flexible, <span style={styles.highlight}>Client-Centric</span> Engagement Models
            </h2>
            <p style={styles.subHeading}>
                Available on flexible monthly or fixed-price hiring models
            </p>

            <div style={styles.cardsContainer}>
                {/* Card 1 */}
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Impeccable Design Excellence</h3>
                    <p style={styles.cardText}>
                        Elevate your digital experience with stunning visuals and smart creativity
                    </p>
                    <div style={styles.iconContainer}>
                        <img src="/assets/websiteWebappDevelopment/engagementModelsFigma.svg" alt="Figma" style={styles.icon} />
                        <img src="/assets/websiteWebappDevelopment/engagementModelsAi.svg" alt="Adobe Illustrator" style={styles.icon} />
                        <img src="/assets/websiteWebappDevelopment/engagementModelsPS.svg" alt="Photoshop" style={styles.icon} />
                        <img src="/assets/websiteWebappDevelopment/engagementModelsXD.svg" alt="Adobe XD" style={styles.icon} />
                    </div>
                </div>

                {/* Card 2 */}
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Clean and Scalable Code</h3>
                    <p style={styles.cardText} className="pt-2">
                        Leverage the right framework for seamless, business-driven solutions
                    </p>
                    <div style={styles.iconContainer} className="pt-3">
                        <img src="/assets/websiteWebappDevelopment/engagementModelsReact.svg" alt="React" style={styles.icon} />
                        <img src="/assets/websiteWebappDevelopment/engagementModelsAngular.svg" alt="Angular" style={styles.icon} />
                        <img src="/assets/websiteWebappDevelopment/engagementModelsMongo.svg" alt="MongoDB" style={styles.icon} />
                        <img src="/assets/websiteWebappDevelopment/engagementModelsElephent.svg" alt="PostgreSQL" style={styles.icon} />
                    </div>
                </div>

                {/* Card 3 */}
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Efficient and Clear Communication</h3>
                    <p style={styles.cardText}>
                        Stay updated with seamless, hassle-free interactions with our developers
                    </p>
                    <div style={styles.iconContainer}>
                        <img src="/assets/websiteWebappDevelopment/engagementModelsGoogle.svg" alt="Google Meet" style={styles.icon} />
                        <img src="/assets/websiteWebappDevelopment/engagementModelsWhatsApp.svg" alt="WhatsApp" style={styles.icon} />
                        <img src="/assets/websiteWebappDevelopment/engagementModelsGmail.svg" alt="Gmail" style={styles.icon} />
                        <img src="/assets/websiteWebappDevelopment/engagementModelsWord.svg" alt="WordPress" style={styles.icon} />
                    </div>
                </div>
            </div>
        </div>
    );
}
