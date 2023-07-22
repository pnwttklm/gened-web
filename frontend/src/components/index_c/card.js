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
      {/* tata of god of years*/}
      <SimpleGrid columns={4} spacingX='40px' spacingY='20px' minChildWidth='300px' className='px-16'>
        {questionElement.map((property, index) => (
          <Box maxW='sm' borderWidth='3px' borderRadius='0' borderColor='black' overflow='hidden' key={index}>
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p='6'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  New
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  {property.beds} beds &bull; {property.baths} baths
                </Box>
              </Box>

              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {property.title}
              </Box>

              <Box>
                {property.formattedPrice}
                <Box as='span' color='gray.600' fontSize='sm'>
                  / wk
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
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {property.reviewCount} reviews
                </Box>
              </Box>
            </Box>
            <Button mt={3} onClick={onOpen}>
              More Information
            </Button>
          </Box>
        ))}
      </SimpleGrid>



      <Modal onClose={onClose} size="6xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='font-bold'>SCGI195 Space Explor & Astrobiology</ModalHeader>
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

            {/*  <table class="table-auto">
              <thead>
                <tr>
                  <th>คณะ</th>
                  <th>หน่วยกิต</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>วิทยศาสตร์</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>กวดวิชา/สาขาวิชา</td>
                  <td>หมวดวิชา/literacy</td>
                </tr>
                <tr>
                  <td>Something?</td>
                  <td>sci and env</td>
                </tr>
                <tr>
                  <td>เงื่อนไขรายวิชา</td>
                  <td>grade</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>OSU</td>
                </tr>
              </tbody>
            </table>
                  */}

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

const questionElement = [
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