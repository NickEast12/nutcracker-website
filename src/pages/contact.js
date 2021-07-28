import React from 'react';
import SEO from '../components/functional/SEO';
import Layout from '../components/layout';
import ContactHeader from '../components/sections/contactheader';
import ContactMain from '../components/sections/contactmain';
import MapWrapper from '../components/sections/mapwrapper';

const Contact = () => {
  const alt = true;
  return (
    <Layout alt={alt}>
      <SEO />
      <ContactHeader />
      <ContactMain />
      <MapWrapper />
    </Layout>
  );
};

export default Contact;
