import React from "react";
import "./contact.scss";

const Contact: React.FC = () => {
  return (
    <>
      <section className="contact">
        <div className="container-contact">
          <div className="content-contact">
            <div className="contact-text">
              <h3>Contact</h3>

              <h2>Contact me! 🙂</h2>
            </div>

            <div className="contact-link">
              <div className="contact-icon">
                <a href="mailto: mariafcenci.dev@gmail.com">
                  <img src="/icons/email-blue.png" alt="" />
                </a>
              </div>
              <div className="contact-infos">
                <h4>Email</h4>
                <a href="mailto: mariafcenci.dev@gmail.com">
                  <p>mariafcenci.dev@gmail.com</p>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </>
  );
};

export default Contact;
