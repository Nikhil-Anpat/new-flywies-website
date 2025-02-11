// "use client";

// import { useEffect, useState } from "react";

// export default function BannerSection() {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const checkScreenSize = () => setIsMobile(window.innerWidth <= 700);
//         checkScreenSize();
//         window.addEventListener("resize", checkScreenSize);
//         return () => window.removeEventListener("resize", checkScreenSize);
//     }, []);

//     const styles = {
//         container: {
//             position: "relative",
//             width: "100%",
//             height: isMobile ? "500px" : "580px",
//         },
//         background: {
//             position: "absolute",
//             inset: 0,
//             backgroundImage: isMobile
//                 ? "url('assets/websiteWebappDevelopment/bannerSmall.svg')"
//                 : "url('assets/websiteWebappDevelopment/bannerBG.svg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             zIndex: 1,
//             top: isMobile ? "-200px" : "-60%",
//         },
//         content: {
//             position: "relative",
//             zIndex: 3,
//             color: "#ffffff",
//             padding: isMobile ? "20px" : "40px",
//             maxWidth: "670px",
//             marginTop: "30px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//         },
//         title: {
//             fontSize: isMobile ? "22px" : "32px",
//             fontWeight: "bold",
//             color: "white",
//         },
//         text: {
//             fontSize: isMobile ? "14px" : "18px",
//             marginTop: "10px",
//             color: "white",
//             display: isMobile ? "none" : "block",
//         },
//         button: {
//             marginTop: "20px",
//             padding: "12px 25px",
//             fontSize: isMobile ? "14px" : "16px",
//             fontWeight: "bold",
//             color: "#fff",
//             backgroundColor: "#34a853",
//             border: "none",
//             borderRadius: "48px",
//             cursor: "pointer",
//             transition: "0.3s",
//             alignSelf: "start", // Keeps button inside content div
//         },
//         buttonHover: {
//             backgroundColor: "#2b8a3e",
//         },
//         frontImage: {
//             position: "absolute",
//             bottom: "0px",
//             width: isMobile ? "80%" : "60%",
//             maxWidth: "590px",
//             zIndex: 3,
//             top: isMobile ? "170px" : "25%", 
//             left: isMobile ? "50%" : "66%",
//             transform: "translateX(-50%)",
//         },
//     };

//     return (
//         <div style={styles.container}>
//             {/* Background Image */}
//             <div style={styles.background}></div>

//             {/* Content */}
//             <div style={styles.content}>
//                 <span style={styles.title}>Website and Web App Development</span>
//                 <p style={styles.text}>
//                     We create responsive web applications and sites leveraging the most
//                     robust technologies in the industry to help you boost your business.
//                 </p>
//                 <button
//                     style={styles.button}
//                     onMouseEnter={(e) =>
//                         (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
//                     }
//                     onMouseLeave={(e) =>
//                         (e.target.style.backgroundColor = styles.button.backgroundColor)
//                     }
//                 >
//                     Let's Connect
//                 </button>
//             </div>

//             {/* Front Image (Always fixed at bottom center for mobile) */}
//             <img
//                 src="assets/websiteWebappDevelopment/bannerFront.svg"
//                 alt="Illustration"
//                 style={styles.frontImage}
//             />
//         </div>
//     );
// }

"use client";

import { useEffect, useState } from "react";

export default function BannerSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 700);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const styles = {
        container: {
            position: "relative",
            width: "100%",
            height: isMobile ? "500px" : "580px", // Increased height for mobile
            marginTop:'110px'
        },
        background: {
            position: "absolute",
            inset: 0,
            backgroundImage: isMobile
                ? "url('assets/websiteWebappDevelopment/bannerSmall.svg')"
                : "url('assets/websiteWebappDevelopment/bannerBG.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
            top: isMobile ? "-200px" : "-60%",
        },
        content: {
            position: "relative",
            zIndex: 3,
            color: "#ffffff",
            padding: isMobile ? "20px" : "40px",
            maxWidth: "670px",
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
        },
        title: {
            fontSize: isMobile ? "22px" : "32px",
            fontWeight: "bold",
            color: "white",
        },
        text: {
            fontSize: isMobile ? "14px" : "18px",
            marginTop: "10px",
            color: "white",
            display: isMobile ? "none" : "block",
        },
        button: {
            padding: "12px 25px",
            fontSize: isMobile ? "14px" : "16px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#34a853",
            border: "none",
            borderRadius: "48px",
            cursor: "pointer",
            transition: "0.3s",
            zIndex: 4, 
            position: isMobile ? "absolute" : "relative",
            bottom: isMobile ? "60px" : "auto",
            left: isMobile ? "50%" : "4%",
            transform: isMobile ? "translateX(-50%)" : "none",
            width: isMobile ? "180px" : "auto",
            textAlign: "center",
        },
        buttonHover: {
            backgroundColor: "#2b8a3e",
        },
        frontImage: {
            position: "absolute",
            bottom: "0px",
            width: isMobile ? "80%" : "60%",
            maxWidth: "590px",
            zIndex: 3,
            top: isMobile ? "150px" : "25%",
            left: isMobile ? "50%" : "66%",
            transform: "translateX(-50%)",
        },
    };

    return (
        <div style={styles.container}>
            {/* Background Image */}
            <div style={styles.background}></div>

            {/* Content */}
            <div style={styles.content}>
                <span style={styles.title}>Website and Web App Development</span>
                <p style={styles.text}>
                    We create responsive web applications and sites leveraging the most
                    robust technologies in the industry to help you boost your business.
                </p>
            </div>

            {/* Front Image */}
            <img
                src="assets/websiteWebappDevelopment/bannerFront.svg"
                alt="Illustration"
                style={styles.frontImage}
            />

            {/* Button - Stays at bottom in mobile */}
            <button
                style={styles.button}
                onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = styles.button.backgroundColor)
                }
            >
                Let's Connect
            </button>
        </div>
    );
}
