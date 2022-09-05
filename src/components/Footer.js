import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">

        <div className="col solutions">
          <h6>Solutions</h6>
          <ul>
            <li><Link to="/" className="link">Marketing</Link></li>
            <li><Link to="/" className="link">Analytics</Link></li>
            <li><Link to="/" className="link">Commerce</Link></li>
            <li><Link to="/" className="link">Insights</Link></li>
          </ul>
        </div>

        <div className="col support">
          <h6>Support</h6>
          <ul>
            <li><Link to="/" className="link">Pricing</Link></li>
            <li><Link to="/" className="link">Documentation</Link></li>
            <li><Link to="/" className="link">Guides</Link></li>
            <li><Link to="/" className="link">API Status</Link></li>
          </ul>
        </div>

        <div className="col company">
          <h6>Company</h6>
          <ul>
            <li><Link to="/" className="link">About</Link></li>
            <li><Link to="/" className="link">Blog</Link></li>
            <li><Link to="/" className="link">Jobs</Link></li>
            <li><Link to="/" className="link">Press</Link></li>
          </ul>
        </div>

        <div className="col legal">
          <h6>Legal</h6>
          <ul>
            <li><Link to="/" className="link">Claim</Link></li>
            <li><Link to="/" className="link">Privacy</Link></li>
            <li><Link to="/" className="link">Cookies</Link></li>
            <li><Link to="/" className="link">Terms</Link></li>
          </ul>
        </div>

        <div className="col-subscription">
            <h6>Subscribe to our newsleter</h6>
            <p>The latest news, articles, and resources sent to your inbox weekly.</p>
            <div className="subscribe">
                <input type="email" placeholder="Enter your Email"/>
                <button>Subscribe</button>
            </div>
        </div>
      </div>

      <div className="footer-bottom">
        {/* for icons */}
        <div className="content">
            <div className="rights">
                <p>&copy; Workflow, Inc. All rights reserved.</p>
            </div>
            <div>
                <a href="https://www.facebook.com/" target='_blank'>
                    <FaFacebook size={20} style={{color:"d3d3d3",marginRight:"10px"}}/>
                </a>
                <a href="https://www.instagram.com/" target='_blank'>
                    <FaInstagram size={20} style={{color:"d3d3d3",marginRight:"10px"}}/>
                </a>
                <a href="https://www.linkedin.com/in/hassan-shan/" target="_blank">
                    <FaLinkedin size={20} style={{color:"d3d3d3",marginRight:"10px"}}/>
                </a>
                <a href="https://github.com/HassanShanJava/Aptive-App-Router.git" target='_blank'>
                    <FaGithub size={20} style={{color:"d3d3d3",marginRight:"10px"}}/>
                </a>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
