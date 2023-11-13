import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkd from "@iconscout/react-unicons/icons/uil-linkedin";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mdmoinuddinmansoori@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/mmmansoori39" target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-moinuddin-mansoori-7532a7232/"
            target="_blank"
          >
            <Linkd color="white" size={"3rem"} />
          </a>
          <a href="https://www.instagram.com/mmmansoori39/" target="_blank">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/r.rabbaniya" target="_blank">
            <Facebook color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
