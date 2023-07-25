'use client'

import {
    Box,
    Button,
    Collapse,
    Flex,
    Text,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Tab,
    IconButton,
    Stack,
    Icon,
    Input,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    HStack,
} from '@chakra-ui/react';

import{
  BsListNested,
  BsXLg,
  BsChevronDown,
  BsChevronRight,

}from 'react-icons/bs'

import Image from 'next/image';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
  

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    
    function navColor() {
      if (isInclude()) {
        return 'white'
      }
      else {
        return 'black'
      }
    }

    function navColorContrast() {
      if (isInclude()) {
        return 'black'
      }
      else {
        return 'white'
      }
    }
    
    function Logo() {
      if (isInclude()) {
        return 'mockLogoTH.svg'
      }
      else {
        return 'mockLogoTH.svg'
      }
    }

    return (
      <Box id='about' className='z-20 top-0'>
        <Flex className={` w-screen h-20 drop-shadow-md backdrop-blur-[56px] bg-[#FFFFFF]`}>

          <Flex className="flex flex-1 justify-between">
            <Link href="/" className="nav-items"><Image width={300} height={100} src={`/${Logo()}`} className="  drop-shadow-md" alt='logo-navbar'/></Link>
            <Flex className="hidden md:flex mr-4">
              <DesktopNav />
            </Flex>
          </Flex>

          <div className='flex items-center'>
            <Link href="/meet-our-team" className="nav-items">
                {/* <Image priority width={512} height={512} src="/asset/meet_our_team.svg" className=" h-32 pt-4 w-32 drop-shadow-md" alt='meetOurTeamLogo-navbar'></Image> */}
                
            </Link>

            <Flex
              className='flex md:hidden items-center mr-2'
            >
              <IconButton
                className={` text-${navColorContrast()} text-3xl`}
                onClick={onToggle}
                icon={
                  isOpen ? <BsXLg w={12} h={12} /> : <BsListNested w={12} h={12} />
                }
                variant='unstyled'
                aria-label={'Toggle Navigation'}
              /> 
            </Flex>
          </div>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity className=' text-white'>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = function() {
    const pathname = usePathname();

    function navColor() {
      if (isInclude()) {
        return 'black'
      }
      else {
        return 'white'
      }
    }

    const linkColor = useColorModeValue(navColor(), navColor());
    const linkHoverColor = useColorModeValue('#00FF66', 'white');
    const popoverContentBgColor = useColorModeValue('#EDEDED', 'white');
  
    return (
      <Stack direction={'row'} spacing={{base:'0.5' , lg:'7'}} alignItems='center'>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} style={navItem.style}>
            <Popover trigger={'hover'} placement={'bottom-end'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  className=' transition-colors duration-250'
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = function({ label, href, subLabel }) {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('#00FF66', '#F5F5F7') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: '#000000' }}
              fontWeight={400}
              fontSize={'sm'}>
              {label}
            </Text>
            <Text fontSize={'sm'} fontWeight={200}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'#000000'} w={5} h={5} as={BsChevronRight} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = function() {
    const pathname = usePathname();
    function navColor() {
      if (isInclude()) {
        return 'white'
      }
      else {
        return 'black'
      }
    }
    return (
      <Stack className={`h-screen backdrop-blur-[56px] bg-${navColor()} p-4`} display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = function({ label, children, href }) {
    const pathname = usePathname();

    function navColorContrast() {
      if (isInclude()) {
        return 'black'
      }
      else {
        return 'white'
      }
    }
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <HStack spacing={4}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}
          >
            
          <Text
            fontWeight={500}
            className='text-2xl'
            color={`${navColorContrast()}`}>
            {label}
          </Text>
        </Flex>
          {children && (
            <Icon
              as={BsChevronDown}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={12}
              h={12}
              onClick={onToggle}
            />
          )}
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child, index) => (
                
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
                
              ))}
          </Stack>
        </Collapse>
      </HStack>
    );
  };



  const navStyle = {
    padding: '15px',
  };
  
const NAV_ITEMS= [
  {
    label: 'เกี่ยวกับ',
    style: {...navStyle},
  },
  {
    label: 'ค้นหา',
    style: {...navStyle}
  }
];

function isInclude() {
  const pathname = usePathname();
  if (pathname.includes('/guide-book')  || pathname.includes('/meet-our-team') || pathname.includes('/privacy-policy') || pathname.includes('/terms')) {
    return true
  }
  else {
    return true
  }
}