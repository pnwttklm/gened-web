// import Image from "next/image";
import {
  Badge,
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  SimpleGrid,
  StarIcon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
  Stack,

} from '@chakra-ui/react'
import { Thasadith } from 'next/font/google'
import { BsArrowRight } from 'react-icons/bs';
import { useState } from "react";

export default function Card() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (index) => {
    setSelectedItem(questionElement[index]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  

  return (
    <>
      {/* tata of god of years*/}
      <div>
      <SimpleGrid columns={4} spacingX='40px' spacingY='20px' minChildWidth='300px' className='px-16'>
        {questionElement.map((property, index) => (
          <Box maxW='sm' borderWidth='1px' borderRadius='0' borderColor='black' overflow='hidden' key={index}>
            <Image src={property.imageUrl} alt={property.imageAlt}/>

            <Box p='6'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  New
                </Badge>
                {/* <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  {property.beds} beds &bull; {property.baths} baths
                </Box> */}
              </Box>

              <Box
                mt='1'
                fontWeight='bold'
                as='h4'
                lineHeight='tight'
                noOfLines={2}
              >
                  <h1>
                    {property.courseCode}
                  </h1>
              </Box>
              {property.courseTitle}

              <Box>
                
      
                <Box className='flex flex-col'as='span' mt={5}>
                <h1 className='font-bold'>
                  หลักสูตร
                </h1>
                {property.program}
                </Box>
              </Box>

              <Box display='flex' mt='2' alignItems='center'>
                {/* {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < property.rating ? 'teal.500' : 'gray.300'}
                      />
                    ))} */}
                    <Box className='flex flex-col'as='span'>
                <h1 className='font-bold'>
                  คณะที่สอน
                </h1>
                {property.faculty}
                </Box>

              </Box>
            </Box>
            <Button className='m-6 border-2 border-[#1A4789] bg-[#1A4789] text-[#FFFFFF] rounded-none hover:bg-[#FFFFFF] hover:text-[#1A4789]' variant='outline' mt={3} onClick={() => openModal(index)}>
              More Information <Icon ml="3" as={BsArrowRight}></Icon>
            </Button>
          </Box>
        ))}
      </SimpleGrid>



      <Modal isOpen={isOpen} onClose={closeModal} size="6xl" >
        <ModalOverlay />
        <ModalContent className='border-2 border-[#000000] rounded-none'> 
          <ModalHeader className='font-bold'>
            {/* <Image src={selectedItem?.imageUrl} alt={selectedItem?.imageAlt}/> */}
            {selectedItem?.courseCode} {selectedItem?.courseTitle}
            </ModalHeader>
          <Stack direction='row'>
            <Badge variant='outline' rounded={'full'} className='py-1 px-2' colorScheme='blue' marginLeft={6}>Inter</Badge>
            <Badge variant='outline' rounded={'full'} className='py-1 px-2' colorScheme='green' marginLeft={2}>Avaliable</Badge>
          </Stack>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table variant={"simple"} size={'sm'} >
                  <Tr>
                    <Th color={'grey'}> คณะ </Th>
                    <Th color={'grey'}> หน่วยกิต </Th>
                  </Tr>
                  <Tr>
                    <Th > {selectedItem?.faculty} </Th>
                    <Th>  {selectedItem?.credit} </Th>
                  </Tr>
                  <Tr>
                    <Th color={'grey'}> ภาควิชา/สาขาวิชา</Th>
                    <Th color={'grey'}>  หมวดวิชา/literacy </Th>
                  </Tr>
                  <Tr>
                    <Th> {selectedItem?.major} </Th>
                    <Th>  {selectedItem?.literacy} </Th>
                  </Tr>
                  <Tr>
                    <Th color={'grey'}> เงื่อนไขรายวิชา </Th>
                    <Th color={'grey'}>  grade </Th>
                  </Tr>
                  <Tr>
                    <Th> {selectedItem?.courseConditon} </Th>
                    <Th>  {selectedItem?.gradeSys} </Th>
                  </Tr>
              </Table>
            </TableContainer>

           
            <Stack>
              <Heading size={'md'} className='mt-5'>
                Course Description
              </Heading>
              <text>
              {selectedItem?.courseDes}
              </text>

              <Heading size={"md"}>
                Instructor
              </Heading>
              <Table>
              {selectedItem?.inst.map((instr, index) => (
                <Tr key={index}>
                  <Th>{index+1}. {instr.inName}</Th>
                  <Th>email: <a className='hover:underline' href={`mailto:${instr.inMail}`}>{instr.inMail}</a></Th>
                </Tr>
              ))}
              </Table>
            </Stack>
            <Heading size={"md"}>
              Section
            </Heading>
            <Table>
              <Thead>
                <Tr>
                  <Th color={'grey'}> Seat </Th>
                  <Th color={'grey'}> Day </Th>
                  <Th color={'grey'}> Ajarn </Th>
                  <Th color={'grey'}>  Location </Th>
                </Tr>
              </Thead>
              {selectedItem?.sec.map((sect, index) => (
              <Tr key={index}>
                <Th> {sect.secSeat} </Th>
                <Th> {sect.secDay} </Th>
                <Th> {selectedItem?.inst[sect.secAj].inName} </Th>
                <Th> {sect.secLocate} </Th>
              </Tr>
              ))}
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    </>
  )
}

const questionElement = [
  {
    imageUrl: 'https://mahidol.ac.th/temp/2020/07/salaya-01.jpg',
    // imageAlt: 'Rear view of modern home with pool',
    // beds: 3,
    // baths: 2,
    // title: 'SCGI195 Space Explore & Astrobiology',
    // formattedPrice: 'ไทย',
    // reviewCount: 34,
    // rating: 4,
    courseCode: 'SCGI195',
    courseTitle: 'Space Explore & Astrobiology',
    program: 'Thai',
    courseStatus: 'Avaliable',
    faculty: 'วิทยาศาสตร์',
    credit: 1,
    major: 'ดาราศาสตร์',
    literacy: 'Health Literacy',
    courseConditon: '(3-0-6)',
    gradeSys: 'OSU',
    courseDes: 'blah blah blah',
    inst: [
            {inName: 'Akara Supatak', inMail: 'akara.sup@mahidol.edu', inPic: ''},
            {inName: 'Siripen Pongphaichet', inMail: 'siripen.pon@mahidol.edu', inPic: ''}
          ],
    sec: [
          {
            secNum: 1,
            secSeat: 50,
            secDay: 'Tue 15:30-16:30',
            secAj: 0,
            secLocate: 'IT103 Faculty of ICT Building, Salaya'
          },
          {
            secNum: 1,
            secSeat: 50,
            secDay: 'Tue 16:30-17:30',
            secAj: 1,
            secLocate: 'IT103 Faculty of ICT Building, Salaya'
          },
      
        ],
  },
  {
    imageUrl: 'https://mahidol.ac.th/temp/2020/07/salaya-01.jpg',
    imageAlt: 'โอเคค่ะ',
    beds: 3,
    baths: 2,
    title: 'โอเคค่ะ',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://mahidol.ac.th/temp/2020/07/salaya-01.jpg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://mahidol.ac.th/temp/2020/07/salaya-01.jpg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://mahidol.ac.th/temp/2020/07/salaya-01.jpg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://mahidol.ac.th/temp/2020/07/salaya-01.jpg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://mahidol.ac.th/temp/2020/07/salaya-01.jpg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://mahidol.ac.th/temp/2020/07/salaya-01.jpg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://mahidol.ac.th/temp/2020/07/salaya-01.jpg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://mahidol.ac.th/temp/2020/07/salaya-01.jpg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: 'https://mahidol.ac.th/temp/2020/07/salaya-01.jpg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },


]