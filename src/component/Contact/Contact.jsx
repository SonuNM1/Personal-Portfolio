import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;
  const linkedinUsername = import.meta.env.VITE_LINKEDIN_USERNAME;
  const instaUsername = import.meta.env.VITE_INSTAGRAM_USERNAME;

  //to send the mail
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_MAIL_SERVICE_ID,
        import.meta.env.VITE_MAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_MAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    // add toaster for confirmation
    e.target.reset();
  };

  return (
    <div className="contact containter section" id="contact">
      <h3 className="section__title">Get in touch</h3>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i class="uil uil-linkedin-alt contact__card-icon"></i>

              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">@sonunmahto</span>

              <a
                href={`https://www.linkedin.com/in/${linkedinUsername}`}
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-instagram contact__card-icon"></i>

              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">@{instaUsername}</span>

              <a
                href={`https://www.instagram.com/${instaUsername}`}
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                isonumahto362000@gmail.com
              </span>

              <a href={`mailto:${emailAddress}`} className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
