"use client"
import dynamic from "next/dynamic";
import React from "react";

const Cards = dynamic(() => import('../components/index_c/card'))
const Tab = dynamic(() => import('../components/TabsComponent'))
export default function Home() {
  return (
    <>
    <Tab event_name='Overview' eventlink='' hasImg='hidden' img='' imgLink='' links={[{
        delink: '#about',
        name: 'About',
        detailContent: "This is a detailed Content right herer"
      }, {
        delink: '#gallery',
        name: 'Gallery'
      }, {
        delink: '#msg-from-senpai',
        name: 'Messages'
      }, {
        delink: '#faqs',
        name: 'FAQs'
      }
      
      ]} />
    <h1 className="">
      Hello world!
    </h1>
    <Cards/>
    </>
    
  )
}