import React from "react";
import { OFFERINGS } from "../constants";
import { ArrowUpRight } from "lucide-react";
import "./MenuSection.css";

const MenuSection: React.FC = () => {
  return (
    <section className="menu-section">
      {/* Marquee remains as requested */}
      <div className="marquee-container">
        <div className="marquee-content">
          {Array(10)
            .fill("OFFERINGS • RITUALS • TASTE • ")
            .map((text, i) => (
              <span key={i} className="marquee-text">
                {text}
              </span>
            ))}
        </div>
      </div>

      <div className="container">
        <div className="offerings-layout">
          {OFFERINGS.map((item, idx) => (
            <div key={idx} className="offering-card">
              <div className="offering-visual">
                <div className="offering-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="offering-img"
                  />
                  <div className="offering-overlay"></div>
                </div>
                <div className="offering-number">0{idx + 1}</div>
              </div>

              <div className="offering-content">
                <h3 className="offering-title">{item.title}</h3>
                <div className="separator"></div>
                <p className="offering-description">{item.description}</p>

                <div className="offering-tags-wrapper">
                  {item.features.map((feature, fIdx) => (
                    <span key={fIdx} className="feature-pill">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="offering-link">
                  View Details <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
