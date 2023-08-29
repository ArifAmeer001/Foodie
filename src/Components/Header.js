import "../App.css";
// import SearchBox from './SearchBox';
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import { useState, useEffect } from "react";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${headerActive ? "active" : ""}`} data-header>
        <div className="container">
          <h1>
            <a href="#" class="logo">
              Pakistan Nihari and Sheermal House<span className="span">.</span>
            </a>
          </h1>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li className="nav-item">
                <a href="#home" className="navbar-link" data-nav-link>
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="#about" className="navbar-link" data-nav-link>
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a href="#food-menu" className="navbar-link" data-nav-link>
                  Shop
                </a>
              </li>

              <li className="nav-item">
                <a href="#blog" class="navbar-link" data-nav-link>
                  Blog
                </a>
              </li>

              <li className="nav-item">
                <a href="#" class="navbar-link" data-nav-link>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search" data-search-btn>
              <IonIcon icon={searchOutline}></IonIcon>
            </button>

            <button className="btn btn-hover">Reservation</button>

            <button
              className="nav-toggle-btn"
              aria-label="Toggle Menu"
              data-menu-toggle-btn
            >
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
