import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={classes.footer}>
        <section className={classes.footer_block}>
          <div className={classes.footer_title}>Customer service</div>
          <ul className={classes.footer_menu}>
            <Link>
              <li>Terms of service</li>
            </Link>
            <Link>
              <li>Reclamation</li>
            </Link>
            <Link>
              <li>Return Policy</li>
            </Link>
            <Link>
              <li>Shop rules</li>
            </Link>
            <Link>
              <li>Privacy and cookie policy</li>
            </Link>
            <Link>
              <li>contact@szama.eu</li>
            </Link>
          </ul>
        </section>
        <section className={classes.footer_block}>
          <div className={classes.footer_title}>Information</div>
          <ul className={classes.footer_menu}>
            <Link>
              <li>Forms of delivery</li>
            </Link>
            <Link>
              <li>Payment methods</li>
            </Link>
            <Link>
              <li>About us - Szamy Store</li>
            </Link>
            <Link>
              <li>Szama recipes</li>
            </Link>
            <Link>
              <li>Guides</li>
            </Link>
          </ul>
        </section>
        <section className={classes.footer_block}>
          <div className={classes.footer_title}>Contact</div>
          <ul className={classes.footer_menu}>
            <li className={classes.footer_bordered}>
              <img
                src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-phone-icon-png-image_1757859.jpg"
                alt="phone"
              />
              + 48 999 888 777
            </li>
            <li className={classes.footer_bordered}>
              <img
                src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-email-icon-png-image_1757854.jpg"
                alt="e-mail"
              />
              Send us message
            </li>
            <li>
              <br />
            </li>
            <li>
              <strong>You can find us here:</strong>
            </li>
            <li>In Fb Yt Ti</li>
          </ul>
        </section>
      </section>
      <section className={classes.footer_copyright}>
        <div className={classes.border}></div>
        <p>&copy; 2023 Szama &#x24C7;</p>
      </section>
    </>
  );
};

export default Footer;
