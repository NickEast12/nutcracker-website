import React from 'react';
import Layout from '../components/Layout';
import Email from '../components/sections/email';

const Success = () => {
  const i = true;
  return (
    <Layout>
      <Email
        message="Success"
        title="Thank you for getting in touch"
        text="A member of the team will be in touch shortly."
      />
    </Layout>
  );
};

export default Success;
