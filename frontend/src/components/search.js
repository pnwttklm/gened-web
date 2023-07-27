import {
    Text,
    Input,
  
  } from '@chakra-ui/react'

  import { useState, useEffect, useRef } from 'react';
  import React from "react";



    export default function SearchBox() {
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)
  
    return (
      <>
      <div className='relative h-32 w-screen'>
        <div className='lg:w-1/6 sm:w-screen md:w-3/6 absolute right-0 mr-16'>
        <Text mb='0px'>ค้นหารายวิชาที่สนใจ</Text>
        <Input
          value={value}
          onChange={handleChange}
          placeholder=''
          size='lg'
          className='rounded-none border-2 border-black'
        />
        </div>
        </div>
      </>
    )
  }