import { Link } from 'gatsby';
import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookie = () => (
  <CookieConsent
    location="left"
    buttonText="Accept all cookies"
    cookieName="gatsby-gdpr-google-analytics"
    disableStyles
    containerClasses="cookie__wrapper"
    contentClasses="cookie__wrapper__content"
    buttonClasses="btn btn--main cookie--btn"
  >
    <p>
      We use cookies to provide you with the best possible website user
      experience. For full details read our{' '}
      <Link to="/cookie-policy">
        <span>Cookie Policy</span>
      </Link>
    </p>
  </CookieConsent>
);

export default Cookie;
