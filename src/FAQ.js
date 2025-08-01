import React, { useState } from 'react';
import './styles.css'; // Make sure this path is correct

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h1>Have Questions?</h1>

      <div className="faq">
        <button
          className={`faq-question ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleToggle(0)}
        >
          How does the program work in the classroom?
        </button>
        <div
          className={`faq-answer ${activeIndex === 0 ? 'show' : ''}`}
          style={{
            maxHeight: activeIndex === 0 ? '200px' : '0',
          }}
        >
          <p>
            Once enrolled in the program, you receive paper Achievement Awards certificates and reward coupons.
            When a student is given an Achievement Award, they are also given a reward coupon. Achievements can be
            anything you want, such as perfect attendance, good behavior, or scoring the last goal!
          </p>
        </div>
      </div>

      <div className="faq">
        <button
          className={`faq-question ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleToggle(1)}
        >
          Who is eligible for this program?
        </button>
        <div
          className={`faq-answer ${activeIndex === 1 ? 'show' : ''}`}
          style={{
            maxHeight: activeIndex === 1 ? '200px' : '0',
          }}
        >
          <p>Anyone can participate, including students, teachers, and staff.</p>
        </div>
      </div>

      <div className="faq">
        <button
          className={`faq-question ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleToggle(2)}
        >
          When can I sign up for the program?
        </button>
        <div
          className={`faq-answer ${activeIndex === 2 ? 'show' : ''}`}
          style={{
            maxHeight: activeIndex === 2 ? '200px' : '0',
          }}
        >
          <p>You can sign up at any time throughout the academic year.</p>
        </div>
      </div>

      <a href="#" className="faq-link">View Common Questions</a>
    </section>
  );
};

export default FAQ;
