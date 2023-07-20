"use client"
import dynamic from "next/dynamic";
import React from "react";

const Cards = dynamic(() => import('../components/index_c/card'))

export default function Home() {
  return (
    <>
    <h1 className="">
      Hello world!
    </h1>
    <Cards/>

    </>
  )
}

