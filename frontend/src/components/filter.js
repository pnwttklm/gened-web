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
    const [selectedBoxes, setSelectedBoxes] = useState(
        [0, null, null, 3, null, null, 6, null, null, null, null
        ]);

        const handleCourseDetailsClick = (boxIndex, category) => {
            setSelectedBoxes((prevSelectedBoxes) => {
                const updatedSelectedBoxes = [...prevSelectedBoxes];
                const categoryIndex = getCategoryIndex(category);
    
                // Check if the clicked box is already selected
                const isBoxSelected = updatedSelectedBoxes[categoryIndex] === boxIndex;
    
                if (isBoxSelected) {
                    // Deselect the box if it's already selected
                    updatedSelectedBoxes[categoryIndex] = null;
                } else {
                    // If a previous selection exists in the same category, reset it
                    const previousSelectionIndex = updatedSelectedBoxes[categoryIndex];
                    if (previousSelectionIndex !== null) {
                        updatedSelectedBoxes[previousSelectionIndex] = null;
                    }
    
                    // Update the selection for the clicked box
                    updatedSelectedBoxes[categoryIndex] = boxIndex;
                }
    
                return updatedSelectedBoxes;
            });
        };

        const handleLiteracyClick = (boxIndex) => {
            setSelectedBoxes((prevSelectedBoxes) => {
                const updatedSelectedBoxes = [...prevSelectedBoxes];
                updatedSelectedBoxes[1] = boxIndex;
                return updatedSelectedBoxes;
            });
        };

        const [selectedDate, setSelectedDate] = useState(''); // State for the selected date
        const [selectedTime, setSelectedTime] = useState(''); // State for the selected time

    const getCategoryIndex = (category) => {
        switch (category) {
            case 'ภาคการเรียน':
                return 0;
            case 'หลักสูตร':
                return 3;
            case 'หน่วยกิต':
                return 6;
            default:
                return -1;
        }
    };

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
                        {/* Course Details Panel */}
                        <TabPanel display={selectedTab === 0 ? 'flex' : 'none'}>
                            <div className='flex flex-row'>
                                <div>
                                    <h1>ภาคการเรียน</h1>
                                    <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                        <CustomBoxButton
                                            label={"ALL"}
                                            selected={selectedBoxes[0] === 0}
                                            onClick={() => handleCourseDetailsClick(0, 'ภาคการเรียน')}
                                        />
                                        <CustomBoxButton
                                            label={"1"}
                                            selected={selectedBoxes[0] === 1}
                                            onClick={() => handleCourseDetailsClick(1, 'ภาคการเรียน')}
                                        />
                                        <CustomBoxButton
                                            label={"2"}
                                            selected={selectedBoxes[0] === 2}
                                            onClick={() => handleCourseDetailsClick(2, 'ภาคการเรียน')}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h1>หลักสูตร</h1>
                                    <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                        <CustomBoxButton
                                            label={"All"}
                                            selected={selectedBoxes[3] === 3}
                                            onClick={() => handleCourseDetailsClick(3, 'หลักสูตร')}
                                        />
                                        <CustomBoxButton
                                            label={"ไทย"}
                                            selected={selectedBoxes[3] === 4}
                                            onClick={() => handleCourseDetailsClick(4, 'หลักสูตร')}
                                        />
                                        <CustomBoxButton
                                            label={"นานาชาติ"}
                                            selected={selectedBoxes[3] === 5}
                                            onClick={() => handleCourseDetailsClick(5, 'หลักสูตร')}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h1>หน่วยกิต</h1>
                                    <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                        <CustomBoxButton
                                            label={"All"}
                                            selected={selectedBoxes[6] === 6}
                                            onClick={() => handleCourseDetailsClick(6, 'หน่วยกิต')}
                                        />
                                        <CustomBoxButton
                                            label={"1"}
                                            selected={selectedBoxes[6] === 7}
                                            onClick={() => handleCourseDetailsClick(7, 'หน่วยกิต')}
                                        />
                                        <CustomBoxButton
                                            label={"2"}
                                            selected={selectedBoxes[6] === 8}
                                            onClick={() => handleCourseDetailsClick(8, 'หน่วยกิต')}
                                        />
                                        <CustomBoxButton
                                            label={"3"}
                                            selected={selectedBoxes[6] === 9}
                                            onClick={() => handleCourseDetailsClick(9, 'หน่วยกิต')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='relative h-12 w-full'>
                                {/* ... (Next button to navigate to next panel) */}
                            </div>
                        </TabPanel>

                        {/* Literacy Panel */}
                        <TabPanel display={selectedTab === 1 ? 'flex' : 'none'}>
                        <div className='flex flex-row'>
                    <div>
                        <h1>Literacy</h1>
                        <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                            <CustomBoxButton
                                label={"Inter Cultural & Global Awareness"}
                                selected={selectedBoxes[1] === 6}
                                onClick={() => handleLiteracyClick(6)}
                            />
                            <CustomBoxButton
                                label={"Health Literacy"}
                                selected={selectedBoxes[1] === 5}
                                onClick={() => handleLiteracyClick(5)}
                            />
                            <CustomBoxButton
                                label={"Internationalization"}
                                selected={selectedBoxes[1] === 4}
                                onClick={() => handleLiteracyClick(4)}
                            />
                            <CustomBoxButton
                                label={"Digital Literacy"}
                                selected={selectedBoxes[1] === 3}
                                onClick={() => handleLiteracyClick(3)}
                            />
                            <CustomBoxButton
                                label={"Environmental Literacy"}
                                selected={selectedBoxes[1] === 2}
                                onClick={() => handleLiteracyClick(2)}
                            />
                            <CustomBoxButton
                                label={"Financial Literacy"}
                                selected={selectedBoxes[1] === 1}
                                onClick={() => handleLiteracyClick(1)}
                            />
                        </div>
                    </div>
                </div>
                        </TabPanel>

                        {/* สถานที่ Panel */}
                        <TabPanel display={selectedTab === 2 ? 'flex' : 'none'}>
                            {/* สถานที่ panel content */}
                        </TabPanel>

                        {/* วันและเวลา Panel */}
                        <TabPanel display={selectedTab === 3 ? 'flex' : 'none'}>
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
                            {/* Search panel content */}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
        // </div>
    );
}
