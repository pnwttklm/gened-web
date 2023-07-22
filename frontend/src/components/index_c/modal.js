// import Image from "next/image";
import {
    Badge,
    Box,
    Button,
    Heading,
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
  
  export default function Card() {
  
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Modal onClose={onClose} size="6xl" isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className='font-bold'>
              {/* <Image src={property.imageUrl} alt={property.imageAlt}/> */}
              SCGI195 Space Explor & Astrobiology
              </ModalHeader>
            <Stack direction='row'>
              <Badge variant='outline' rounded={'full'} className='py-1 px-2' colorScheme='blue' marginLeft={6}>Inter</Badge>
              <Badge variant='outline' rounded={'full'} className='py-1 px-2' colorScheme='green' marginLeft={2}>Avaliable</Badge>
            </Stack>
            <ModalCloseButton />
            <ModalBody>
              <TableContainer>
                <Table variant={"simple"} size={'sm'} className=''>
                    <Tr>
                      <Th color={'grey'}> คณะ </Th>
                      <Th color={'grey'}> หน่วยกิต </Th>
                    </Tr>
                    <Tr>
                      <Th > วิทยศาสตร์ </Th>
                      <Th>  1 </Th>
                    </Tr>
                    <Tr>
                      <Th color={'grey'}> กวดวิชา/สาขาวิชา</Th>
                      <Th color={'grey'}>  หมวดวิชา/literacy </Th>
                    </Tr>
                    <Tr>
                      <Th> Something? </Th>
                      <Th>  sci and env </Th>
                    </Tr>
                    <Tr>
                      <Th color={'grey'}> เงื่อนไขรายวิชา </Th>
                      <Th color={'grey'}>  grade </Th>
                    </Tr>
                    <Tr>
                      <Th> - </Th>
                      <Th>  OSU </Th>
                    </Tr>
                </Table>
              </TableContainer>
  
              <Stack>
                <Heading size={'md'} className='mt-5'>
                  Course Description
                </Heading>
                <text>
                  The origin and evolution of life; possibility of evolution on other planet; application of astrobiology; space education in Thailand; fundamental of space exploration; Thai space agency; national space roadmap; technology for space exploration
                </text>
  
                <Heading size={"md"}>
                  Instructor
                </Heading>
                <Table>
                  <Tr>
                    <Th>1. Aj. Tatpong Tulyananda</Th>
                    <Th>email: aj.tatpong.tul@mahidol.edu</Th>
                  </Tr>
                  <Tr>
                    <Th>1. Aj. Tatpong Tulyananda</Th>
                    <Th>email: aj.tatpong.tul@mahidol.edu</Th>
                  </Tr>
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
                <Tr>
                  <Th> 50 </Th>
                  <Th> Tue 16:30-17:30 </Th>
                  <Th> Aj.Tatpong Tulyananda </Th>
                  <Th> class code: nani1234 on site at faculty of Science </Th>
                </Tr>
                <Tr>
                  <Th> 50 </Th>
                  <Th> Tue 16:30-17:30 </Th>
                  <Th> Aj.Tatpong Tulyananda </Th>
                  <Th> class code: nani1234 on site at faculty of Science </Th>
                </Tr>
              </Table>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  