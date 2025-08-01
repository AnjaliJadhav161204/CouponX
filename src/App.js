import React from "react";
import Header from "./Header";
import Content from "./Content";
import Works from "./Works";
import FAQ from "./FAQ";
import CommunityPrograms from "./CommunityPrograms";
import Footer from "./Footer";
import "./styles.css"; // Ensure you have the CSS file in place
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Works />
      <FAQ />
      <CommunityPrograms />
      <Footer />
    </div>
  );
}

export default App;
