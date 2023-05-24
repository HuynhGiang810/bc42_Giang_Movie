import React from 'react'
import Banner from './Banner/Banner'
import Movies from './Movies/Movies'
import { useParams } from 'react-router-dom';

function Home() {
  const { mo} = useParams()
  return (
    <>
    <Banner/>

    <Movies/>
    </>
  );
}

export default Home