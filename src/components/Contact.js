import React from "react";
import "./ContactStyles.css";
import {FaEnvelope, FaPhone} from  "react-icons/fa"

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="col-1">
          <div className="content">
            
            <div>
              <h2>Get in Touch</h2>
              <p>
                Tempor sed amet dolor magna magna kasd. Ea ipsum aliquyam dolor
                at magna voluptua diam. Erat et consetetur consetetur sit.
              </p>
            </div>

            <div className="address">
              <p>KDA Residency, Nagan Chowrangi</p>
              <p>75850 Karachi, Sindh</p>
            </div>

            <div className="icons">
                {/* stlin in jsx is in camel case(no -), and values are in parentahesis  */}
                <FaPhone style={{marginRight: '1rem'}}/>
                <p>(+92) 304 2308901</p>
            </div>
            <div className="icons">
                {/* stlin in jsx is in camel case(no -), and values are in parentahesis  */}
                <FaEnvelope style={{marginRight: '1rem'}}/>
                <p>support.example@gmail.com</p>
            </div>

            <div className="careers">
                <p>Looking for careers? <span>View all job openings.</span></p>
            </div>
          </div>
        </div>

        <div className="col-2">
            <form action="">
                <input type="text" placeholder="Full name"/>
                <input type="email" placeholder="Email"/>
                <input type="phone" placeholder="Phone"/>
                <textarea name="Message" placeholder="Message" cols='30' rows="10"></textarea>

                <div className="checkbox">
                    <input type='checkbox'/>
                    <p>
                        By checking gthis box, you agree to the <span>Privacy Policy </span>
                        and <span>Cookie Policy</span>.
                    </p>
                </div>
        
                <button>Submit</button>
            
            </form>


        </div>
      </div>
    </div>
  );
};

export default Contact;
