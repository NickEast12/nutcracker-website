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
        title="Get in touch | Award winning B2B Marketing Agency | Nutcracker"
        description="Contact us at Nutcracker, we can’t wait to hear from you. Together we can discover how you can finally fulfill your B2B Marketing needs and objectives. Fill out the contact us form and we’ll be in touch."
      />
      <ContactHeader />
      <ContactMain />
      <MapWrapper sutton />
      <MapWrapper $second />
    </Layout>
  );
};

export default Contact;
