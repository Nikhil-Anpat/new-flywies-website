import React, { useState, useEffect } from "react";

export default function Industries() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const styles = {
    industriesMain: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "40px 20px",
      backgroundColor: "#F7F9FB",
    },
    title: {
      fontSize: isMobile ? "18px" : "32px",
      fontWeight: "600",
      color: "black",
    },
    highlight: {
      color: "#53AE43",
    },
    description: {
      fontSize: isMobile ? "14px" : "16px",
      color: "#666",
      maxWidth: "800px",
      marginTop: "10px",
    },
    image: {
      marginTop: "20px",
      width: isMobile ? "90%" : "60%",
      height: "auto",
    },
  };

  return (
    <div style={styles.industriesMain}>
      {/* Title */}
      <span style={styles.title}>
        Industries <span style={styles.highlight}>We Serve</span>
      </span>

      {/* Description */}
      <p style={styles.description}>
        Extensive experience in developing advanced web platforms, mobile apps,
        and complex systems, aligned with the latest industry trends.
      </p>

      {/* Dynamic Image */}
      <img
        src={
          isMobile
            ? "assets/websiteWebappDevelopment/industriesSmall.svg"
            : "assets/websiteWebappDevelopment/industries.svg"
        }
        alt="Industries"
        style={styles.image}
      />
    </div>
  );
}
