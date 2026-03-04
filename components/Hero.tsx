import React, { useEffect, useState } from "react";
import { ViewState } from "../types";
import { ArrowDown } from "lucide-react";
import "./Hero.css";

interface HeroProps {
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div
        className="hero-bg-circle-1"
        style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
      ></div>
      <div className="hero-bg-circle-2"></div>

      <div className="hero-grid">
        <div className="hero-typography">
          <div className="hero-text-wrapper">
            <h1
              className="hero-title primary animate-float"
              style={{ animationDuration: "4s" }}
            >
              Dark
            </h1>
          </div>
          <div className="hero-text-wrapper indent">
            <h1
              className="hero-title accent animate-float"
              style={{ animationDuration: "5s", animationDelay: "0.5s" }}
            >
              Roast
            </h1>
          </div>
          <div className="hero-text-wrapper">
            <h1
              className="hero-title primary animate-float"
              style={{ animationDuration: "6s", animationDelay: "1s" }}
            >
              Dreams
            </h1>
          </div>
        </div>

        <div className="hero-visual">
          <div
            className="hero-image-container"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          >
            <div className="hero-shape">
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop"
                alt="Coffee Art"
                className="hero-img"
              />
            </div>

            <div className="hero-badge animate-spin-slow">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <path
                  id="curve"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text fontSize="12" fill="#001621" letterSpacing="2">
                  <textPath xlinkHref="#curve">
                    EST. 2024 • ECLIPSE CAFE •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-footer">
        <p className="hero-desc">
          A sanctuary for the senses. Where precision meets passion in every
          cup. Experience the void.
        </p>
        <button
          onClick={() => setView(ViewState.OFFERINGS)}
          className="hero-cta"
        >
          Discover
          <ArrowDown size={16} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
