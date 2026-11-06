
import React, { useState } from "react";
import "./App.css";

const cards = [
  {
    title: "PLAYLIST",
    icon: "♫",
    description: "Your favourite playlists",
    back: "Discover and enjoy your favourite collections.",
    className: "playlist",
  },
  {
    title: "MUSIC",
    icon: "◉",
    description: "Feel every beat",
    back: "Explore music from different genres.",
    className: "music",
  },
  {
    title: "AUDIO",
    icon: "♫",
    description: "Premium sound",
    back: "Experience clear and premium audio.",
    className: "audio",
  },
];

function SideCard({ title, number, description, image, backText }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`side-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="side-card-inner">
        <div
          className="side-face side-front"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="side-overlay">
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <small>TOUCH TO FLIP ↗</small>
          </div>
        </div>

        <div className="side-face side-back">
          <span className="back-icon">♫</span>
          <h2>{title}</h2>
          <p>{backText}</p>
          <small>TOUCH TO RETURN ↗</small>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);

  const toggleFlip = (index) => {
    setFlippedCards((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="page">
      <section className="hero">
        <div className="logo">gaana</div>

        <div className="main-layout">

          {/* LEFT TRACK MEDIA */}
          <div className="side-section">
            <span className="section-label">01 / COLLECTION</span>
            <SideCard
              title="Track Media"
              number="01"
              description="Discover your music"
              image="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=900"
              backText="Discover your favourite music and explore a new world."
            />
          </div>

          {/* CENTER MUSIC EXPERIENCE */}
          <div className="center-section">
            <div
              className={`experience-card ${opened ? "opened" : ""}`}
              onClick={() => setOpened(!opened)}
            >
              <div className="experience-heading">
                <span>● MUSIC EXPERIENCE</span>
                <span>•••</span>
              </div>

              <div className="experience-content">
                <div className="music-symbol">♫</div>
                <h3>Music Experience</h3>
                <p>Feel every beat</p>
                <small>
                  {opened ? "TOUCH TO CLOSE" : "TOUCH TO EXPLORE"}
                </small>
              </div>
            </div>

            <div className="mini-card-container">
              {cards.map((card, index) => (
                <div
                  key={card.title}
                  className={`mini-card ${card.className} ${
                    opened ? "show" : ""
                  } ${flippedCards.includes(index) ? "flipped" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (opened) {
                      toggleFlip(index);
                    } else {
                      setOpened(true);
                    }
                  }}
                >
                  <div className="mini-card-inner">
                    <div className="mini-face mini-front">
                      <span className="mini-icon">{card.icon}</span>
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                    </div>

                    <div className="mini-face mini-back">
                      <span className="mini-icon">✦</span>
                      <h4>{card.title}</h4>
                      <p>{card.back}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT AUDIO PROFILE */}
          <div className="side-section">
            <span className="section-label">03 / EXPERIENCE</span>
            <SideCard
              title="Audio Profile"
              number="03"
              description="Premium experience"
              image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900"
              backText="Experience music with premium sound quality."
            />
          </div>

        </div>

        <div className="bottom-line">
          <span>INTERACTIVE 3D EXPERIENCE</span>
          <span>TOUCH TO EXPLORE ↓</span>
        </div>
      </section>
    </div>
  );
}

export default App;
