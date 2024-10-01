import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
import "./styles.scss";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedLang, setSelectedLang] = useState('');

    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value);
        console.log('Selected Region:', e.target.value);
    };

    const handleLangChange = (e) => {
        setSelectedLang(e.target.value);
        console.log('Selected Language:', e.target.value);
    };

    // Close sidebar on location change
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location]);

    return (
        <>
            <div className="header mb-2">
                <div className="container">
                    <div className="navbar ">
                        <motion.div className="select-region" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                            <div className="select-container">
                                <h3 className='cafe_title'>NAVVAT RESTORAUNT</h3>
                            </div>
                        </motion.div>

                        <motion.div className='langs' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                            <select onChange={handleLangChange}>
                                <option value="uz">UZ</option>
                                <option value="eng">ENG</option>
                                <option value="rus">RUS</option>
                            </select>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
