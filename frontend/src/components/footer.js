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
} from "react-icons/bs";
import React, { useState } from "react";


export default function () {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#1D1D1D] pt-6 mt-16">

      
      <div className="flex flex-col pt-6 justify-center items-center gap-10
      md:pb-09
      ">
        <h1
          className=" text-white font-bold
                text-2xl
                md:text-4xl"
        >
          Follow Us
        </h1>
        <div className="flex">
          <Button
            className=" bg-[#00FF66] text-white text-xl rounded-xl mr-3 hover:text-[#1D1D1F] hover:bg-[#FFFFFF] active:bg-[#00FF66]"
            size={{ base: "sm", md: "md" }}
          >
            #ict21
          </Button>
          <Button
            className=" bg-[#00FF66] text-white text-xl rounded-xl hover:text-[#1D1D1F] hover:bg-[#FFFFFF] active:bg-[#00FF66]"
            size={{ base: "sm", md: "md" }}
          >
            #muict
          </Button>
        </div>
        <div className="flex flex-row gap-4 md:gap-10  justify-center items-center">
          {/* <Button className=' w-fit rounded-xl font-semibold hover:text-black' size='lg' variant='outline'><Icon as={BsInstagram}></Icon></Button> */}
          <Link href="https://www.linkedin.com/company/muict/" target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsLinkedin}
              className="text-[#FFFFFF] hover:text-[#00FF66] transition-colors duration-500"
            ></Icon>
          </Link>
          <Link href="https://www.instagram.com/muict_studentactivities/" target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsInstagram}
              className="text-[#FFFFFF] hover:text-[#00FF66] transition-colors duration-500"
            ></Icon>
          </Link>
          <Link href="https://www.facebook.com/ict.mahidol.university" target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsFacebook}
              className="text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500"
            ></Icon>
          </Link>
          <Link href="https://twitter.com/ict_mahidol" target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsTwitter}
              className="text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500"
            ></Icon>
          </Link>
          <Link href="https://www.youtube.com/@ICTMahidol"  target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsYoutube}
              className="text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500"
            ></Icon>
          </Link>
          <Link href="https://www.tiktok.com/@ict_mahidol"  target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsTiktok}
              className="text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500"
            ></Icon>
          </Link>
        </div>

        <div className="flex flex-col p-2 md:p-10 justify-center items-center">
          <h1 className=" text-xl md:text-4xl text-white font-bold ">
            Join ICT21 Community
          </h1>
        </div>
        <div className="flex flex-row gap-4 md:gap-10  justify-center items-center">
          <Link href="https://discord.gg/AfQsmJ2c" target='_blank'>
            <Icon
              w={{ base: 8, md: 16 }}
              h={16}
              m="1"
              as={BsDiscord}
              className="text-[#FFFFFF] hover:text-[#00FF66]  transition-colors duration-500"
            ></Icon>
          </Link>
          
          

          <Popover trigger='hover'>
                  <PopoverTrigger>
                          {/* <Link href="https://line.me/ti/g/P_AK5vTkp1"  target='_blank'> */}
                    <Image
                      width={723}
                      height={414}
                      m="1"
                      src="/asset/forFooter/linewsf.svg"
                      loading="lazy"
                      className="text-[#FFFFFF] hover:text-[#00FF66] transition-colors duration-500 w-24 h-24"
                      alt="linewsf"
                    ></Image>
                       
                        {/* </Link> */}
                  </PopoverTrigger>
                    <PopoverContent className=' rounded-3xl items-center'>
                      
                      <PopoverBody className='p-6 items-center'>
                        
                          <Image width={150} height={150} src='/asset/forFooter/qrlinewsf.webp' alt="qr linewsf"/>
                          <Button
                             className="mt-8 rounded-full bg-[#00ff66] hover:text-[#F5F5F7] hover:bg-[#1D1D1F]"
                              size={{ base: "sm", md: "lg" }}
                              leftIcon={<BsLink/>}
                              
                          >
                            <Link href="https://line.me/ti/g/P_AK5vTkp1">Link</Link>
                            
                          </Button>
                      </PopoverBody>
                
                    </PopoverContent>
                </Popover>

                <Popover trigger='hover'>
                  <PopoverTrigger>
                  {/* <Link href="https://line.me/ti/g/dq75BhxwT-"  target='_blank'> */}
            <Image
              width={779}
              height={414}
              m="1"
              src="/asset/forFooter/linewosf.svg"
              className="text-[#FFFFFF] hover:text-[#00FF66] transition-colors duration-500 w-24 h-24"
              alt="line wosf"
            ></Image>
          {/* </Link> */}
                  </PopoverTrigger>
                    <PopoverContent className=' rounded-3xl items-center'>
                      
                      <PopoverBody className='p-6'>
                        
                          <Image width={150} height={150} src='/asset/forFooter/qrlinewosf.webp' alt="qr linewsf"/>
                          <Button
                             className="mt-8 rounded-full bg-[#00ff66] hover:text-[#F5F5F7] hover:bg-[#1D1D1F]"
                              size={{ base: "sm", md: "lg" }}
                              leftIcon={<BsLink/>}
                              
                          >
                            <Link href="https://line.me/ti/g/dq75BhxwT-">Link</Link>
                            
                          </Button>
                      </PopoverBody>
                    </PopoverContent>
                </Popover>


        </div>

        {/* Feedback goes here. */}
        <FeedbackPopover />
        
        <div className="text-[#00FF66] font-medium hover:text-[#F5F5F7]">
          <a href='/acknowledgement'>
           <h1>Acknowledgement</h1>
         </a>
         
        </div>
        <div className='flex flex-row rounded-3xl justify-center items-center p-3 md:p-6 my-8 md:my-16'>
          <p className=' font-medium md:font-medium text-[#EDEDED] text-xs md:text-xl text-center'>Proudly crafted from ❤️ for Nong ๆ ICT#21 by P ๆ ICT#20</p>
      </div>



        {/* copyright */}
        <div className="flex flex-col p-8 bg-black w-full h-1/2 justify-between  gap-8
        md:h-full 
        ">
          <div className="flex flex-col gap-7">
            <Image height={100} width={120} className="h-[100px] w-[120px]" src='/asset/ict21_logo.svg' alt="ICT21 logo color version"/>
            <h1 className="text-white text-base">Powered by</h1>
            <div className="flex flex-col md:flex-row w-full gap-0 md:gap-10">
              <Image height={100} width={200} className="h-[100px] w-[200px]" src='/asset/president_team.svg' alt="ICT President team logo"/>
              <Link href='https://ict.mahidol.ac.th' target='_blank'><Image height={100} width={100} src='/asset/mu_ict.svg' alt="ICT and mu logo"/></Link>
              <Image height={100} width={100} className="h-[100px] w-[100px]" src='/asset/ict_badge_black.svg' alt="ICT21 badge"/>
            </div>
            <div className="flex flex-row gap-6">
              <a href='/privacy-policy' className='font-semibold text-[#00FF66] hover:text-[#F5F5F7]'>Privacy Policy</a>
              <a href='/terms' className='font-semibold text-[#00FF66] hover:text-[#F5F5F7]'>Terms of Use</a>
            </div>
            
          </div>
          <div className="flex items-end justify-between text-white text-[8px] md:text-xs">
            <h1 >Copyright © {year}. Developer Team, ICT20 President Team,<br/>in association with Faculty of Information and Communication Technology, Mahidol University. All rights reserved.<br/>Version 3.1.0</h1>
            <h1 >Apple® and Apple logo® are trademarks of Apple Inc.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

const Form = ({ ClosingPopover }) => {
  const toast = useToast();
  const [Feedback, setFeedback] = useState("");

  async function SendFeedback() {
    const response = await fetch("/api/question&feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: Feedback, type: "feedback" }),
    });
    const data = await response.json();
    console.log(data);

    setFeedback("");

    toast({
      title: "Thanks for your feedback <3",
      description: "We will work hard on your feedback.",
      status: "success",
      duration: 3000,
      isClosable: false,
    });
    return "SUCCESS";
  }

  return (
    <Stack spacing={4} className="text-xs md:text-base">
      <div>
        <a className="font-semibold text-md md:text-md">Feedback </a>
        <a className="font-semibold text-[#C60000]">*</a>
        <a className="font-regular text-[#1D1D1F] size-sm">
          (English or ภาษาไทย)
        </a>
      </div>
      <Textarea
        value={Feedback}
        isInvalid={() => Comment != null}
        id="question"
        resize={"none"}
        placeholder="Type your feedback here!"
        className="text-xs md:text-base rounded-2xl"
        onChange={(event) => {
          setFeedback(event.target.value);
        }}
      />

      <div className="flex w-full justify-center items-center">
        <Button
          isDisabled={Feedback === ""}
          className=" w-fit rounded-xl font-semibold hover:text-[#FFFFFF] hover:bg-[#000000]"
          size={{ base: "sm", md: "lg" }}
          variant="outline"
          onClick={async () => {
            SendFeedback();
            ClosingPopover();
          }}
        >
          Submit
        </Button>
      </div>
    </Stack>
  );
};

function FeedbackPopover() {
  return (
    <Popover placement="top" closeOnBlur={true}>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Button
              className="mt-8 rounded-full bg-[#00ff66] hover:text-[#1D1D1F] hover:bg-[#FFFFFF]"
              size={{ base: "sm", md: "lg" }}
            >
              Give Us Some Feedback
            </Button>
          </PopoverTrigger>
          <PopoverContent
            color="#1D1D1F"
            bg="#FFFFFF"
            className="rounded-3xl p-3"
            width={{ base: "sm", md: "md" }}
          >
            <PopoverHeader
              pt={4}
              fontWeight="bold"
              border="0"
              className=" 
          text-xs
          md:text-base"
            >
              <div className="flex items-center justify-between">
                <p>Give use some feedback</p>
                {/* <IconButton variant='unstyled' size='sm' aria-label='close' icon={<BsFillXCircleFill />} onClick={onClose}/> */}
              </div>
            </PopoverHeader>
            <PopoverArrow bg="#00FF66" />
            <PopoverBody
              className="
          text-xs
          md:text-base"
            >
              <p className="mb-4">
              We are accepting opinion and feedback from everyone to make sure that we will notice every issue that happens. The opinion and feedback will be anonymously collected by the way.
              </p>
              <FocusLock returnFocus persistentFocus={false}>
                <PopoverArrow />
                <Form ClosingPopover={onClose} />
              </FocusLock>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}