import React from "react";
import "./HeroStyles.css";

import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">

          <div className="col-1">
            <h1>Data to Enrich your</h1>
            <h1>
              <span className="primary-color">Online Business</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            </p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <i>
                  <FaDatabase />Stax
                </i>
                <i>
                  <FaAsterisk />AI Star
                </i>
                <i>
                  <FaAccusoft />Accusoft
                </i>
              </div>
            </div>
          </div>
          
          <div className="col-2">
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-txt">Sign in with</p>
                <div className="social-login">
                  <i>
                    <FaFacebook size={20} />
                  </i>
                  <i>
                    <FaLinkedin size={20} />
                  </i>
                  <i>
                    <FaGithub size={20} />
                  </i>
                </div>
                <div className="divider">
                  <p>
                    <span>Or</span>
                  </p>
                </div>
                <form>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button type="">Create your Account</button>
                </form>
              </div>
              <div className="form-footer">
                <p>
                  By signing up, you agree our
                  <span className="primary-color">Terms, Data Policy</span>, and
                  <span className="primary-color"> Cookie Policy</span>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
