import React, { useState, useEffect, useRef } from "react";
import "./style.scss"; // Style fayllar
import { menuData } from "../../db/data"; // Menu ma'lumotlar

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("foods");
    const categoryRefs = useRef({}); // Har bir kategoriya tugmasi uchun refs
    const categorySectionRefs = useRef({}); // Har bir kategoriya bo'limi uchun refs
    const categoriesContainerRef = useRef(null); // Kategoriya tugmalari containeri uchun ref

    // Unikal kategoriyalarni ajratib olish
    const uniqueCategories = [...new Set(menuData.map(item => item.category))].map((category) => {
        return {
            id: category,
            label: menuData.find(item => item.category === category).label
        };
    });

    // Scroll event orqali qaysi bo'limda ekanligini aniqlash
    const handleScroll = () => {
        const scrollPosition = window.scrollY + 350; // Yaxshiroq scroll deteksiyasi uchun
        uniqueCategories.forEach(category => {
            const ref = categorySectionRefs.current[category.id];
            if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
                if (activeCategory !== category.id) {
                    setActiveCategory(category.id); // Faqat aktiv kategoriya o'zgarganda update qiladi
                }
            }
        });
    };

    // Kategoriya tugmasi bosilganda bo'limga scroll qilish
    const handleCategoryClick = (categoryId) => {
        // Kategoriya ID sini konsolga chiqarish

        setActiveCategory(categoryId); // Aktiv kategoriyani yangilash
        const ref = categorySectionRefs.current[categoryId];

        // Agar ref mavjud bo'lsa, uni konsolga chiqarish
        if (ref) {
            ref.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll qilish
        } else {
            console.log('Ref topilmadi:', categoryId); // Agar ref topilmasa xatolikni konsolga chiqarish
        }
    };


    // Scroll event qo'shish va olib tashlash
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeCategory]); // `activeCategory` o'zgarishini kuzatadi

    // Aktiv kategoriya tugmasini horizontaldan ko'rinishda ushlab turish
    useEffect(() => {
        const activeCategoryButton = categoryRefs.current[activeCategory];
        if (activeCategoryButton && categoriesContainerRef.current) {
            // Aktiv kategoriya tugmasini scroll qilish
            categoriesContainerRef.current.scrollTo({
                left: activeCategoryButton.offsetLeft - categoriesContainerRef.current.offsetWidth / 2 + activeCategoryButton.offsetWidth / 2,
                behavior: "smooth"
            });
        }
    }, [activeCategory]);

    return (
        <div className="container">
            <div className="menu-container">
                {/* Kategoriyalar tugmasi */}
                <div className="restaurant_categories" ref={categoriesContainerRef}>
                    {uniqueCategories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                            ref={el => (categoryRefs.current[category.id] = el)} // Kategoriya tugmalari uchun refs
                            onClick={() => handleCategoryClick(category.id)} // Tugmani bosganda scroll qilish
                            aria-pressed={activeCategory === category.id} // Accessibility uchun
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Menyu bo'limlari */}
                {uniqueCategories.map((category) => (
                    <div
                        key={category.id}
                        ref={el => (categorySectionRefs.current[category.id] = el)} // Bo'limlar uchun refs
                        className="category-section menu-items"
                    >
                        <h2>{category.label}</h2>
                        {menuData.filter(item => item.category === category.id).map((item) => (
                            <div
                                key={item.id} // Bu yerda noyob `id` ishlatilmoqda
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



// import React, { useState, useEffect, useRef } from "react";
// import "./style.scss"; // Create your styles here or import as needed
// import { menuData } from "../../db/data"; // Import your menu data

// const Menu = () => {
//     const [activeCategory, setActiveCategory] = useState("foods");
//     const categoryRefs = useRef({}); // To store category refs for scroll detection

//     const uniqueCategories = [...new Set(menuData.map(item => item.category))].map((category) => {
//         return {
//             id: category,
//             label: menuData.find(item => item.category === category).label
//         };
//     });

//     // Intersection Observer to detect which category is currently visible
//     useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.1 // Trigger when at least 10% of the category is visible
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     setActiveCategory(entry.target.dataset.category); // Update active category
//                 }
//             });
//         }, options);

//         // Observe each category section
//         uniqueCategories.forEach(category => {
//             const ref = categoryRefs.current[category.id];
//             if (ref) {
//                 observer.observe(ref);
//             }
//         });

//         return () => {
//             observer.disconnect(); // Clean up the observer on unmount
//         };
//     }, [uniqueCategories]);

//     const handleCategoryClick = (categoryId) => {
//         setActiveCategory(categoryId);
//         const ref = categoryRefs.current[categoryId];
//         if (ref) {
//             ref.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to the selected category
//         }
//     };

//     return (
//         <div className="container menu-container">
//             <div className="restaurant_categories ">
//                 {uniqueCategories.map((category) => (
//                     <button
//                         key={category.id}
//                         className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
//                         onClick={() => handleCategoryClick(category.id)}
//                     >
//                         {category.label}
//                     </button>
//                 ))}
//             </div>

//             {uniqueCategories.map((category) => (
//                 <div
//                     key={category.id}
//                     ref={el => (categoryRefs.current[category.id] = el)}
//                     data-category={category.id} // Add data attribute for visibility detection
//                     className="category-section"
//                 >
//                     <h2>{category.label}</h2>
//                     {menuData.filter(item => item.category === category.id).map(item => (
//                         <div key={item.id} className="menu-item">
//                             <div className="menu-item-img">
//                                 <img src={item.foodImg} alt={item.title} />
//                             </div>
//                             <div className="menu-item-info">
//                                 <p>{item.title}</p>
//                                 <p>{item.price}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Menu;
