"use client";
import {
  Icon,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  FocusLock,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsDiscord,
  BsTiktok,
  BsLinkedin,
  BsLink,
  BsChevronUp,
} from "react-icons/bs";
import React, { useState } from "react";

export default function () {
  const year = new Date().getFullYear();
  return (
    <div className="mt-32">
      
        {/* copyright */}
        <div className="flex flex-col p-8 bg-[#1A4789] w-full h-1/2 justify-between  gap-8
        md:h-full 
        ">
          <Image height={950} width={950} className="absolute right-0 bottom-0" alt='pattern' src='/pattern1-whiteyellow-pt.webp'/>
          <a href='/#about' className="absolute right-6 text-white">กลับขึ้นด้านบน  <Icon as={BsChevronUp}/></a>
          <div className="flex flex-col gap-7">
            <Image height={300} width={300} className=" w-[300px]" src='/mockLogoTH_white.svg' alt="GenED Logo"/>
            <h1 className="text-white text-base">Powered by</h1>
            <div className="flex flex-col md:flex-row w-full gap-0 md:gap-10">
              <Link href='https://mahidol.ac.th' target='_blank'><Image height={100} width={300} src='/horizontal-boxblack-rgb.webp' alt="Mahidol Logo"/></Link>
              <Link href='https://lifelong.mahidol.ac.th' target='_blank'><Image height={100} width={100} src='/lifelong_logo.webp' alt="Lifelong Logo"/></Link>
            </div>
            <div className="flex flex-row gap-6">
              <a href='/privacy-policy' className='font-semibold text-[#F5F5F7] hover:text-[#AD841F]'>Privacy Policy</a>
              <a href='/terms' className='font-semibold text-[#F5F5F7] hover:text-[#AD841F]'>Terms of Use</a>
              <a href='/acknowledgement' className='font-semibold text-[#F5F5F7] hover:text-[#AD841F]'>Acknowledgement</a>
            </div>
            
          </div>
          <div className="flex items-end justify-between text-white text-[8px] md:text-xs">
            <h1 >ศูนย์ส่งเสริมการเรียนรู้แบบบูรณาการชีวิต (Center for Life-integrated Learning, Mahidol University)<br/>
สำนักงานอธิการบดี มหาวิทยาลัยมหิดล<br/>
ชั้น 4 อาคารศูนย์การเรียนรู้มหิดล มหาวิทยาลัยมหิดล ศาลายา<br/>
999 ถนนพุทธมณฑลสาย 4 ตำบลศาลายา<br/>
อำเภอพุทธมณฑล จ.นครปฐม 73170<br/>
โทร. 02-849-4586, 02-849-4587, 02-849-4653<br/>
Version 0.1.0</h1>
          </div>
        </div>
        </div>
  );
}