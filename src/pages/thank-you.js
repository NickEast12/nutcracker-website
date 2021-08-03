import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Email from '../components/sections/email';

const ThankYou = () => {
  const i = true;
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Email
        message="Success"
        title="Thank you for signing up to our mailing list"
        text="Keep an eye on your inbox"
      />
    </Layout>
  );
};

export default ThankYou;
