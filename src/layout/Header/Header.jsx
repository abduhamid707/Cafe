import{  useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import "./styles.scss";

const Header = () => {
    const [selectedLang, setSelectedLang] = useState('');

    const handleLangChange = (e) => {
        setSelectedLang(e.target.value);
        console.log('Selected Language:', e.target.value);
    };
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
