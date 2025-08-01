import React from "react";

const Works = () => {
  return (
    <div className="works">
      <h1>How it Works</h1>
      <div className="steps">
        <div className="step">
          <div className="image-container">
            <img src="/assets/images/monitor_10445640.png" alt="Enroll Icon" />
          </div>
          <div className="text-container">
            <h3>1. Enroll Your Students</h3>
            <p>Enroll online in minutes. Digital awards are also available.</p>
          </div>
        </div>

        <div className="step">
          <div className="image-container">
            <img
              className="img-special"
              src="/assets/images/coupons_3706131.png"
              alt="Materials Icon"
            />
          </div>
          <div className="text-container">
            <h3>2. Receive Your Materials</h3>
            <p>We'll send Panda awards and coupons directly to you.</p>
          </div>
        </div>

        <div className="step">
          <div className="image-container">
            <img src="/assets/images/corruption_12417183.png" alt="Encourage Icon" />
          </div>
          <div className="text-container">
            <h3>3. Encourage Students</h3>
            <p>
              Recognize your students' hard work with awards and coupons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
