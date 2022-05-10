import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/sections/hero';
import SEO from '../components/functional/SEO';
import Content from '../components/sections/content';
import SocialMedia from '../components/sections/socialmedia';
import Design from '../components/sections/design';
import Leads from '../components/sections/leads';
import PagePR from '../components/sections/prsection';
import Digital from '../components/index/digital';

const index = () => {
  const i = true;
  return (
    <Layout alt>
      <SEO />
      <Hero />
      <Digital />
      <Content />
      <Leads />
      <Design />
      <PagePR />
      <SocialMedia />
    </Layout>
  );
};

export default index;
