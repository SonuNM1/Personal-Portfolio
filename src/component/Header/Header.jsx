import { useState } from "react";
import "./Header.css";
import { FaMoon, FaRegSun } from "react-icons/fa";

function Header() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    //add the box shadow to header when the scroll is higher than 200 viewport
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  // to show and hide menu in mobile devices
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    const circle = document.querySelector(".circle");

    if (theme === "dark") {
      setTheme("light");
      circle.style.backgroundColor = "#f0f0f0";
      circle.style.boxShadow = "0 0 10px #0f0f0f";

      document.documentElement.style.setProperty(
        "--title-color",
        "hsl(var(--hue), var(--sat), 20%)",
      );
      document.documentElement.style.setProperty(
        "--title-color-dark",
        "hsl(var(--hue), var(--sat), 0%)",
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "hsl(var(--hue), var(--sat), 46%)",
      );
      document.documentElement.style.setProperty(
        "--body-color",
        "hsl(var(--hue), var(--sat), 98%)",
      );
      document.documentElement.style.setProperty("--container-color", "#fff");
      document.documentElement.style.setProperty(
        "--cursor-trail-color",
        "0 0% 20%",
      );
    } else {
      setTheme("dark");
      circle.style.backgroundColor = "#0f0f0f";
      circle.style.boxShadow = "0 0 10px #f0f0f0";

      document.documentElement.style.setProperty(
        "--title-color",
        "hsl(var(--hue), var(--sat), 80%)",
      );
      document.documentElement.style.setProperty(
        "--title-color-dark",
        "hsl(var(--hue), var(--sat), 100%)",
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "hsl(var(--hue), var(--sat), 70%)",
      );
      document.documentElement.style.setProperty(
        "--body-color",
        "hsl(var(--hue), var(--sat), 10%)",
      );
      document.documentElement.style.setProperty(
        "--container-color",
        "hsl(var(--hue), var(--sat), 20%)",
      );
      document.documentElement.style.setProperty(
        "--cursor-trail-color",
        "0 0% 80%",
      );
    }
  }

  return (
    <header className="header">
      <nav className="nav container">
        {/* first child */}
        <a href="index.html" className="nav__logo">
          Sonu NM.
        </a>

        {/* second child */}
        <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
          {/* I removed grid class from ul element here 👇 */}
          <ul className="nav__list ">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav == "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav == "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav == "#skills" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav == "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav == "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav == "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <button onClick={toggleTheme} className="circle">
          {theme === "dark" ? (
            <FaRegSun className="sun" />
          ) : (
            <FaMoon className="moon" />
          )}
        </button>

        {/* third child */}
        <div className="nav__toggle">
          <i className="uil uil-apps" onClick={() => showMenu(!Toggle)}></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
