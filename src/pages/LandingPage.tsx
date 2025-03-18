import React from "react";
import "../styles/landingpage.css";
import hand from "../assets/icons/Hand.png";
import selectzoom from "../assets/icons/selectZoom.png";
import moderwear_1 from "../assets/images/ModernWear_1.jpg";
import moderwear_2 from "../assets/images/ModernWear_2.jpg";
import moderwear_3 from "../assets/images/ModernWear_3.jpg";
import moderwear_4 from "../assets/images/ModernWear_4.jpg";
import moderwear_6 from "../assets/images/ModernWear_6.jpg";

export default function LandingPage() {
  const arrow = "->";
  return (
    <div className="landing_page">
      <div className="landing_titles">
        <div className="title">
          <div className="hand">
            <img src={hand} alt="hand" className="handimg" />
          </div>
          Swipe.
        </div>
        <div className="title">
          <div className="select">
            <img src={selectzoom} alt="hand" className="selectzoom" />
          </div>
          Select.
        </div>
        <div className="title">
          <div
            style={{
              textDecoration: "line-through",
              textDecorationColor: "#f8545D",
              textDecorationThickness: "3px",
            }}
          >
            Slay
          </div>
        </div>
      </div>
      <h3 className="sub_title">"Modern"</h3>
      <div className="getStarted">Get started {arrow}</div>
      <div className="images">
        <div>
          <img src={moderwear_1} alt="img" className="cloth" />
        </div>
        <div>
          <img src={moderwear_3} alt="img" className="cloth_2" />
        </div>
        <div>
          <img src={moderwear_6} alt="img" className="cloth_3" />
        </div>
        <div>
          <img src={moderwear_2} alt="img" className="cloth_4" />
        </div>

        <div>
          <img src={moderwear_4} alt="img" className="cloth_5" />
        </div>
      </div>
    </div>
  );
}
