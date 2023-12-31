// components/ButtonSlider.js
import { useState } from 'react';
import { Box, Button, Center, Divider, Flex, Icon, Image, Stack} from '@chakra-ui/react';
import { BsBicycle, BsCircleSquare, BsCoin, BsGlobe2, BsHeartPulse, BsRobot, BsTranslate, BsTree, BsRocketTakeoff, BsBuildings } from 'react-icons/bs';

const ButtonSlider = ({ onSelectButton }) => {
  const [selectedButton, setSelectedButton] = useState('A');
  
  const handleButtonClick = (name) => {
    if (name !== selectedButton) {
      setSelectedButton(name);
      onSelectButton(name);
    }
  };

  return (
    <Center py={4}>
      <Stack className="button-group overflow-x-auto whitespace-nowrap py-4 flex flex-row" spacing={10} mx={12}>
      <Button
            color={'A' === selectedButton ? 'blue.700' : 'gray'}
            onClick={() => handleButtonClick('A')}
            disabled={'A' === selectedButton}
            variant={'A' === selectedButton ? 'outline' : 'solid'}
            className='flex flex-col py-12'
          >
            <Flex direction="column" align="center"> {/* Use Flex for vertical alignment */}
            <Icon as={BsCircleSquare} boxSize={8}/>
            <h1>All</h1>
          </Flex>
            
          </Button>
        {buttonNames.map((prop, index) => (
          <Button
            key={index}
            color={prop.id === selectedButton ? prop.color : 'gray'}
            onClick={() => handleButtonClick(prop.id)}
            disabled={prop.id === selectedButton}
            variant={prop.id === selectedButton ? 'outline' : 'solid'}
            className='flex flex-col py-12'
          >
            <Flex direction="column" align="center"> {/* Use Flex for vertical alignment */}
            <Icon as={prop.icon} boxSize={8}/>
            <h1>{prop.name}</h1>
          </Flex>
          </Button>
        ))}

        <Button
            color={'M' === selectedButton ? 'teal' : 'gray'}
            onClick={() => handleButtonClick('M')}
            disabled={'M' === selectedButton}
            variant={'M' === selectedButton ? 'outline' : 'solid'}
            className='flex flex-col py-12'
          >
            <Flex direction="column" align="center"> {/* Use Flex for vertical alignment */}
            <Image width='50px' hight='50px' src='/mahidol.svg'></Image>
            <h1>คนมหิดล</h1>
          </Flex>
            
          </Button>

      </Stack>
    </Center>
    
  );
};

export default ButtonSlider;

const buttonNames = [
{
  id: 'H',
  name: 'Health',
  color: 'red',
  icon: BsHeartPulse,
},
{
  id: 'I',
  name: 'Inter',
  color: 'blue',
  icon: BsGlobe2,
},
{
  id: 'D',
  name: 'Digital',
  color: 'purple',
  icon: BsRobot,
},
{
  id: 'E',
  name: 'Environment',
  color: 'green',
  icon: BsTree,
},
{
  id: 'F',
  name: 'Finance',
  color: 'gold',
  icon: BsCoin,
},
{
  id: 'S',
  name: 'Sport',
  color: 'red.300',
  icon: BsBicycle,
},
{
  id: 'W',
  name: 'Science',
  color: 'cyan.700',
  icon: BsRocketTakeoff,
},
{
  id: 'L',
  name: 'Language',
  color: 'blue.300',
  icon: BsTranslate,
},
{
  id: 'C',
  name: 'Civic',
  color: 'orange',
  icon: BsBuildings,
},
];