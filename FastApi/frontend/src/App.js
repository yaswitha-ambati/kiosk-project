import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGem,
  FaHome,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

// ✅ Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success-subtle sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/logo2.png"}
            alt="Smart Serve Logo"
            className="img-fluid me-2 rounded shadow-sm"
            style={{
              height: "60px",
              width: "auto",
              objectFit: "cover",
              borderRadius: "50%",
              backgroundColor: "#f8fff8",
              padding: "4px",
            }}
          />
          <span className="navbar-brand-name text-success fw-bold fs-4">
            Smart Serve
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/services/cafe">
                    Cafe Managed Services
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/saas">
                    SaaS Solution
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/events">
                    Events & Pop-ups
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sectors">
                Sectors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <form className="d-flex ms-5" role="search">
            <Link to="/login" className="btn btn-outline-success me-3">
              Login
            </Link>
            <Link to="/signup" className="btn btn-outline-success">
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

// ✅ Footer Component
const Footer = () => {
  return (
    <footer className="bg-success-subtle text-muted pt-4 pb-2">
      {/* Social Section */}
      <section className="d-flex justify-content-center justify-content-lg-between px-5 pb-3 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span className="fw-semibold">Get connected with us:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <FaFacebookF />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaTwitter />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaGoogle />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaInstagram />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaLinkedin />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaGithub />
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="pt-4">
        <div className="container text-center text-md-start">
          <div className="row mt-3">
            {/* Smart Serve */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-3 d-flex align-items-center">
                <FaGem className="me-2 text-secondary" /> Smart Serve
              </h6>
              <p className="small">
                Smart Serve is your one-stop solution for all your food and
                beverage needs.
              </p>
            </div>

            {/* Company */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-3">Company</h6>
              <p>
                <Link to="/about" className="text-reset text-decoration-none">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/services" className="text-reset text-decoration-none">
                  Our Services
                </Link>
              </p>
              <p>
                <Link to="/sectors" className="text-reset text-decoration-none">
                  Sectors
                </Link>
              </p>
            </div>

            {/* Services */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-3">Services</h6>
              <p>
                <Link
                  to="/services/cafe"
                  className="text-reset text-decoration-none"
                >
                  Cafeteria Managed
                </Link>
              </p>
              <p>
                <Link
                  to="/services/saas"
                  className="text-reset text-decoration-none"
                >
                  SaaS Solution
                </Link>
              </p>
              <p>
                <Link
                  to="/services/events"
                  className="text-reset text-decoration-none"
                >
                  Events & Pop-ups
                </Link>
              </p>
            </div>

            {/* Contact */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-3">Contact</h6>
              <p className="mb-2">
                <FaHome className="me-2" /> RETOUCH IT SERVICES
              </p>
              <p className="mb-2">
                <FaEnvelope className="me-2" /> retouch@example.com
              </p>
              <p className="mb-0">
                <FaPhone className="me-2" /> +91-1111111111
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center py-3 border-top">
        © {new Date().getFullYear()} Smart Serve. All rights reserved.
      </div>
    </footer>
  );
};

// ✅ Pages
const Home = () => (
  <div className="container text-center py-5">
    <h1 className="text-success">Welcome to Smart Serve</h1>
    <p>Manage your food services, cafes, and catering efficiently.</p>
  </div>
);

const About = () => (
  <div className="container py-5">
    <h2 className="text-success">About Smart Serve</h2>
    <p>
      Smart Serve provides a complete suite of solutions for cafeterias, events,
      and SaaS-based restaurant management. Our mission is to make operations
      simple and smart.
    </p>
  </div>
);

const Contact = () => (
  <div className="container py-5">
    <h2 className="text-success">Contact Us</h2>
    <p>Email: retouch@example.com</p>
    <p>Phone: +91-1111111111</p>
  </div>
);

const Sectors = () => (
  <div className="container py-5">
    <h2 className="text-success">Sectors We Serve</h2>
    <p>Corporate Cafes, Educational Institutions, Hospitals, and more!</p>
  </div>
);

const Services = () => (
  <div className="container py-5">
    <h2 className="text-success">Our Services</h2>
    <ul>
      <li>Cafeteria Management</li>
      <li>SaaS Solution for Food Services</li>
      <li>Events and Pop-ups</li>
    </ul>
  </div>
);

const Login = () => (
  <div className="container py-5">
    <h2 className="text-success">Login</h2>
    <p>Login page placeholder — connect with backend later.</p>
  </div>
);

const Signup = () => (
  <div className="container py-5">
    <h2 className="text-success">Sign Up</h2>
    <p>Signup page placeholder — connect with backend later.</p>
  </div>
);

// ✅ Main App Component
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
