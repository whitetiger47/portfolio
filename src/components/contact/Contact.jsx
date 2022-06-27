import { useState } from "react";
import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSteam,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub
} from "@fortawesome/free-brands-svg-icons";


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Let's have a conversation!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
        <h2>Connect with me on:</h2>
        <div class="social-container">
        
      <a href="https://www.linkedin.com/in/itssmitthakkar/"
        className="icon">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a href="https://github.com/whitetiger47"
        className="icon">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://twitter.com/itssmitthakkar"
        className="icon">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/itssmitthakkar/"
        className="icon">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.facebook.com/thakkarsmit.47/"
        className="icon">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://steamcommunity.com/id/whitetiger47/"
        className="icon">
        <FontAwesomeIcon icon={faSteam} size="2x" />
      </a>

        </div>
      </div>
    </div>
  );
}