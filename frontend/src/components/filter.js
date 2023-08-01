import {
    Box,
    Button,
    Checkbox,
    Center,
    Icon,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Select,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb
} from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { BsArrowLeft, BsArrowRight, BsChevronLeft, BsChevronRight, BsSearch } from 'react-icons/bs';
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

    const daysOfWeek = [
        { label: 'Mon', value: 'Mon' },
        { label: 'Tue', value: 'Tue' },
        { label: 'Wed', value: 'Wed' },
        { label: 'Thu', value: 'Thu' },
        { label: 'Fri', value: 'Fri' },
        { label: 'Sat', value: 'Sat' },
        { label: 'Sun', value: 'Sun' },
    ];
    const [selectedDays, setSelectedDays] = useState(daysOfWeek.map((day) => day.value)); // Default to selecting all days

    const handleDayClick = (dayValue) => {
        setSelectedDays((prevSelectedDays) => {
            if (prevSelectedDays.length === 1 && prevSelectedDays.includes(dayValue)) {
                // At least one day must be selected, don't allow to deselect the last one.
                return prevSelectedDays;
            }

            if (prevSelectedDays.includes(dayValue)) {
                // Deselect the day if it's already selected.
                return prevSelectedDays.filter((day) => day !== dayValue);
            }

            // Select the day if it's not already selected.
            return [...prevSelectedDays, dayValue];
        });
    };

    // ... (Rest of the component code remains unchanged)

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
    <Center
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
        <Center overflowX="auto" >
            <Tabs index={selectedTab} onChange={setSelectedTab} isManual variant="soft-rounded" align='center'>
                <TabList>
                    <Tab
                        _selected={{ color: 'white', bg: '#1D4F91' }}
                        _focus={{ boxShadow: 'none' }}
                        onClick={() => setSelectedTab(0)}
                        className='rounded-xl'
                    >
                        หลักสูตร
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
                        วันเวลา
                    </Tab>
                </TabList>
                <TabPanels >
                    {/* Course Details Panel */}
                    <TabPanel display={selectedTab === 0 ? 'flex' : 'none'}>
                        <div className='flex flex-col lg:flex-row'>
                            <div>
                                <h1>ภาคเรียน</h1>
                                <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                    <CustomBoxButton
                                        label={"ทั้งหมด"}
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
                                    {/* <CustomBoxButton
                                            label={"3"}
                                            selected={selectedBoxes[0] === 3}
                                            onClick={() => handleAcademicYearClick(3)}
                                        /> */}
                                </div>
                            </div>
                            <div>
                                <h1>หลักสูตร</h1>
                                <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                    <CustomBoxButton
                                        label={"ทั้งหมด"}
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
                                        label={"ทั้งหมด"}
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
                                <div className='right-6 bottom-4'>
                                    <Button
                                        onClick={handleNextClick}
                                        rightIcon={<BsArrowRight />}
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
                    <TabPanel isLazy display={selectedTab === 1 ? 'flex' : 'none'} overflowX="auto">
                        <div className='flex flex-col h-32'>
                            <div>
                                <h1>สถานที่ (Location)</h1>
                                <div className='flex flex-col lg:flex-row space-x-1 border p-2 rounded-xl'>
                                    <CustomBoxButton
                                        label={"ทุกวิทยาเขต"}
                                        selected={selectedBoxes[2] === 0}
                                        onClick={() => handleLocationClick(0)}
                                    />
                                    <CustomBoxButton
                                        label={"ออนไลน์"}
                                        selected={selectedBoxes[2] === 1}
                                        onClick={() => handleLocationClick(1)}
                                    />
                                    <CustomBoxButton
                                        label={"ศาลายา"}
                                        selected={selectedBoxes[2] === 2}
                                        onClick={() => handleLocationClick(2)}
                                    />
                                    <CustomBoxButton
                                        label={"พญาไท"}
                                        selected={selectedBoxes[2] === 3}
                                        onClick={() => handleLocationClick(3)}
                                    />
                                    <CustomBoxButton
                                        label={"บางกอกน้อย"}
                                        selected={selectedBoxes[2] === 4}
                                        onClick={() => handleLocationClick(4)}
                                    />
                                    <CustomBoxButton
                                        label={"กาญจนบุรี"}
                                        selected={selectedBoxes[2] === 5}
                                        onClick={() => handleLocationClick(5)}
                                    />
                                    <CustomBoxButton
                                        label={"อำนาจเจริญ"}
                                        selected={selectedBoxes[2] === 6}
                                        onClick={() => handleLocationClick(6)}
                                    />
                                    <CustomBoxButton
                                        label={"นครสวรรค์"}
                                        selected={selectedBoxes[2] === 7}
                                        onClick={() => handleLocationClick(7)}
                                    />
                                    <CustomBoxButton
                                        label={"จักกรีนฤบดินทร์"}
                                        selected={selectedBoxes[2] === 8}
                                        onClick={() => handleLocationClick(8)}
                                    />
                                </div>
                            </div>
                            <div className='absolute right-6 bottom-4'>
                                <Button
                                    onClick={handleNextClick}
                                    rightIcon={<BsArrowRight />}
                                    color={'#1D4F91'}
                                    variant={'outline'}
                                >NEXT</Button>
                            </div>
                        </div>
                    </TabPanel>

                    {/* Date & Time Panel */}
                    <TabPanel display={selectedTab === 2 ? 'flex' : 'none'}>
                        <div className='flex flex-col w-full'>
                            <div>
                                <h1>วันที่ (Date)</h1>
                                {/* ... (Any other date-related components or content) */}
                            </div>
                            <div>
                                <h1>Days of the Week:</h1>
                                <div className='flex flex-row space-x-1 border p-2 rounded-xl'>
                                    {daysOfWeek.map((day) => (
                                        <CustomBoxButton
                                            key={day.value}
                                            label={day.label}
                                            selected={selectedDays.includes(day.value)}
                                            onClick={() => handleDayClick(day.value)}
                                        />
                                    ))}
                                </div>
                                <TimeRangeSlider/>
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Center>
    </Center>
);
}

const timeLabels = {
    0: ' 6:00 น.',
    1: ' 6:30 น.',
    2: ' 7:00 น.',
    3: ' 7:30 น.',
    4: ' 8:00 น.',
    5: ' 8:30 น.',
    6: ' 9:00 น.',
    7: ' 9:30 น.',
    8: '10:00 น.',
    9: '10:30 น.',
    10: '11:00 น.',
    11: '11:30 น.',
    12: '12:00 น.',
    13: '12:30 น.',
    14: '13:00 น.',
    15: '13:30 น.',
    16: '14:00 น.',
    17: '14:30 น.',
    18: '15:00 น.',
    19: '15:30 น.',
    20: '16:00 น.',
    21: '16:30 น.',
    22: '17:00 น.',
    23: '17:30 น.',
    24: '18:00 น.',
    25: '18:30 น.',
    26: '19:00 น.',
    27: '19:30 น.',
};

const TimeRangeSlider = () => {
    const [timeRange, setTimeRange] = useState([6, 20]);

    const handleChange = (newRange) => {
        setTimeRange(newRange);
    };

    return (
        <Box>
            <Text mb={2}>เวลาเรียน {timeLabels[timeRange[0]]} - {timeLabels[timeRange[1]]}</Text>
            <RangeSlider
                min={0}
                max={27}
                step={1}
                defaultValue={timeRange}
                onChange={handleChange}
                focusThumbOnChange={false}
                allowOverlap={false}
                getAriaLabel={(index) => (index === 0 ? 'Start time' : 'End time')}
                getAriaValueText={(value) => timeLabels[value]}
            >
                <RangeSliderTrack bg='blue.100'>
                    <RangeSliderFilledTrack bg='blue.500' />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={8} index={0}>
                    <Box color='blue.500' as={BsChevronRight} />
                </RangeSliderThumb>
                <RangeSliderThumb boxSize={8} index={1}>
                    <Box color='blue.500' as={BsChevronLeft} />
                </RangeSliderThumb>
            </RangeSlider>
        </Box>
    );
};