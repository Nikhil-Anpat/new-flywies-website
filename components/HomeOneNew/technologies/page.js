import React, { useState, useEffect } from "react";

export default function Technologies() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const techStack = [
    { src: "assets/websiteWebappDevelopment/react.svg", name: "React JS" },
    { src: "assets/websiteWebappDevelopment/vue.svg", name: "Vue" },
    { src: "assets/websiteWebappDevelopment/angular.svg", name: "Angular JS" },
    { src: "assets/websiteWebappDevelopment/python.svg", name: "Python" },
    { src: "assets/websiteWebappDevelopment/ruby.svg", name: "Ruby" },
    { src: "assets/websiteWebappDevelopment/java.svg", name: "Java" },
  ];

  return (
    <div className="flex flex-col items-center text-center py-10" style={{ backgroundColor: "#fff", padding: isMobile ? "10px" : "30px" }}>
      {/* Title */}
      <span
        style={{
          fontSize: isMobile ? "18px" : "32px",
          fontWeight: "600",
          color: "black",
        }}
      >
        Technologies <span style={{ color: "#53AE43" }}>We Leverage</span>
      </span>

      {/* Technology Icons */}
      <div className="mt-6 flex flex-wrap justify-center gap-6 w-full max-w-5xl" style={{display:'flex',width:'100%',justifyContent:'center'}}>
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 w-[120px]"
          >
            <img src={tech.src} alt={tech.name} className="h-16 w-16 mb-2" />
            <p className="text-sm font-medium text-gray-700" style={{ fontSize: "20px", color: "black", fontWeight: "400" }}>
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
