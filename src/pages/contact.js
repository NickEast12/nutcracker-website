import React from 'react';
import SEO from '../components/functional/SEO';
import Layout from '../components/Layout';
import ContactHeader from '../components/sections/contactheader';
import ContactMain from '../components/sections/contactmain';
import MapWrapper from '../components/sections/mapwrapper';

const Contact = () => {
  const alt = true;
  return (
    <Layout alt={alt}>
      <SEO
        title="Contact us | Marketing Agency London | Nutcracker Agency"
        description="Contact us to find out how Nutcracker's marketing agency in London can create, implement and manage a successful marketing campaign for your business."
      />
      <ContactHeader />
      <ContactMain />
      <MapWrapper />
    </Layout>
  );
};

export default Contact;
