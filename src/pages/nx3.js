import React from 'react';
import Layout from '../components/Layout';

import NXThreeHero from '../components/nx3/hero';
import Body from '../components/nx3/body';
import Why from '../components/nx3/why';
import Stats from '../components/nx3/stats';
import Cta from '../components/nx3/cta';


export default function NXThree() {
  return (
    <Layout alt>
        <NXThreeHero />
        <Body />
        <Why />
        <Stats />
        <Cta />
    </Layout>
  )
}
