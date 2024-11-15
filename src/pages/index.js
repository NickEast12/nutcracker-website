import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/functional/SEO';
import Content from '../components/sections/content';
import SocialMedia from '../components/sections/socialmedia';
import Design from '../components/sections/design';
import Leads from '../components/sections/leads';
import Nx3 from '../components/sections/Nx3';
import PagePR from '../components/sections/prsection';
import Digital from '../components/index/digital';
import NewHero from '../components/nx3/new-hero';

const index = () => {
  const i = true;
  return (
    <Layout alt>
      <SEO />
      <NewHero />
      <Nx3 />
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
