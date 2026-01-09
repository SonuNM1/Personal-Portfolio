import { useState } from "react";
import "./Services.css";
import { UilLaptopCloud, UilBrushAlt, UilServer } from "@iconscout/react-unicons";

export default function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="services section" id="services">
      <h3 className="section__title">Services</h3>
      <span className="section__subtitle">What I Bring to the Table</span>

      <div className="services__container container">
        {/* ---------------- Full Stack Architecture & Cloud ---------------- */}
        <div className="services__content">
          <div>
            <UilLaptopCloud className="services__icon" />
            <h3 className="services__title">
              Full Stack <br /> Architecture & Cloud
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
          </span>

          <div
            className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}
          >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">Full Stack Architecture & Cloud</h3>
              <p className="services__modal-description">
                Designing scalable web applications with robust architecture, microservices, and cloud deployment.
              </p>
              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <UilLaptopCloud className="services__modal-icon" />
                  <p className="services__modal-info">
                    Building microservices-based backend with Node.js, Express & Redis caching.
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilLaptopCloud className="services__modal-icon" />
                  <p className="services__modal-info">
                    Deploying scalable apps on AWS EC2 and Dockerized environments.
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilLaptopCloud className="services__modal-icon" />
                  <p className="services__modal-info">
                    Integrating secure authentication with JWT and role-based access.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------------- Frontend & UI/UX ---------------- */}
        <div className="services__content">
          <div>
            <UilBrushAlt className="services__icon" />
            <h3 className="services__title">
              Frontend <br /> & UI/UX
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
          </span>

          <div
            className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}
          >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">Frontend & UI/UX</h3>
              <p className="services__modal-description">
                Creating interactive, responsive, and visually appealing interfaces for modern web apps.
              </p>
              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <UilBrushAlt className="services__modal-icon" />
                  <p className="services__modal-info">
                    Developing responsive UI with React, Next.js, Tailwind CSS & Shadcn UI.
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilBrushAlt className="services__modal-icon" />
                  <p className="services__modal-info">
                    Designing intuitive UX flows and optimizing frontend performance.
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilBrushAlt className="services__modal-icon" />
                  <p className="services__modal-info">
                    Implementing interactive components, state management, and animations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------------- Backend & APIs ---------------- */}
        <div className="services__content">
          <div>
            <UilServer className="services__icon" />
            <h3 className="services__title">
              Backend <br /> & APIs
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
          </span>

          <div
            className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}
          >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">Backend & APIs</h3>
              <p className="services__modal-description">
                Building secure, high-performance backend services for full stack applications.
              </p>
              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <UilServer className="services__modal-icon" />
                  <p className="services__modal-info">
                    Designing RESTful APIs and server-side logic using Node.js & Express.
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilServer className="services__modal-icon" />
                  <p className="services__modal-info">
                    Managing data efficiently with MongoDB, Redis, and message queues (RabbitMQ).
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilServer className="services__modal-icon" />
                  <p className="services__modal-info">
                    Implementing authentication & authorization with JWT and bcrypt.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
