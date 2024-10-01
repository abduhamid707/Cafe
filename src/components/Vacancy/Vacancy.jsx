// import React from "react";
// import { useNavigate } from "react-router-dom"; // For navigation
// import { motion } from "framer-motion"; // Import Framer Motion
// import "./style.scss"; // CSS file for styles

// const Vacancy = ({ data }) => {
//     let { id, orgName, userImg, vacancyType, salary, profileIcon } = data;
//     const navigate = useNavigate();

//     // Navigate to vacancy detail page with id
//     const handleVacancyClick = () => {
//         navigate(`/vacancy/${id}`);
//     };

//     return (
//         <motion.div 
//             className="vacancy-card" 
//             onClick={handleVacancyClick}
//             initial={{ opacity: 0, y: 10 }} // Initial state
//             animate={{ opacity: 1, y: 0 }} // Animate to this state
//             transition={{ duration: 0.3 }} // Transition duration
//         >
//             {/* Profile Section */}
//             <div className="vacancy-card__profile">
//                 <img src={profileIcon} alt="Organization Icon" className="vacancy-card__profile-icon" />
//                 <h5 className="vacancy-card__org-name">{orgName}</h5>
//             </div>
//             <div className="vacancy_details_wrapper">
//                 {/* User Image */}
//                 <div className="vacancy-card__user-image d-flex">
//                     <img src={userImg} alt="User" className="vacancy-card__img" />
//                 </div>

//                 {/* Vacancy Details */}
//                 <div className="vacancy-card__details">
//                     <p className="vacancy-card__type">{vacancyType}</p>
//                     <p className="vacancy-card__salary">{salary}</p>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default Vacancy;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.scss";

const Vacancy = ({ data }) => {
    // Destructure the properties from the data object
    const { id, profileIcon, paragrph, title, showImage, dateAt, description, paragrphCheck } = data;
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate(`/nightclubs/${id}`); // Navigate to the specific nightclub page
    };

    return (
        <div className="nightclub-container">
            <div className="profile">
                <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
                <h2 className="nightclub-title">{title}</h2>
            </div>
            <div className="show-image-container">
                <img src={showImage} alt="Night Club Show" className="show-image" />
                {/* <div className="overlay">
                    <h3 className="overlay-text">MASKI SHOU</h3>
                    <p className="overlay-date">{dateAt}</p>
                </div> */}
            </div>
            <div className="paragrph mt-4">
                <h1 className='font-bold'>{paragrph}</h1>
            </div>
            <p className="description"><h3>{description}</h3></p>
            <div className="details-button">

                {paragrphCheck != true &&
                    <button className="ml-auto" onClick={handleDetailClick}>
                        Batafsil
                    </button>
                }
            </div>
        </div>
    );
};

export default Vacancy;
