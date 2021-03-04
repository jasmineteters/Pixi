import React from 'react'
import Card from '../Components/Cards/';
import About from '../Components/About/'


export function Home(props) {
  return (
    <>
    <About/>

      <div className="flex flex-col tablet:flex-row justify-center flex-wrap">

        <Card addToCart={props.addToCart} />
        <Card addToCart={props.addToCart} />
        <Card addToCart={props.addToCart} />
        <Card addToCart={props.addToCart} />
        <Card addToCart={props.addToCart} />
        <Card addToCart={props.addToCart} />



      </div>
    </>
  )
};
