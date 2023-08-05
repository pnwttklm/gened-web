"use client"
import dynamic from "next/dynamic";
import React from "react";

const Cards = dynamic(() => import('../components/index_c/card'))
// const Filter = dynamic(() => import('../components/filter'))
// const Slider = dynamic(() => import('../components/slider'))
// const Search = dynamic(() => import('../components/search'))
export default function Home() {
  return (
    <>
    <Cards/>
    </>
    
  )
}