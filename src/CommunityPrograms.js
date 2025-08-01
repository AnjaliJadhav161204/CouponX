import React from "react";

const CommunityPrograms = () => {
  return (
    <section className="community-programs">
      <center>
        <h1 style={{ margin: "35px" }}>Our Community Programs</h1>
      </center>
      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/assets/images/2763109.jpg" alt="Card image" className="card-img" />
              <div className="card-content">
                <h2 className="card-title">Card Title 1</h2>
                <p className="card-description">
                  This is a simple description of the first card.
                </p>
              </div>
            </div>
            <div className="card-back">
              <p>Back of Card 1: More Details Here!</p>
              <button className="card-btn">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/assets/images/8671141.jpg" alt="Card image" className="card-img" />
              <div className="card-content">
                <h2 className="card-title">Fuel Curiosity</h2>
                <p className="card-description">
                  Illustrations of books, students, and more.
                </p>
                
              </div>
            </div>
            <div className="card-back">
            <button className="card-btn">Learn More</button>
              <p>Back of Card 2: Fun Facts Here!</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/assets/images/2763109.jpg" alt="Card image" className="card-img" />
              <div className="card-content">
                <h2 className="card-title">Card Title 3</h2>
                <p className="card-description">
                  This is a simple description of the third card.
                </p>
                
              </div>
            </div>
            <div className="card-back">
            <button className="card-btn">Learn More</button>
              <p>Back of Card 3: Additional Info!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPrograms;
