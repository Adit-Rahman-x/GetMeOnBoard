import React from "react";

const Navbar = ({ setCurrentView }) => {
  const links = [
    { name: "Home", view: "Home" },
    { name: "Section Maker", view: "Section Maker" },
    { name: "Interactive Tour Guide", view: "Interactive Tour Guide" },
    { name: "Section Quiz", view: "Section Quiz" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 75px",
        backgroundColor: "#262829",
        color: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Project Name */}
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        <b style={{ color: "#cfe0e8" }}>GetM</b>
        <b style={{ color: "#509fcb" }}>eOn</b>
        <b style={{ color: "#cfe0e8" }}>Board</b>
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            style={{
              color: "#cfe0e8",
              textDecoration: "none",
              fontSize: "18px",
              position: "relative",
              padding: "5px 10px",
              transition: "color 0.3s ease",
            }}
            onClick={() => setCurrentView(link.view)} // Change view on click
            onMouseEnter={(e) =>
              (e.target.style.color = "#4CAF50") // Change color on hover
            }
            onMouseLeave={(e) => (e.target.style.color = "#cfe0e8")}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
