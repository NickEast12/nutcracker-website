import React from 'react';
import Layout from '../components/Layout';

import NXThreeHero from '../components/nx3/hero';
import Body from '../components/nx3/body';
import Why from '../components/nx3/why';
import Stats from '../components/nx3/stats';
import Cta from '../components/nx3/cta';
import Cards from '../components/nx3/cards';
import SEO from '../components/functional/SEO';


export default function NXThree() {
  return (
    <Layout alt>
      <SEO
        title="Nx3 | Award winning B2B Marketing Agency | Nutcracker"
        description="Contact us at Nutcracker, we can’t wait to hear from you. Together we can discover how you can finally fulfill your B2B Marketing needs and objectives. Fill out the contact us form and we’ll be in touch."
      />
        <NXThreeHero />
        <Body />
        <Cards />
        <Why />
        <Stats />
        <Cta />
    </Layout>
  )
}
