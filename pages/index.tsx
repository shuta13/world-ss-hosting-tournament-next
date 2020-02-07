import React from 'react'
import Head from 'next/head'

import Greet from '../components/Greet'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Greet />
  </div>
)

export default Home
