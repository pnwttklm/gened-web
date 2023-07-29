"use client"
import dynamic from "next/dynamic";
import React from "react";

const Cards = dynamic(() => import('../components/index_c/card'))
const Filter = dynamic(() => import('../components/filter'))

export async function getStaticProps() {
  const res = await fetch("http://www.s4nhxnu1.com:5000/api/data/course?id=&pageNum=0");
  const data = await res.json();
  return {
    props: { course: data.course }
  };
}

export default function Home({course}) {
  return (
    <>
    {/* <Tab event_name='Overview' eventlink='' hasImg='hidden' img='' imgLink='' links={[{
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
      
      ]} /> */}
    
    <Filter/>
    <Cards/>
    </>
    
  )
}