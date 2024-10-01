// AnimatedComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}  // Boshlanish holati
            animate={{ opacity: 1, y: 0 }}    // Animatsiya holati
            exit={{ opacity: 0, y: 20 }}       // Chiqish holati
            transition={{ duration: 0.5 }}      // Animatsiya davomiyligi
            style={{
                padding: '20px',
                backgroundColor: '#4CAF50',
                color: '#FFFFFF',
                borderRadius: '8px',
                textAlign: 'center',
                margin: '20px 0',
            }}
        >
            Bu komponent Framer Motion yordamida animatsiyalangan!
        </motion.div>
    );
};

export default AnimatedComponent;
