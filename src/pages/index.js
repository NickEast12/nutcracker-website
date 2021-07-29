import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import SEO from '../components/functional/SEO';
import Content from '../components/sections/content';
import SocialMedia from '../components/sections/socialmedia';
import Design from '../components/sections/design';
import Leads from '../components/sections/leads';
import PagePR from '../components/sections/prsection';

const index = () => {
  const i = true;
  return (
    <Layout alt>
      <SEO />
      <Hero />
      <Content />
      <SocialMedia />
      <Design />
      <Leads />
      <PagePR />
    </Layout>
  );
};

export default index;
