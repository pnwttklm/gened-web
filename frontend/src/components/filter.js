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
    Select,
} from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { BsArrowRight, BsSearch } from 'react-icons/bs';
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
    const [selectedBoxes, setSelectedBoxes] = useState([
        0,
        0,
        0,
        0, 
        0,
        0,
        6,
        0,
    ]);

    const handleAcademicYearClick = (boxIndex) => {
        setSelectedBoxes((prevSelectedBoxes) => {
            const updatedSelectedBoxes = [...prevSelectedBoxes];
            const isBoxSelected = updatedSelectedBoxes[0] === boxIndex;

            if (isBoxSelected) {
                // If the clicked box is already selected, deselect it
                updatedSelectedBoxes[0] = 0; // Select the "ALL" option
            } else {
                // If a previous selection exists in the same category, reset it
                const previousSelectionIndex = updatedSelectedBoxes[0];
                if (previousSelectionIndex !== 0) {
                    updatedSelectedBoxes[previousSelectionIndex] = 0; // Select the "ALL" option for the previous selection
                }

                // Update the selection for the clicked box
                updatedSelectedBoxes[0] = boxIndex;
            }

            return updatedSelectedBoxes;
        });
    };


    const handleCourseClick = (boxIndex) => {
        setSelectedBoxes((prevSelectedBoxes) => {
          const updatedSelectedBoxes = [...prevSelectedBoxes];
          const isBoxSelected = updatedSelectedBoxes[3] === boxIndex;
      
          if (isBoxSelected) {
            updatedSelectedBoxes[3] = 0; 
          } else {
            const previousSelectionIndex = updatedSelectedBoxes[3];
            if (previousSelectionIndex !== 0) {
              updatedSelectedBoxes[previousSelectionIndex] = 0;
            }
      
            updatedSelectedBoxes[3] = boxIndex;
          }
      
          return updatedSelectedBoxes;
        });
      };


    const handleCreditClick = (boxIndex) => {
        setSelectedBoxes((prevSelectedBoxes) => {
          const updatedSelectedBoxes = [...prevSelectedBoxes];
          const isBoxSelected = updatedSelectedBoxes[6] === boxIndex;
      
          if (isBoxSelected) {
            updatedSelectedBoxes[6] = 6; 
          } else {
            const previousSelectionIndex = updatedSelectedBoxes[6];
            if (previousSelectionIndex !== 0) {
              updatedSelectedBoxes[previousSelectionIndex] = 0;
            }
      
            updatedSelectedBoxes[6] = boxIndex;
          }
      
          return updatedSelectedBoxes;
        });
      };

    // const handleLiteracyClick = (boxIndex) => {
    //     setSelectedBoxes((prevSelectedBoxes) => {
    //         const updatedSelectedBoxes = [...prevSelectedBoxes];
    //         updatedSelectedBoxes[1] = boxIndex;
    //         return updatedSelectedBoxes;
    //     });
    // };

    const handleLocationClick = (boxIndex) => {
        setSelectedBoxes((prevSelectedBoxes) => {
            const updatedSelectedBoxes = [...prevSelectedBoxes];

            // Check if the clicked box is already selected
            const isBoxSelected = updatedSelectedBoxes[2] === boxIndex;

            if (isBoxSelected) {
                // If the "ALL" option is already selected, do nothing (prevent deselection)
                if (boxIndex === 0) {
                    return updatedSelectedBoxes;
                }
                // Deselect the box if it's already selected and not the "ALL" option
                updatedSelectedBoxes[2] = 0; // Select the "ALL" option
            } else {
                // If a previous selection exists in the same category, reset it
                const previousSelectionIndex = updatedSelectedBoxes[2];
                if (previousSelectionIndex !== 0) {
                    updatedSelectedBoxes[previousSelectionIndex] = 0; // Select the "ALL" option for the previous selection
                }

                // Update the selection for the clicked box
                updatedSelectedBoxes[2] = boxIndex;
            }

            return updatedSelectedBoxes;
        });
    };

    const handleNextClick = () => {
        setSelectedTab((prevTab) => (prevTab + 1) % 4);
    };

    const [selectedDate, setSelectedDate] = useState(''); // State for the selected date
    const [selectedTime, setSelectedTime] = useState(''); // State for the selected time


    const containerRef = useRef();


    useEffect(() => {
        const handleClickOutsideFilter = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setSelectedTab(-1);
            }
        };
        document.addEventListener('click', handleClickOutsideFilter);
        return () => {
            document.removeEventListener('click', handleClickOutsideFilter);
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
                            สถานที่
                        </Tab>
                        <Tab
                            _selected={{ color: 'white', bg: '#1D4F91' }}
                            _focus={{ boxShadow: 'none' }}
                            onClick={() => setSelectedTab(2)}
                            className='rounded-xl'
                        >
                            วันและเวลา
                        </Tab>
                    </TabList>
                    <TabPanels>
                        {/* Course Details Panel */}
                        <TabPanel display={selectedTab === 0 ? 'flex' : 'none'}>
                            <div className='flex flex-row'>
                                <div>
                                    <h1>ภาคการเรียน</h1>
                                    <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                        <CustomBoxButton
                                            label={"ALL"}
                                            selected={selectedBoxes[0] === 0}
                                            onClick={() => handleAcademicYearClick(0)}
                                        />
                                        <CustomBoxButton
                                            label={"1"}
                                            selected={selectedBoxes[0] === 1}
                                            onClick={() => handleAcademicYearClick(1)}
                                        />
                                        <CustomBoxButton
                                            label={"2"}
                                            selected={selectedBoxes[0] === 2}
                                            onClick={() => handleAcademicYearClick(2)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h1>หลักสูตร</h1>
                                    <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                        <CustomBoxButton
                                            label={"All"}
                                            selected={selectedBoxes[3] === 0}
                                            onClick={() => handleCourseClick(0)}
                                        />
                                        <CustomBoxButton
                                            label={"ไทย"}
                                            selected={selectedBoxes[3] === 1}
                                            onClick={() => handleCourseClick(1)}
                                        />
                                        <CustomBoxButton
                                            label={"นานาชาติ"}
                                            selected={selectedBoxes[3] === 2}
                                            onClick={() => handleCourseClick(2)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h1>หน่วยกิต</h1>
                                    <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                        <CustomBoxButton
                                            label={"All"}
                                            selected={selectedBoxes[6] === 6}
                                            onClick={() => handleCreditClick(6)}
                                        />
                                        <CustomBoxButton
                                            label={"1"}
                                            selected={selectedBoxes[6] === 7}
                                            onClick={() => handleCreditClick(7)}
                                        />
                                        <CustomBoxButton
                                            label={"2"}
                                            selected={selectedBoxes[6] === 8}
                                            onClick={() => handleCreditClick(8)}
                                        />
                                        <CustomBoxButton
                                            label={"3"}
                                            selected={selectedBoxes[6] === 9}
                                            onClick={() => handleCreditClick(9)}
                                        />
                                    </div>
                                <div className='relative'>
                                    <Button 
                                    onClick={handleNextClick} 
                                    rightIcon={<BsArrowRight/>} 
                                    color={'#1D4F91'} 
                                    variant={'outline'} 
                                    marginTop={'5'}
                                    left={'83px'}
                                    >NEXT</Button>
                                </div>
                                </div>
                            </div>
                            <div className='relative h-12 w-full'>
                                {/* ... (Next button to navigate to the next panel) */}
                            </div>
                        </TabPanel>

                    
                        {/* Location Panel */}
                        <TabPanel display={selectedTab === 1 ? 'flex' : 'none'}>
                            <div className='flex flex-row'>
                                <div>
                                    <h1>สถานที่ (Location)</h1>
                                    <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                        <CustomBoxButton
                                            label={"ALL"}
                                            selected={selectedBoxes[2] === 0}
                                            onClick={() => handleLocationClick(0)}
                                        />
                                        <CustomBoxButton
                                            label={"ศาลายา"}
                                            selected={selectedBoxes[2] === 1}
                                            onClick={() => handleLocationClick(1)}
                                        />
                                        <CustomBoxButton
                                            label={"พญาไท"}
                                            selected={selectedBoxes[2] === 2}
                                            onClick={() => handleLocationClick(2)}
                                        />
                                        <CustomBoxButton
                                            label={"บางกอกน้อย"}
                                            selected={selectedBoxes[2] === 3}
                                            onClick={() => handleLocationClick(3)}
                                        />
                                        <CustomBoxButton
                                            label={"กาญจนบุรี"}
                                            selected={selectedBoxes[2] === 4}
                                            onClick={() => handleLocationClick(4)}
                                        />
                                        <CustomBoxButton
                                            label={"อำนาจเจริญ"}
                                            selected={selectedBoxes[2] === 5}
                                            onClick={() => handleLocationClick(5)}
                                        />
                                        <CustomBoxButton
                                            label={"จักกรีนฤบดินทร์"}
                                            selected={selectedBoxes[2] === 6}
                                            onClick={() => handleLocationClick(6)}
                                        />
                                    </div>
                                </div>
                                <div className='relative'>
                                    <Button 
                                    onClick={handleNextClick} 
                                    rightIcon={<BsArrowRight/>} 
                                    color={'#1D4F91'} 
                                    variant={'outline'} 
                                    >NEXT</Button>
                                </div>
                            </div>
                        </TabPanel>

                        {/* Date & Time Panel */}
                        <TabPanel display={selectedTab === 2 ? 'flex' : 'none'}>
                            <div className='flex flex-row'>
                                <div>
                                    <h1>วันที่ (Date)</h1>
                                    <Select
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                    >
                                        <option value=''>-- เลือกวันที่ --</option>
                                        <option value='2023-07-30'>30 กรกฎาคม 2566</option>
                                        <option value='2023-07-31'>31 กรกฎาคม 2566</option>
                                        {/* Add more date options here */}
                                    </Select>
                                </div>
                                <div className='ml-10'>
                                    <h1>เวลา (Time)</h1>
                                    <Select
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                    >
                                        <option value=''>-- เลือกเวลา --</option>
                                        <option value='09:00'>09:00 น.</option>
                                        <option value='13:30'>13:30 น.</option>
                                        {/* Add more time options here */}
                                    </Select>
                                </div>
                            </div>
                        </TabPanel>

                        {/* Search Panel */}
                        <TabPanel display={selectedTab === 4 ? 'flex' : 'none'}>
                            {/* ... (Search panel content) */}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
}