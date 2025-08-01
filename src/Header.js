import React from "react";
import "./styles.css"; // Import your CSS

const Header = () => {
  return (
    <header>
      <div className="logo">
      <img src="/assets/images/l2.png" alt="Panda Express Logo" />

      </div>
      <nav>
        <a href="#">FAQ/Support</a>
        <a href="#">Login</a>
        <a href="#" className="button">Get Started</a>
      </nav>
    </header>
  );
};

export default Header;
