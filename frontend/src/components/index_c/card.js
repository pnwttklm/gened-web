// import Image from "next/image";
import {
  Badge,
  Box,
  Button,
  CircleIcon,
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
import { BsArrowRight, BsCircleFill } from 'react-icons/bs';
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
              <Box display='flex' alignItems='baseline' className='relative h-8 w-full'>
                <Badge borderRadius='full' px='3' py='1'  colorScheme={getStatus(property.status)[1]} className='absolute left-0'>
                  <Icon boxSize={6} as={BsCircleFill} className='pr-2'/>
                  {getStatus(property.status)[0]}
                </Badge>
                {/* <Badge borderRadius='full' px='3' py='1'  colorScheme={getStatus(property.status)[1]} className='absolute right-0'>
                  {getStatus(property.status)[0]}
                </Badge> */}
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
                  คณะที่เปิดสอน
                </h1>
                {property.faculty}
                </Box>

              </Box>
            </Box>
            <Button className='m-6 border-2 border-[#1A4789] bg-[#1A4789] text-[#FFFFFF] rounded-none hover:bg-[#FFFFFF] hover:text-[#1A4789]' variant='outline' mt={3} onClick={() => openModal(index)}>
              More Information <Icon ml="3" as={BsArrowRight}></Icon>
            </Button>
            <div className={`bg-${getLit(property.literacy)[1]}-300 `}>
                    {/* <h1>Hello</h1> */}
            </div>
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
            <Box display='flex' alignItems='baseline' className='pl-6 space-x-2'>
                <Badge borderRadius='full' px='3' py='1'  colorScheme={getStatus(selectedItem?.status)[1]}>
                  <Icon boxSize={6} as={BsCircleFill} className='pr-2'/>
                  {getStatus(selectedItem?.status)[0]}
                </Badge>
                <Badge borderRadius='full' px='3' py='1'  colorScheme={getLit(selectedItem?.literacy)[1]}>
                  {getLit(selectedItem?.literacy)[0]}
                </Badge>
              </Box>
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
                    <Th color={'grey'}> หลักสูตร </Th>
                  </Tr>
                  <Tr>
                    <Th> {selectedItem?.major} </Th>
                    <Th>  {selectedItem?.program} </Th>
                  </Tr>
                  <Tr>
                    <Th color={'grey'}> เงื่อนไขรายวิชา </Th>
                    <Th color={'grey'}>  ระบบเกรด </Th>
                  </Tr>
                  <Tr>
                    <Th> {selectedItem?.courseConditon} </Th>
                    <Th>  {selectedItem?.gradeSys} </Th>
                  </Tr>
              </Table>
            </TableContainer>

           
            <Stack>
              <Heading size={'md'} className='mt-5'>
                รายละเอียดรายวิชา
              </Heading>
              <text>
              {selectedItem?.courseDes}
              </text>

              <Heading size={"md"}>
                ผู้สอน
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
              เซคชัน
            </Heading>
            <Table>
              <Thead>
                <Tr>
                  <Th color={'grey'}>เซค</Th>
                  <Th color={'grey'}>ที่นั่ง</Th>
                  <Th color={'grey'}>วันและเวลา</Th>
                  <Th color={'grey'}> ผู้สอน </Th>
                  <Th color={'grey'}>  สถานที่ </Th>
                </Tr>
              </Thead>
              {selectedItem?.sec.map((sect, index) => (
              <Tr key={index}>
                <Th> {sect.secNum} </Th>
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/ICTBuilding.png?alt=media&token=a2e64f54-b92f-4c18-b45a-e743b1fa28f2',
    courseCode: 'SCGI195',
    courseTitle: 'Space Explore & Astrobiology',
    program: 'Thai',
    catagory: '',
    faculty: 'SC',
    credit: 1,
    major: 'ดาราศาสตร์',
    status: 'A', //A-Available, U-Unavailable, D-To Be Determined, R-Archive.
    literacy: 'H', //H-Health, I-Internationalization, D-Digital, E-Environmental, F-Financial, S-Sport, W-Science, L-Language, C-Civic, M-Mahidol
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/ICTBuilding.png?alt=media&token=a2e64f54-b92f-4c18-b45a-e743b1fa28f2',
    courseCode: 'SCGI195',
    courseTitle: 'Space Explore & Astrobiology',
    program: 'Thai',
    faculty: 'SC',
    credit: 1,
    major: 'ดาราศาสตร์',
    status: 'A', //A-Available, U-Unavailable, D-To Be Determined, R-Archive.
    literacy: 'I', //H-Health, I-Internationalization, D-Digital, E-Environmental, F-Financial, S-Sport, W-Science, L-Language, C-Civic, M-Mahidol
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/ICTBuilding.png?alt=media&token=a2e64f54-b92f-4c18-b45a-e743b1fa28f2',
    courseCode: 'SCGI195',
    courseTitle: 'Space Explore & Astrobiology',
    program: 'Thai',
    faculty: 'SC',
    credit: 1,
    major: 'ดาราศาสตร์',
    status: 'U', //A-Available, U-Unavailable, D-To Be Determined, R-Archive.
    literacy: 'D', //H-Health, I-Internationalization, D-Digital, E-Environmental, F-Financial, S-Sport, W-Science, L-Language, C-Civic, M-Mahidol
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/ICTBuilding.png?alt=media&token=a2e64f54-b92f-4c18-b45a-e743b1fa28f2',
    courseCode: 'SCGI195',
    courseTitle: 'Space Explore & Astrobiology',
    program: 'Thai',
    faculty: 'SC',
    credit: 1,
    major: 'ดาราศาสตร์',
    status: 'D', //A-Available, U-Unavailable, D-To Be Determined, R-Archive.
    literacy: 'E', //H-Health, I-Internationalization, D-Digital, E-Environmental, F-Financial, S-Sport, W-Science, L-Language, C-Civic, M-Mahidol
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/ICTBuilding.png?alt=media&token=a2e64f54-b92f-4c18-b45a-e743b1fa28f2',
    courseCode: 'SCGI195',
    courseTitle: 'Space Explore & Astrobiology',
    program: 'Thai',
    faculty: 'SC',
    credit: 1,
    major: 'ดาราศาสตร์',
    status: 'A', //A-Available, U-Unavailable, D-To Be Determined, R-Archive.
    literacy: 'F', //H-Health, I-Internationalization, D-Digital, E-Environmental, F-Financial, S-Sport, W-Science, L-Language, C-Civic, M-Mahidol
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
  

]

const getLit = (litAcro) => {
  switch (litAcro) {
    case 'H':
      return ['Health', 'pink'];
    case 'I':
      return ['Internationalization', 'blue'];
    case 'D':
      return ['Digital', 'purple'];
    case 'E':
      return ['Environmental', 'green'];
    case 'F':
      return ['Financial', 'yellow'];
    case 'S':
      return ['Sport', 'red'];
    case 'W':
      return ['Science', 'cyan'];
    case 'L':
      return ['Language', 'gray'];
    case 'C':
      return ['Civic', 'orange'];
    case 'M':
      return ['Mahidol', 'teal'];
    default:
      return ['Default', 'backAlpha'];
  }
};

const getStatus = (stsAcro) => {
  switch (stsAcro) {
    case 'A':
      return ['Available', 'green'];
    case 'U':
      return ['Unavailable', 'red'];
    case 'D':
      return ['To Be Determined', 'gray'];
    case 'R':
      return ['Archive', 'cyan'];
    default:
      return ['Unavailable', 'red'];
  }
};