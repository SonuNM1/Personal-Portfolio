import './Footer.css';

const linkedinUsername = import.meta.env.VITE_LINKEDIN_USERNAME;
const instaUsername = import.meta.env.VITE_INSTAGRAM_USERNAME;
const githubUsername = import.meta.env.VITE_GITHUB_USERNAME;

export default function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <h1 className="footer__title">Sonu NM</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">About</a>
            </li>

            <li>
              <a href="#projects" className="footer__link">Projects</a>
            </li>

            {/* <li>
                            <a href="#testimonials" className="footer__link">Testimonials</a>
                        </li> */}
          </ul>
        </div>

        <div className="footer__container">
          <div className="footer__social">
            <a href={`https://www.linkedin.com/in/${linkedinUsername}`} className="footer__social-link" target="_blank">
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href={`https://github.com/${githubUsername}`} className="footer__social-link" target="_blank">
              <i className="uil uil-github"></i>
            </a>

            <a href={`https://instagram.com/${instaUsername}`} className="footer__social-link" target="_blank">
              <i className="uil uil-instagram"></i>
            </a>
          </div>
          <span className="footer__copy">&#169;Sonu NM, All rights reserved</span>
        </div>
      </div>
    </footer>
  )
};
