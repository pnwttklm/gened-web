// import Image from "next/image";
import {
  Badge,
  Box,
  Button,
  CircleIcon,
  Center,
  Divider,
  Heading,
  Flex,
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
  Text,
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
import { useEffect, useState } from "react";

const numSub = 0;

export default function Card() {

  const [apiData, setApiData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = 'http://www.s4nhxnu1.com:5000/api/data/course?key=&pageNum=0';
        const response = await fetch(apiUrl);
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const openModal = (index) => {
    setSelectedItem(apiData[index]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  

  return (
    <>
      {/* tata of god of years*/}
      <div className='px-16'>
      <h1 className='font-bold text-2xl'>รายวิชาที่เลือก (รวม {numSub} รายวิชา)</h1>



      <SimpleGrid columns={4} spacingX='40px' spacingY='20px' minChildWidth='300px' >
        {apiData.map((property, index) => (
          <Box maxW='sm' borderWidth='6px' borderRadius='12px' borderColor={`${getLit(property.literacy)[1]}.500`} overflow='hidden' key={index}>
            {/* <Image src={property.imageUrl} alt={property.imageAlt}/> */}

            <Box>
              <Box  className='bg-[#8CA3C4]' p='6'>
              <Box display='flex' alignItems='baseline' className='relative h-8 w-full'>
                <Badge borderRadius='full' px='3' py='1'  colorScheme={getStatus(property.status)[1]} className='absolute right-0 drop-shadow-lg'>
                  <Icon boxSize={6} as={BsCircleFill} className='pr-2'/>
                  {getStatus(property.Status)[0]}
                </Badge>
                {/* <Badge borderRadius='full' px='3' py='1'  colorScheme={getStatus(property.status)[1]} className='absolute right-0'>
                  {getStatus(property.status)[0]}
                </Badge> */}
              </Box>

              <Box
                mt='1'
                noOfLines={3}
              >
                  <h1 className='font-bold text-2xl'>{property.TitleEN}</h1>
                  <h1 className=' text-lg'>{property.CodeEN}</h1>
              </Box>
              </Box>
              <Box p='6'>
              <Box >
                <Box className='flex flex-col'as='span' mt={5}>
                <h1 className='font-bold'>
                  หลักสูตร
                </h1>
                {property.Program}
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
                {getFacName(property.Faculty)[0]}
                </Box>

              </Box>
            </Box>
            <Button className='m-6 border-2 border-[#1A4789] bg-[#1A4789] text-[#FFFFFF] rounded-none hover:bg-[#FFFFFF] hover:text-[#1A4789]' variant='outline' mt={3} onClick={() => openModal(index)}>
              More Information <Icon ml="3" as={BsArrowRight}></Icon>
            </Button >
            <Flex justify="space-between" align="center"  bg={`${getLit(property.literacy)[1]}.500`} className='text-white'>
      <Box  p="4" >
      <div>
        <h1>หน่วยกิต</h1>
          <h1>{property.credit}</h1>
      </div>
      </Box>
      <Box  p="4" >
      <div>
                      <h1>Literacy</h1>
                      <Text noOfLines={1}>{getLit(property.literacy)[0]}</Text>
                    </div>
      </Box>
      <Box  p="4" >
      <div className='text-[#FFC726]'>
                      <h1>เงื่อนไข</h1>
                      <h1>{property.courseConditon}</h1>
                    </div>
      </Box>
    </Flex>
          </Box>
          
          </Box>
          
        ))}
      </SimpleGrid>



      <Modal isOpen={isOpen} onClose={closeModal} size="6xl" >
        <ModalOverlay />
        <ModalContent className='border-2 border-[#000000] rounded-none'> 
          <ModalHeader className='font-bold'>
            {/* <Image src={selectedItem?.imageUrl} alt={selectedItem?.imageAlt}/> */}
            {selectedItem?.CodeEN}<br/>{selectedItem?.TitleEN}
            </ModalHeader>
            <Box display='flex' alignItems='baseline' className='pl-6 space-x-2'>
                <Badge borderRadius='full' px='3' py='1'  colorScheme={getStatus(selectedItem?.Status)[1]}>
                  <Icon boxSize={6} as={BsCircleFill} className='pr-2'/>
                  {getStatus(selectedItem?.Status)[0]}
                </Badge>
                <Badge borderRadius='full' px='3' py='1'  colorScheme={getLit(selectedItem?.Literacy)[1]}>
                  {getLit(selectedItem?.Literacy)[0]}
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
                    <Th > {getFacName(selectedItem?.Faculty)[0]} </Th>
                    <Th>  {selectedItem?.Credit} </Th>
                  </Tr>
                  <Tr>
                    <Th color={'grey'}> ภาควิชา/สาขาวิชา</Th>
                    <Th color={'grey'}> หลักสูตร </Th>
                  </Tr>
                  <Tr>
                    <Th> {selectedItem?.Major} </Th>
                    <Th>  {selectedItem?.Program} </Th>
                  </Tr>
                  <Tr>
                    <Th color={'grey'}> เงื่อนไขรายวิชา </Th>
                    <Th color={'grey'}>  ระบบเกรด </Th>
                  </Tr>
                  <Tr>
                    <Th> {selectedItem?.Cond} </Th>
                    <Th>  {selectedItem?.Grading} </Th>
                  </Tr>
              </Table>
            </TableContainer>

           
            <Stack>
              <Heading size={'md'} className='mt-5'>
                รายละเอียดรายวิชา
              </Heading>
              <text>
              {selectedItem?.DescriptionTH}
              </text>

              <Heading size={"md"}>
                ผู้สอน
              </Heading>
              <Table>
              {/*selectedItem?.inst.map((instr, index) => (
                <Tr key={index}>
                  <Th>{index+1}. {instr.inName}</Th>
                  <Th>email: <a className='hover:underline' href={`mailto:${instr.inMail}`}>{instr.inMail}</a></Th>
                </Tr>
              ))*/}
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
              {/*selectedItem?.sec.map((sect, index) => (
              <Tr key={index}>
                <Th> {sect.secNum} </Th>
                <Th> {sect.secSeat} </Th>
                <Th> {sect.secDay} </Th>
                <Th> {selectedItem?.inst[sect.secAj].inName} </Th>
                <Th> {sect.secLocate} </Th>
              </Tr>
              ))*/}
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

const questionElement = [/*
  {
    // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/ICTBuilding.png?alt=media&token=a2e64f54-b92f-4c18-b45a-e743b1fa28f2',
    courseCode: 'SCGI195',
    courseTitle: 'Space Explore & Astrobiology',
    program: 'Thai',
    catagory: '',
    faculty: 'IT',
    credit: 1,
    major: 'ดาราศาสตร์',
    status: 'Q', //A-Available, U-Unavailable, D-To Be Determined, R-Archive, Q-Required.
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
  

*/]

const getLit = (litAcro) => {
  switch (litAcro) {
    case 'H':
      return ['Health', 'red'];
    case 'I':
      return ['Internationalization', 'blue'];
    case 'D':
      return ['Digital', 'purple'];
    case 'E':
      return ['Environmental', 'green'];
    case 'F':
      return ['Financial', 'yellow'];
    case 'S':
      return ['Sport', 'pink'];
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
    case 'Q':
      return ['Required', 'purple'];
    default:
      return ['Unavailable', 'red'];
  }
};

const getFacName = (facAcro) => {
  switch (facAcro) {
    case 'AD':
      return ['สถาบันพัฒนาสุขภาพอาเซียน', 'ASEAN INSTITUTE FOR HEALTH DEVELOPMENT'];
    case 'AM':
      return ['โครงการจัดตั้งวิทยาเขตอำนาจเจริญ', 'AMNART CHAROEN CAMPUS'];
    case 'BM':
      return ['คณะแพทยศาสตร์วชิรพยาบาล  มหาวิทยาลัยนวมินทราธิราช', 'FACULTY OF MEDICINE VAJIRA HOSPITAL NAVAMINDRADHIRAJ UNIVERSITY'];
    case 'CE':
      return ['ศูนย์จิตตปัญญาศึกษา', 'CONTEMPLATIVE EDUCATION CENTER'];
    case 'CF':
      return ['สถาบันแห่งชาติเพื่อการพัฒนาเด็กและครอบครัว', 'NATIONAL INSTITUTE FOR CHILD & FAMILY DEVELOPMENT'];
    case 'CR':
      return ['วิทยาลัยศาสนศึกษา', 'COLLEGE OF RELIGIOUS STUDIES'];
    case 'CS':
      return ['โครงการร่วมคณะแพทย์/ทันตแพทย์', 'INTERDISCIPLINARY'];
    case 'DT':
      return ['คณะทันตแพทยศาสตร์', 'FACULTY OF DENTISTRY'];
    case 'EG':
      return ['คณะวิศวกรรมศาสตร์', 'FACULTY OF ENGINEERING'];
    case 'EN':
      return ['คณะสิ่งแวดล้อมและทรัพยากรศาสตร์', 'FACULTY OF ENVIRONMENT AND RESOURCE STUDIES'];
    case 'GR':
      return ['บัณฑิตวิทยาลัย', 'FACULTY OF GRADUATE STUDIES'];
    case 'HP':
      return ['โครงการจัดตั้งสถาบันสิทธิมนุษยชนและสันติศึกษา', 'PROJECT FOR THE ESTABLISHMENT OF THE INSTITUTE OF HUMAN RIGHTS AND PEACE STUDIES'];
    case 'HS':
      return ['Human Study e.V. และคณะแพทยศาสตร์ศิริราชพยาบาล', 'HUMAN STUDY e.V.& FACULTY OF MEDICINE SIRIRAJ HOSPITAL'];
    case 'IC':
      return ['วิทยาลัยนานาชาติ', 'MAHIDOL UNIVERSITY INTERNATIONAL COLLEGE'];
    case 'ID':
      return ['สาธิตนานาชาติ', 'DEMONSTRATION SCHOOL'];
    case 'IL':
      return ['สถาบันนวัตกรรมการเรียนรู้', 'Institute for Innovative Learning'];
    case 'IT':
      return ['คณะเทคโนโลยีสารสนเทศและการสื่อสาร', 'FACULTY OF INFORMATION AND COMMUNICATION TECHNOLOGY'];
    case 'KA':
      return ['มหาวิทยาลัยมหิดล วิทยาเขตกาญจนบุรี', 'MAHIDOL UNIVERSITY KANCHANABURI CAMPUS'];
    case 'KM':
      return ['วิทยาลัยแพทยศาสตร์พระมงกุฎเกล้า', 'PHRAMONGKUTKLAO COLLEGE OF MEDICINE'];
    case 'LA':
      return ['คณะศิลปศาสตร์', 'FACULTY OF LIBERAL ARTS'];
    case 'LC':
      return ['สถาบันวิจัยภาษาและวัฒนธรรมเอเซีย', 'RESEARCH INSTITUTE FOR LANGUAGES & CULTURES OF ASIA'];
    case 'MB':
      return ['สถาบันชีววิทยาศาสตร์โมเลกุล', 'INSTITUTE OF MOLECULAR BIOSCIENCES'];
    case 'MG':
      return ['วิทยาลัยการจัดการ', 'COLLEGE OF MANAGEMENT'];
    case 'MS':
      return ['วิทยาลัยดุริยางคศิลป์', 'COLLEGE OF MUSIC'];
    case 'MT':
      return ['คณะเทคนิคการแพทย์', 'FACULTY OF MEDICAL TECHNOLOGY'];
    case 'MU':
      return ['มหาวิทยาลัยมหิดล', 'MAHIDOL UNIVERSITY'];
    case 'NA':
      return ['สถาบันพระบรมราชชนก (โรงพยาบาลมหาราชนครราชสีมา)', 'PRABOROMARAJCHANOK INSTITUTE'];
    case 'NR':
      return ['โครงการร่วมค.แพทย์ศาสตร์รพ.รามาธิบดี/ค.พยาบาลศาสตร์', 'FACULTY OF MEDICINE RAMATHIBODI HOSP/FAC OF NURSING'];
    case 'NS':
      return ['คณะพยาบาลศาสตร์', 'FACULTY OF NURSING'];
    case 'NT':
      return ['สถาบันพระบรมราชชนก (โรงพยาบาลมหาราชนครศรีธรรมราช)', 'PRABOROMARAJCHANOK INSTITUTE'];
    case 'NU':
      return ['สถาบันโภชนาการ', 'INSTITUTE OF NUTRITION'];
    case 'NV':
      return ['สถาบันพระบรมราชชนก (โรงพยาบาลสวรรค์ประชารักษ์)', 'PRABOROMARAJCHANOK INSTITUTE'];
    case 'NW':
      return ['โครงการจัดตั้งวิทยาเขตนครสวรรค์', 'MAHIDOL UNIVERSITY NAKHONSAWAN CAMPUS'];
    case 'PC':
      return ['วิทยาลัยวิทยาศาสตร์การแพทย์เจ้าฟ้าจุฬาภรณ์ ราชวิทยาลัยจุฬาภรณ์', 'HRH PRINCESS CHULABHORN COLLEGE OF MEDICAL SCIENCE'];
    case 'PH':
      return ['คณะสาธารณสุขศาสตร์', 'FACULTY OF PUBLIC HEALTH'];
    case 'PI':
      return ['สถาบันพระบรมราชชนก', 'PRABOROMARAJCHANOK INSTITUTE'];
    case 'PR':
      return ['สถาบันวิจัยประชากรและสังคม', 'INSTITUTE FOR POPULATION AND SOCIAL RESEARCH'];
    case 'PS':
      return ['วิทยาลัยแพทยศาสตร์ศรีสวางควัฒน', 'PRINCESS SRISAVANGAVADHANA COLLEGE OF MEDICINE'];
    case 'PT':
      return ['คณะกายภาพบำบัด', 'FACULTY OF PHYSICAL THERAPY'];
    case 'PY':
      return ['คณะเภสัชศาสตร์', 'FACULTY OF PHARMACY'];
    case 'RA':
      return ['คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี', 'FACULTY OF MEDICINE RAMATHIBODI HOSPITAL'];
    case 'RB':
      return ['สถาบันพระบรมราชชนก (โรงพยาบาลราชบุรี)', 'PRABOROMARAJCHANOK INSTITUTE'];
    case 'RS':
      return ['วิทยาลัยราชสุดา', 'RATCHASUDA COLLEGE'];
    case 'SC':
      return ['คณะวิทยาศาสตร์', 'FACULTY OF SCIENCE'];
    case 'SH':
      return ['คณะสังคมศาสตร์และมนุษยศาสตร์', 'FACULTY OF SOCIAL SCIENCES AND HUMANITIES'];
    case 'SI':
      return ['คณะแพทยศาสตร์ศิริราชพยาบาล', 'FACULTY OF MEDICINE SIRIRAJ HOSPITAL'];
    case 'SP':
      return ['วิทยาลัยวิทยาศาสตร์และเทคโนโลยีการกีฬา', 'COLLEGE OF SPORTS SCIENCE AND TECHNOLOGY'];
    case 'TM':
      return ['คณะเวชศาสตร์เขตร้อน', 'FACULTY OF TROPICAL MEDICINE'];
    case 'VS':
      return ['คณะสัตวแพทยศาสตร์', 'FACULTY OF VETERINARY SCIENCE'];
    default:
      return ['ไม่มีข้อมูล', 'N/A'];
  }
};