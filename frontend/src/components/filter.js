import {
    Box,
    Button,
    Checkbox,
    Icon,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { BsFilter } from 'react-icons/bs';

const CustomBoxButton = ({ label, selected, onClick }) => {
    const boxStyle = {
      cursor: 'pointer',
      border: selected ? '3px solid #1D4F91' : '1px solid #b1b3b3',
      borderRadius: '8px',
      padding: '12px',
    //   backgroundColor: selected ? '#1D4F91' : 'transparent',
      color: '#1D4F91',
    };
  
    return (
      <Box onClick={onClick} style={boxStyle}>
        {label}
      </Box>
    );
  };

export default function FilterTabs() {
    const [selectedTab, setSelectedTab] = useState(-1);
    const [selectedBoxes, setSelectedBoxes] = useState(
        [null, null, null,
        [],
        [],
    ]);

    const handleBoxClick = (tabIndex, boxIndex) => {
        setSelectedBoxes((prevSelectedBoxes) => {
          const updatedSelectedBoxes = [...prevSelectedBoxes];
          updatedSelectedBoxes[tabIndex] = prevSelectedBoxes[tabIndex] === boxIndex ? null : boxIndex;
          return updatedSelectedBoxes;
        });
      };
      const containerRef = useRef();

    useEffect(() => {
        const handleClickOutsideTabPanel = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setSelectedTab(-1);
            }
        };
        document.addEventListener('click', handleClickOutsideTabPanel);
        return () => {
            document.removeEventListener('click', handleClickOutsideTabPanel);
        };
    }, []);

    return (
        // <div className='sticky pt-16'>
        <Box
            ref={containerRef}
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={4}
            mb={4}
            style={{ position: 'sticky', zIndex: 100, marginLeft: 'auto', marginRight: 'auto' }}
            bg={'white'}
            className="sticky filter-container drop-shadow-lg rounded-2xl p-4 lg:top-4 sm:top-0"
            maxW={"max-content"}

        >
            <Box>
                <Tabs index={selectedTab} onChange={setSelectedTab} isManual variant="soft-rounded">
                    <TabList>
                        <Tab
                            _selected={{ color: 'white', bg: '#1D4F91' }}
                            _focus={{ boxShadow: 'none' }}
                            onClick={() => setSelectedTab(0)}
                            className='rounded-xl'
                        >
                            รายละเอียดหลักสูตร
                        </Tab>
                        <Tab
                            _selected={{ color: 'white', bg: '#1D4F91' }}
                            _focus={{ boxShadow: 'none' }}
                            onClick={() => setSelectedTab(1)}
                            className='rounded-xl'
                        >
                            Literacy
                        </Tab>
                        <Tab
                            _selected={{ color: 'white', bg: '#1D4F91' }}
                            _focus={{ boxShadow: 'none' }}
                            onClick={() => setSelectedTab(2)}
                            className='rounded-xl'
                        >
                            สถานที่
                        </Tab>
                        <Tab
                            _selected={{ color: 'white', bg: '#1D4F91' }}
                            _focus={{ boxShadow: 'none' }}
                            onClick={() => setSelectedTab(3)}
                            className='rounded-xl'
                        >
                            วันและเวลา
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <Box
                            display={selectedTab === 0 ? 'flex' : 'none'}
                            flexDirection="column"
                            alignItems="flex-start"
                        >
                            <TabPanel className='flex lg:flex-row flex-col space-x-1'>
                                <div >
                                    <h1>ภาคการเรียน</h1>
                                    <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                    <CustomBoxButton
                                    label={"All"}
                                    selected={selectedBoxes[selectedTab] === 0}
                                    onClick={() => handleBoxClick(selectedTab, 0)}
                                    />
                                    <CustomBoxButton
                                    label={"1"}
                                    selected={selectedBoxes[selectedTab] === 1}
                                    onClick={() => handleBoxClick(selectedTab, 1)}
                                    />
                                    <CustomBoxButton
                                    label={"2"}
                                    selected={selectedBoxes[selectedTab] === 2}
                                    onClick={() => handleBoxClick(selectedTab, 2)}
                                    />
                                    </div>
                                </div>
                                <div >
                                    <h1>หลักสูตร</h1>
                                    <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                    <CustomBoxButton
                                    label={"All"}
                                    selected={selectedBoxes[selectedTab] === 0}
                                    onClick={() => handleBoxClick(selectedTab, 0)}
                                    />
                                    <CustomBoxButton
                                    label={"ไทย"}
                                    selected={selectedBoxes[selectedTab] === 1}
                                    onClick={() => handleBoxClick(selectedTab, 1)}
                                    />
                                    <CustomBoxButton
                                    label={"นานาชาติ"}
                                    selected={selectedBoxes[selectedTab] === 2}
                                    onClick={() => handleBoxClick(selectedTab, 2)}
                                    />
                                    </div>
                                </div>
                                <div >
                                    <h1>หน่วยกิต</h1>
                                    <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                    <CustomBoxButton
                                    label={"All"}
                                    selected={selectedBoxes[selectedTab] === 0}
                                    onClick={() => handleBoxClick(selectedTab, 0)}
                                    />
                                    <CustomBoxButton
                                    label={"1"}
                                    selected={selectedBoxes[selectedTab] === 1}
                                    onClick={() => handleBoxClick(selectedTab, 1)}
                                    />
                                    <CustomBoxButton
                                    label={"2"}
                                    selected={selectedBoxes[selectedTab] === 2}
                                    onClick={() => handleBoxClick(selectedTab, 2)}
                                    />
                                    <CustomBoxButton
                                    label={"3"}
                                    selected={selectedBoxes[selectedTab] === 3}
                                    onClick={() => handleBoxClick(selectedTab, 3)}
                                    />
                                    </div>
                                </div>
                            </TabPanel>
                            <div className='relative h-12 w-full'>
                            <Button className='absolute right-0 mr-6' onClick={() => setSelectedTab(1)}>
                                Next <Icon ml="3" as={BsArrowRight}></Icon>
                            </Button>
                            </div>
                        </Box>
                        <TabPanel>
                            <p>This is Panel 1</p>
                        </TabPanel>
                        <TabPanel>
                            <p>This is Panel 2</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
        // </div>
    );
}
