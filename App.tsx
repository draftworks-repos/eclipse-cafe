import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import AiBarista from "./components/AiBarista";
import Footer from "./components/Footer";
import { ViewState } from "./types";
import "./styles/App.css";
import { Globe, Droplet, Flame } from "lucide-react";

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewState>(ViewState.HOME);

  return (
    <div className="app-container">
      <Navbar currentView={currentView} setView={setView} />

      <main className="main-content">
        {currentView === ViewState.HOME && (
          <div className="fade-in">
            <Hero setView={setView} />

            {/* Quote Section */}
            <div className="quote-section-wrapper">
              <div className="quote-bg-gradient"></div>
              <div className="quote-bg-circle"></div>
              <div className="quote-section">
                <div className="container">
                  <p className="quote-text">
                    "We don't just brew coffee; we extract the{" "}
                    <span className="text-nebula text-italic">soul</span> of the
                    bean."
                  </p>
                </div>
              </div>
            </div>

            <MenuSection />

            {/* NEW SECTION: Origin & Alchemy */}
            <section className="origin-section">
              <div className="container">
                <div className="origin-header">
                  <span className="section-supertext">Our Process</span>
                  <h2 className="section-heading">
                    Origin & <span className="text-nebula italic">Alchemy</span>
                  </h2>
                </div>

                <div className="origin-grid">
                  <div className="origin-card">
                    <div className="icon-box">
                      <Globe size={32} />
                    </div>
                    <h3>01. Source</h3>
                    <p>
                      We work directly with micro-lot farmers in Ethiopia and
                      Colombia, ensuring ethical wages and the highest grade
                      cherries.
                    </p>
                  </div>
                  <div className="origin-card">
                    <div className="icon-box">
                      <Flame size={32} />
                    </div>
                    <h3>02. Roast</h3>
                    <p>
                      Small-batch roasting in our local facility. We profile
                      every batch to highlight the unique terroir of the season.
                    </p>
                  </div>
                  <div className="origin-card">
                    <div className="icon-box">
                      <Droplet size={32} />
                    </div>
                    <h3>03. Extract</h3>
                    <p>
                      Precision temperature and pressure profiling. Our
                      AI-assisted machines ensure consistency in every single
                      pull.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Philosophy / About Teaser (Fixed Image) */}
            <section className="philosophy-teaser container">
              <div className="teaser-image-wrapper">
                {/* Updated image to a high quality cafe interior */}
                <img
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000&auto=format&fit=crop"
                  className="teaser-img"
                  alt="Interior"
                />
                <div className="since-badge">
                  <span>
                    Since
                    <br />
                    2024
                  </span>
                </div>
              </div>
              <div>
                <span className="teaser-label">The Philosophy</span>
                <h2 className="teaser-title">
                  Architecture of <br />
                  Taste.
                </h2>
                <p className="teaser-desc">
                  Eclipse is designed as a pause button for the city. Our space
                  uses sound dampening acoustics, warm lighting, and minimalist
                  design to create a void where you can disconnect from the
                  noise and reconnect with yourself.
                </p>
                <button
                  onClick={() => setView(ViewState.PHILOSOPHY)}
                  className="read-more-btn"
                >
                  Read Our Manifesto
                </button>
              </div>
            </section>
          </div>
        )}

        {currentView === ViewState.OFFERINGS && (
          <div className="view-section slide-up">
            <div className="container offerings-header">
              <h1 className="offerings-title">
                Curated <span className="text-nebula text-italic">Menu</span>
              </h1>
              <p className="offerings-subtitle">
                Seasonal rotations and signature classics.
              </p>
            </div>
            <MenuSection />
          </div>
        )}

        {currentView === ViewState.PHILOSOPHY && (
          <div className="philosophy-view fade-in">
            <div className="philosophy-content">
              <span className="vertical-line"></span>
              <h1 className="philosophy-heading">
                The <span className="text-nebula">Void</span>
              </h1>
              <p className="philosophy-statement">
                We believe that coffee is not just fuel, but a ritual. In a
                world of constant motion, we offer stillness.
              </p>
              <div className="philosophy-grid">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop"
                  className="philo-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1000&auto=format&fit=crop"
                  className="philo-img offset"
                />
              </div>
            </div>
          </div>
        )}
      </main>
      <AiBarista />
      <Footer />
    </div>
  );
};

export default App;
