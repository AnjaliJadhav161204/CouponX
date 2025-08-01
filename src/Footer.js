import React from "react";

const Footer = () => {
  return (
    
    <footer>
    <div class="footer-container">
      <div class="footer-row">
        {/* <!-- About Section --> */}
        <div class="footer-col">
          <h3>About Us</h3>
          <p>
            We are a community dedicated to sharing  tips, guides, and reviews to help gamers enhance their experience. Stay connected with us for the latest updates and more!
          </p>
        </div>
        {/* <!-- Quick Links Section --> */}
        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        {/* <!-- Contact Section --> */}
        <div class="footer-col">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@couponxcommunity.com</li>
            <li>Phone: +912345777</li>
            <li>Location: 123 St francis, Borivali, CA</li>
          </ul>
        </div>
        {/* <!-- Social Links Section --> */}
        <div class="footer-col">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          &copy; 2024 CouponX. All Rights Reserved. | Designed by cX
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
