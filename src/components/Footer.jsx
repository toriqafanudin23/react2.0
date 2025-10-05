import React from "react";
import "../styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="foot">
        <h1 className="footer-text">My Footer</h1>
        <h3>{this.props.pesan}</h3>
      </div>
    );
  }
}

export default Footer;
