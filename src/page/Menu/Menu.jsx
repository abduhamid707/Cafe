import React, { useState, useEffect, useRef } from "react";
import "./style.scss"; // Style fayllar
import { menuData } from "../../db/data"; // Menu ma'lumotlar
import AOS from "aos"; // AOS kutubxonasini import qilamiz
import "aos/dist/aos.css"; // AOS CSS-ni import qilamiz

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("foods");
    const categorySectionRefs = useRef({});
    const categoryRefs = useRef({});
    const categoriesContainerRef = useRef(null);

    const uniqueCategories = [...new Set(menuData.map(item => item.category))].map((category) => {
        return {
            id: category,
            label: menuData.find(item => item.category === category).label
        };
    });

    // AOS ni ishga tushirish
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi
            once: true, // Faqat bir marta animatsiya o'zgarishi
        });
    }, []);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory("");
        console.log('activeCategory :', activeCategory);

        
        const ref = categorySectionRefs.current[categoryId];
        if (ref) {
            const { top } = ref.getBoundingClientRect();
            const offset = window.scrollY + top - 125;
            window.scrollTo({ top: offset, behavior: 'smooth' });
            setActiveCategory(categoryId);
        }
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY + 250;
        uniqueCategories.forEach(category => {
            const ref = categorySectionRefs.current[category.id];
            if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
                if (activeCategory !== category.id) {
                    setActiveCategory(category.id);
                }
            }
        });
    };

    useEffect(() => {
        const onScroll = () => handleScroll();
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [activeCategory, uniqueCategories]);

    useEffect(() => {
        if (activeCategory && categoryRefs.current[activeCategory]) {
            const categoryButton = categoryRefs.current[activeCategory];
            const categoriesContainer = categoriesContainerRef.current;

            if (categoryButton && categoriesContainer) {
                const containerScrollLeft = categoriesContainer.scrollLeft;
                const containerWidth = categoriesContainer.offsetWidth;
                const buttonOffsetLeft = categoryButton.offsetLeft;
                const buttonWidth = categoryButton.offsetWidth;

                const scrollPosition = buttonOffsetLeft - (containerWidth / 2) + (buttonWidth / 2);

                categoriesContainer.scrollTo({
                    left: scrollPosition,
                    // behavior: 'smooth'
                });
            }
        }
    }, [activeCategory]);

    return (
        <div className="container">
            <div className="menu-container">
                <div className="restaurant_categories" ref={categoriesContainerRef}>
                    {uniqueCategories.map((category, index) => (
                        <button
                            key={category.id + index}
                            className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                            ref={el => (categoryRefs.current[category.id] = el)}
                            onClick={() => handleCategoryClick(category.id)}
                            aria-pressed={activeCategory === category.id}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Menyu bo'limlari */}
                {uniqueCategories.map((category) => (
                    <div
                        key={category.id}
                        data-category={category.id}
                        ref={el => (categorySectionRefs.current[category.id] = el)}
                        className="category-section menu-items"
                        data-aos="fade-up" // AOS animatsiyasini qo'shamiz
                    >
                        <h2>{category.label}</h2>
                        {menuData.filter(item => item.category === category.id).map((item, index) => (
                            <div key={`${item.id}-${index}`} className="menu-item" data-aos="fade-up">
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
