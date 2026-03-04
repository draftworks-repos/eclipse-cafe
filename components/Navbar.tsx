import React from "react";
import { ViewState } from "../types";
import { Sparkles } from "lucide-react";
import "./Navbar.css";

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="navbar">
      <div className="brand-container" onClick={() => setView(ViewState.HOME)}>
        <span className="brand-text">ECLIPSE.</span>
      </div>

      <div className="nav-links">
        {[
          { id: ViewState.OFFERINGS, label: "Offerings" },
          { id: ViewState.PHILOSOPHY, label: "Philosophy" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id as ViewState)}
            className="nav-item"
          >
            {item.label}
            <span className="nav-indicator"></span>
          </button>
        ))}

        <button className="visit-btn">
          <Sparkles size={14} />
          Visit Us
        </button>
      </div>

      <div className="mobile-menu-icon">
        <div className="hamburger-line"></div>
        <div className="hamburger-line short"></div>
      </div>
    </nav>
  );
};

export default Navbar;
