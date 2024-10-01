import React, { useState, useEffect, useRef } from "react";
import "./style.scss"; // Create your styles here or import as needed
import { menuData } from "../../db/data"; // Import your menu data

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("foods");
    const categoryRefs = useRef({}); // To store category refs for scroll detection
    const categorySectionRefs = useRef({}); // Store refs for each category section
    const categoriesContainerRef = useRef(null); // Ref for the restaurant categories container

    // Unique categories extraction
    const uniqueCategories = [...new Set(menuData.map(item => item.category))].map((category) => {
        return {
            id: category,
            label: menuData.find(item => item.category === category).label
        };
    });

    const handleScroll = () => {
        const scrollPosition = window.scrollY + 350; // Adjust for active section detection
        uniqueCategories.forEach(category => {
            const ref = categorySectionRefs.current[category.id];
            if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
                if (activeCategory !== category.id) {
                    setActiveCategory(category.id); // Only update if it changed
                }
            }
        });
    };

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        const ref = categorySectionRefs.current[categoryId];
        if (ref) {
            ref.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to the selected category section
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeCategory]); // Add activeCategory to dependencies

    useEffect(() => {
        const activeCategoryButton = categoryRefs.current[activeCategory];
        if (activeCategoryButton && categoriesContainerRef.current) {
            // Scroll the active category into view horizontally (X-axis)
            categoriesContainerRef.current.scrollTo({
                left: activeCategoryButton.offsetLeft - categoriesContainerRef.current.offsetWidth / 2 + activeCategoryButton.offsetWidth / 2,
                behavior: "smooth"
            });
        }
    }, [activeCategory]);

    return (
        <div className="container">
            <div className="menu-container">
                {/* Restaurant Categories with horizontal scroll */}
                <div className="restaurant_categories" ref={categoriesContainerRef}>
                    {uniqueCategories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                            ref={el => (categoryRefs.current[category.id] = el)} // Store refs for category buttons
                            onClick={() => handleCategoryClick(category.id)} // Handle click to scroll to the category
                            aria-pressed={activeCategory === category.id} // Accessibility improvement
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Menu Items */}
                {uniqueCategories.map((category) => (
                    <div
                        key={category.id}
                        ref={el => (categorySectionRefs.current[category.id] = el)} // Store refs for category sections
                        className="category-section menu-items"
                    >
                        <h2>{category.label}</h2>
                        {menuData.filter(item => item.category === category.id).map(item => (
                            <div
                                key={item.id}
                                className="menu-item"
                            >
                                <div className="menu-item-img">
                                    <img src={item.foodImg} alt={item.title} />
                                </div>
                                <div className="menu-item-info">
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
