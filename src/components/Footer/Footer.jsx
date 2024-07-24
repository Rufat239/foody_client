import React from "react";
import foody from "../../assets/headerImages/Foody..png";
import facebook from "../../assets/socials/facebook.svg";
import instagram from "../../assets/socials/instagram.svg";
import twitter from "../../assets/socials/twitter.svg";
import "../../style/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          {/* <h1 className="logo-text">Foody .</h1> */}
          <svg
            width="86"
            height="29"
            viewBox="0 0 86 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6108 3.36V6.608H4.38681V10.92H10.9948V14.14H4.38681V21H0.130814V3.36H11.6108ZM27.664 14.196C27.664 15.2973 27.4773 16.2867 27.104 17.164C26.7493 18.0413 26.2547 18.788 25.62 19.404C24.9853 20.02 24.2387 20.496 23.38 20.832C22.5213 21.1493 21.5973 21.308 20.608 21.308C19.6187 21.308 18.6947 21.1587 17.836 20.86C16.996 20.5427 16.268 20.0947 15.652 19.516C15.036 18.9373 14.5507 18.228 14.196 17.388C13.8413 16.5293 13.664 15.5587 13.664 14.476C13.664 13.3373 13.8413 12.32 14.196 11.424C14.5693 10.528 15.0733 9.772 15.708 9.156C16.3427 8.54 17.0893 8.07333 17.948 7.756C18.8067 7.42 19.7307 7.252 20.72 7.252C21.7093 7.252 22.624 7.40133 23.464 7.7C24.3227 7.99867 25.06 8.44667 25.676 9.044C26.292 9.62267 26.7773 10.3413 27.132 11.2C27.4867 12.0587 27.664 13.0573 27.664 14.196ZM23.408 14.336C23.408 13.608 23.3333 12.992 23.184 12.488C23.0347 11.9653 22.8293 11.5453 22.568 11.228C22.3067 10.892 22.008 10.6493 21.672 10.5C21.336 10.3507 20.9907 10.276 20.636 10.276C20.2813 10.276 19.936 10.3413 19.6 10.472C19.2827 10.6027 18.9933 10.8267 18.732 11.144C18.4893 11.4613 18.2933 11.8813 18.144 12.404C17.9947 12.908 17.92 13.552 17.92 14.336C17.92 15.6987 18.2 16.6973 18.76 17.332C19.32 17.9667 19.964 18.284 20.692 18.284C21.0467 18.284 21.3827 18.2187 21.7 18.088C22.036 17.9387 22.3253 17.7147 22.568 17.416C22.8293 17.0987 23.0347 16.688 23.184 16.184C23.3333 15.68 23.408 15.064 23.408 14.336ZM44.3634 14.196C44.3634 15.2973 44.1767 16.2867 43.8034 17.164C43.4487 18.0413 42.954 18.788 42.3194 19.404C41.6847 20.02 40.938 20.496 40.0794 20.832C39.2207 21.1493 38.2967 21.308 37.3074 21.308C36.318 21.308 35.394 21.1587 34.5354 20.86C33.6954 20.5427 32.9674 20.0947 32.3514 19.516C31.7354 18.9373 31.25 18.228 30.8954 17.388C30.5407 16.5293 30.3634 15.5587 30.3634 14.476C30.3634 13.3373 30.5407 12.32 30.8954 11.424C31.2687 10.528 31.7727 9.772 32.4074 9.156C33.042 8.54 33.7887 8.07333 34.6474 7.756C35.506 7.42 36.43 7.252 37.4194 7.252C38.4087 7.252 39.3234 7.40133 40.1634 7.7C41.022 7.99867 41.7594 8.44667 42.3754 9.044C42.9914 9.62267 43.4767 10.3413 43.8314 11.2C44.186 12.0587 44.3634 13.0573 44.3634 14.196ZM40.1074 14.336C40.1074 13.608 40.0327 12.992 39.8834 12.488C39.734 11.9653 39.5287 11.5453 39.2674 11.228C39.006 10.892 38.7074 10.6493 38.3714 10.5C38.0354 10.3507 37.69 10.276 37.3354 10.276C36.9807 10.276 36.6354 10.3413 36.2994 10.472C35.982 10.6027 35.6927 10.8267 35.4314 11.144C35.1887 11.4613 34.9927 11.8813 34.8434 12.404C34.694 12.908 34.6194 13.552 34.6194 14.336C34.6194 15.6987 34.8994 16.6973 35.4594 17.332C36.0194 17.9667 36.6634 18.284 37.3914 18.284C37.746 18.284 38.082 18.2187 38.3994 18.088C38.7354 17.9387 39.0247 17.7147 39.2674 17.416C39.5287 17.0987 39.734 16.688 39.8834 16.184C40.0327 15.68 40.1074 15.064 40.1074 14.336ZM56.3308 0.979999H60.4748V21H57.6188L57.1988 19.544H57.0588C56.7974 19.9547 56.3401 20.356 55.6868 20.748C55.0521 21.1213 54.2121 21.308 53.1668 21.308C52.2894 21.308 51.4774 21.1493 50.7308 20.832C49.9841 20.496 49.3401 20.0293 48.7988 19.432C48.2574 18.816 47.8281 18.0787 47.5108 17.22C47.2121 16.3427 47.0628 15.3627 47.0628 14.28C47.0628 13.216 47.2028 12.2547 47.4828 11.396C47.7628 10.5187 48.1641 9.78133 48.6868 9.184C49.2281 8.568 49.8908 8.092 50.6748 7.756C51.4588 7.42 52.3454 7.252 53.3348 7.252C53.9508 7.252 54.5294 7.34533 55.0708 7.532C55.6308 7.7 56.0508 7.91467 56.3308 8.176V0.979999ZM56.3308 11.2C56.1628 10.976 55.9014 10.7613 55.5468 10.556C55.1921 10.3507 54.8001 10.248 54.3708 10.248C53.9414 10.248 53.5401 10.3227 53.1668 10.472C52.7934 10.6027 52.4574 10.8267 52.1588 11.144C51.8788 11.4613 51.6548 11.872 51.4868 12.376C51.3188 12.8613 51.2348 13.468 51.2348 14.196C51.2348 15.596 51.5054 16.632 52.0468 17.304C52.6068 17.9573 53.3254 18.284 54.2028 18.284C54.7441 18.284 55.1921 18.144 55.5468 17.864C55.9201 17.584 56.1814 17.2853 56.3308 16.968V11.2ZM63.1982 7.56H67.7342L69.9462 13.552L70.8422 16.828H70.9542L71.7942 13.496L73.7262 7.56H77.9542L73.1102 21.252C72.8489 22.0173 72.5409 22.764 72.1862 23.492C71.8315 24.22 71.3929 24.9013 70.8702 25.536C70.3662 26.1707 69.7502 26.7493 69.0222 27.272C68.2942 27.7947 67.4169 28.224 66.3902 28.56L64.6822 25.34C65.7835 24.948 66.6889 24.388 67.3982 23.66C68.1262 22.932 68.6115 22.092 68.8542 21.14L68.9102 20.916L63.1982 7.56Z"
              fill="#F5F5F5"
            />
            <path
              d="M80.2233 18.844C80.2233 18.1347 80.4566 17.556 80.9233 17.108C81.4086 16.6413 81.9779 16.408 82.6313 16.408C83.2846 16.408 83.8446 16.6413 84.3113 17.108C84.7779 17.556 85.0113 18.1347 85.0113 18.844C85.0113 19.6093 84.7779 20.216 84.3113 20.664C83.8446 21.0933 83.2846 21.308 82.6313 21.308C81.9779 21.308 81.4086 21.0933 80.9233 20.664C80.4566 20.216 80.2233 19.6093 80.2233 18.844Z"
              fill="#EAAB00"
            />
          </svg>
          <p>Lorem ipsum is placeholder text commonly used in the graphic.</p>
          <div className="socials">
            <Link to="#" className="socialsBorder1">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link to="#" className="socialsBorder2">
              <img src={instagram} alt="instagram" />
            </Link>
            <Link to="#" className="socialsBorder3">
              <img src={twitter} alt="twitter" />
            </Link>
          </div>
        </div>
        <div className="footerSectionLinks">
          <h2>Popular</h2>
          <ul>
            <li>
              <Link to="#">Programming</Link>
            </li>
            <li>
              <Link to="#">Books for children</Link>
            </li>
            <li>
              <Link to="#">Psychology</Link>
            </li>
            <li>
              <Link to="#">Business</Link>
            </li>
          </ul>
        </div>
        <div className="footerSectionLinks">
          <h2>Cash</h2>
          <ul>
            <li>
              <Link to="#">Delivery</Link>
            </li>
            <li>
              <Link to="#">Payment</Link>
            </li>
            <li>
              <Link to="#">About the store</Link>
            </li>
          </ul>
        </div>
        <div className="footerSectionLinks">
          <h2>Help</h2>
          <ul>
            <li>
              <Link to="#">Contacts</Link>
            </li>
            <li>
              <Link to="#">Purchase returns</Link>
            </li>
            <li>
              <Link to="#">Buyer help</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          All rights reserved &copy; 2003-2022 Foody TERMS OF USE | Privacy
          Policy
        </p>
      </div>
    </footer>
  );
}
export default Footer;
