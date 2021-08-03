import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Message from '../components/sections/message';

const NotFound = () => {
  const i = true;
  return (
    <Layout alt>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Message
        title="404"
        subtitle="Hmm, we can't seem to find that page"
        text="This page has either changed or is no longer available"
      />
    </Layout>
  );
};

export default NotFound;
