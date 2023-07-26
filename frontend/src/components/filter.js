import {
    Box,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { BsFilter } from 'react-icons/bs';

export default function FilterTabs() {
    const [selectedTab, setSelectedTab] = useState(-1);

    const handleClickOutsideTabPanel = (event) => {
        if (
            event.target.closest('.tab-container') === null &&
            event.target.closest('.chakra-tabs') === null
        ) {
            setSelectedTab(-1);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideTabPanel);
        return () => {
            document.removeEventListener('click', handleClickOutsideTabPanel);
        };
    }, []);

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={4}
            mb={4}
            style={{ position: 'sticky', top: 0, zIndex: 100, marginLeft: 'auto', marginRight: 'auto' }}
            bg={'white'}
            className="filter-container drop-shadow-md"
            maxW={"fit-content"}
        >
            <Box>
                <Tabs index={selectedTab} onChange={setSelectedTab} isManual variant="soft-rounded">
                    <TabList>
                        <Tab
                            _selected={{ color: 'white', bg: 'yellow' }}
                            _active={{ color: 'white', bg: 'yellow' }}
                            _focus={{ boxShadow: 'none' }}
                            onClick={() => setSelectedTab(0)}
                        >
                            ภาคการเรียน
                        </Tab>
                        <Tab
                            _selected={{ color: 'white', bg: 'blue' }}
                            _active={{ color: 'white', bg: 'blue' }}
                            _focus={{ boxShadow: 'none' }}
                            onClick={() => setSelectedTab(1)}
                        >
                            หลักสูตร
                        </Tab>
                        <Tab
                            _selected={{ color: 'white', bg: 'yellow' }}
                            _active={{ color: 'white', bg: 'yellow' }}
                            _focus={{ boxShadow: 'none' }}
                            onClick={() => setSelectedTab(2)}
                        >
                            ภาคการเรียน
                        </Tab>
                        <Tab
                            _selected={{ color: 'white', bg: 'blue' }}
                            _active={{ color: 'white', bg: 'blue' }}
                            _focus={{ boxShadow: 'none' }}
                            onClick={() => setSelectedTab(3)}
                        >
                            หลักสูตร
                        </Tab>
                        <Tab
                            _selected={{ color: 'white', bg: 'yellow' }}
                            _active={{ color: 'white', bg: 'yellow' }}
                            _focus={{ boxShadow: 'none' }}
                            onClick={() => setSelectedTab(4)}
                        >
                            ภาคการเรียน
                        </Tab>
                    </TabList>
                    <TabPanels>
                    <Box
            display={selectedTab === 0 ? 'flex' : 'none'}
            flexDirection="column"
            alignItems="flex-start"
          >
                        <TabPanel>
                            <p>This is Panel 1</p>
                        </TabPanel>
                        </Box>
                        <TabPanel>
                            <p>This is Panel 2</p>
                        </TabPanel>
                        <TabPanel>
                            <p>This is Panel 1</p>
                        </TabPanel>
                        <TabPanel>
                            <p>This is Panel 2</p>
                        </TabPanel>
                        <TabPanel>
                            <p>This is Panel 3</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
}
