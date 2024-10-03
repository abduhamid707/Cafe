// import React, { useState, useEffect, useRef } from "react";
// import "./style.scss"; // Style fayllar
// import { menuData } from "../../db/data"; // Menu ma'lumotlar

// const Menu = () => {
//     const [activeCategory, setActiveCategory] = useState("foods");
//     const categoryRefs = useRef({}); // Har bir kategoriya tugmasi uchun refs
//     const categorySectionRefs = useRef({}); // Har bir kategoriya bo'limi uchun refs
//     const categoriesContainerRef = useRef(null); // Kategoriya tugmalari containeri uchun ref

//     // Unikal kategoriyalarni ajratib olish
//     const uniqueCategories = [...new Set(menuData.map(item => item.category))].map((category) => {
//         return {
//             id: category,
//             label: menuData.find(item => item.category === category).label
//         };
//     });

//     // Scroll event orqali qaysi bo'limda ekanligini aniqlash


//     // Kategoriya tugmasi bosilganda bo'limga scroll qilish
//     const handleCategoryClick = (categoryId) => {
//         // Kategoriya ID sini konsolga chiqarish

//         setActiveCategory(categoryId); // Aktiv kategoriyani yangilash
//         const ref = categorySectionRefs.current[categoryId];
//         if (ref) {
//             ref.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll qilish
//         } else {
//             console.log('Ref topilmadi:', categoryId); // Agar ref topilmasa xatolikni konsolga chiqarish
//         }
//     };

//     // active classni avtomatik o'tkazish va Categoryni scroll qilish uchun
//     const handleScroll = () => {
//         const scrollPosition = window.scrollY + 350; // Yaxshiroq scroll deteksiyasi uchun
//         uniqueCategories.forEach(category => {
//             const ref = categorySectionRefs.current[category.id];
//             if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
//                 if (activeCategory !== category.id) {
//                     setActiveCategory(category.id); // Faqat aktiv kategoriya o'zgarganda update qiladi
//                 }
//             }
//         });
//     };
//     useEffect(() => {
//         const activeCategoryButton = categoryRefs.current[activeCategory];

//         if (activeCategoryButton && categoriesContainerRef.current) {
//             // Aktiv kategoriya tugmasini scroll qilish
//             categoriesContainerRef.current.scrollTo({
//                 left: activeCategoryButton.offsetLeft - categoriesContainerRef.current.offsetWidth / 2 + activeCategoryButton.offsetWidth / 2,
//                 behavior: "smooth"
//             });
//         }


//         // const observer = new IntersectionObserver((entries) => {
//         //     entries.forEach(entry => {
//         //         if (entry.isIntersecting) {

//         //             const categoryId = entry.target.dataset.category;
//         //             console.log('categoryId :', categoryId);
//         //             console.log('activeCategory :', activeCategory);
//         //             if (activeCategory !== categoryId) {
//         //                 setActiveCategory(categoryId);
//         //             }
//         //         }
//         //     });
//         // }, { threshold: 0.1 });



//         // uniqueCategories.forEach(category => {
//         //     const ref = categorySectionRefs.current[category.id];
//         //     if (ref) {
//         //         observer.observe(ref);
//         //     }
//         // });




//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [activeCategory]); // `activeCategory` o'zgarishini kuzatadi



//     // useEffect(() => {












//     //     window.addEventListener('scroll', handleScroll);
//     //     return () => {
//     //         observer.disconnect();
//     //         window.removeEventListener('scroll', handleScroll);
//     //     };




//     // }, [activeCategory]);





//     return (
//         <div className="container">
//             <div className="menu-container">
//                 {/* Kategoriyalar tugmasi */}
//                 <div className="restaurant_categories" ref={categoriesContainerRef}>
//                     {uniqueCategories.map((category) => (
//                         <button
//                             key={category.id}
//                             className={`category-item ${activeCategory === category.id ? 'active' : ''}`}

//                             ref={el => (categoryRefs.current[category.id] = el)} // Kategoriya tugmalari uchun refs
//                             onClick={() => handleCategoryClick(category.id)} // Tugmani bosganda scroll qilish
//                             aria-pressed={activeCategory === category.id} // Accessibility uchun
//                         >
//                             {category.label}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Menyu bo'limlari */}
//                 {uniqueCategories.map((category) => (
//                     <div
//                         key={category.id}
//                         ref={el => (categorySectionRefs.current[category.id] = el)} // Bo'limlar uchun refs
//                         className="category-section menu-items"
//                         data-category={category.id}
//                     >
//                         <h2>{category.label}</h2>
//                         {menuData.filter(item => item.category === category.id).map((item) => (
//                             <div
//                                 key={item.id} // Bu yerda noyob `id` ishlatilmoqda
//                                 className="menu-item"
//                             >
//                                 <div className="menu-item-img">
//                                     <img src={item.foodImg} alt={item.title} />
//                                 </div>
//                                 <div className="menu-item-info">
//                                     <p>{item.title}</p>
//                                     <p>{item.price}</p>
//                                 </div>
//                             </div>
//                         ))}

//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Menu;











// import React, { useState, useEffect, useRef } from "react";
// import "./style.scss"; // Style fayllar
// import { menuData } from "../../db/data"; // Menu ma'lumotlar

// const Menu = () => {
//     const [activeCategory, setActiveCategory] = useState("foods");
//     const categorySectionRefs = useRef({}); // Har bir kategoriya bo'limi uchun refs
//     const categoryRefs = useRef({}); // Har bir kategoriya tugmasi uchun refs
//     const categoriesContainerRef = useRef(null); // Kategoriya tugmalari containeri uchun ref




//     const uniqueCategories = [...new Set(menuData.map(item => item.category))].map((category) => {
//         return {
//             id: category,
//             label: menuData.find(item => item.category === category).label
//         };
//     });

//     // Kategoriya tugmasi bosilganda bo'limga scroll qilish
//     const handleCategoryClick = (categoryId) => {
//         const ref = categorySectionRefs.current[categoryId];
//         if (ref) {
//             ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             setActiveCategory(categoryId);
//             console.log("Bosilgan kategoriya ID:", categoryId);
//         }
//     };




//     //     // active classni avtomatik o'tkazish va Categoryni scroll qilish uchun
//     const handleScroll = () => {
//         const scrollPosition = window.scrollY + 350; // Yaxshiroq scroll deteksiyasi uchun
//         uniqueCategories.forEach(category => {
//             const ref = categorySectionRefs.current[category.id];
//             if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
//                 if (activeCategory !== category.id) {
//                     setActiveCategory(category.id); // Faqat aktiv kategoriya o'zgarganda update qiladi
//                 }
//             }
//         });
//     };


//     useEffect(() => {
//         const activeCategoryButton = categoryRefs.current[activeCategory];

//         // console.log('categoriesContainerRef.current :', categoriesContainerRef.current);
//         if (activeCategoryButton && categoriesContainerRef.current) {
//             // Aktiv kategoriya tugmasini scroll qilish
//             categoriesContainerRef.current.scrollTo({
//                 left: activeCategoryButton.offsetLeft - categoriesContainerRef.current.offsetWidth / 2 + activeCategoryButton.offsetWidth / 2,
//                 behavior: "smooth"
//             });
//         }


//         // const observer = new IntersectionObserver((entries) => {
//         //     entries.forEach(entry => {
//         //         if (entry.isIntersecting) {

//         //             const categoryId = entry.target.dataset.category;
//         //             console.log('categoryId :', categoryId);
//         //             console.log('activeCategory :', activeCategory);
//         //             if (activeCategory !== categoryId) {
//         //                 setActiveCategory(categoryId);
//         //             }
//         //         }
//         //     });
//         // }, { threshold: 0.1 });



//         // uniqueCategories.forEach(category => {
//         //     const ref = categorySectionRefs.current[category.id];
//         //     if (ref) {
//         //         observer.observe(ref);
//         //     }
//         // });




//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [activeCategory]); // `activeCategory` o'zgarishini kuzatadi




//     return (
//         <div className="container">
//             <div className="menu-container">
//                 {/* Kategoriyalar tugmasi */}
//                 <div className="restaurant_categories"  >
//                     {uniqueCategories.map((category) => (
//                         <button
//                             key={category.id}
//                             className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
//                             ref={el => (categoryRefs.current[category.id] = el)} // Kategoriya tugmalari uchun refs

//                             onClick={() => handleCategoryClick(category.id)}
//                             aria-pressed={activeCategory === category.id}
//                         >
//                             {category.label}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Menyu bo'limlari */}
//                 {uniqueCategories.map((category) => (
//                     <div
//                         key={category.id}
//                         data-category={category.id} // Bu yerda data-category ni belgilaymiz
//                         ref={el => (categorySectionRefs.current[category.id] = el)} // ref ni to'g'ri o'rnatish
//                         className="category-section menu-items"
//                     >
//                         <h2>{category.label}</h2>
//                         {menuData.filter(item => item.category === category.id).map((item) => (
//                             <div key={item.id} className="menu-item">
//                                 <div className="menu-item-img">
//                                     <img src={item.foodImg} alt={item.title} />
//                                 </div>
//                                 <div className="menu-item-info">
//                                     <p>{item.title}</p>
//                                     <p>{item.price}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Menu;









// import React, { useState, useEffect, useRef } from "react";
// import "./style.scss"; // Style fayllar
// import { menuData } from "../../db/data"; // Menu ma'lumotlar

// const Menu = () => {
//     const [activeCategory, setActiveCategory] = useState("foods");
//     const categorySectionRefs = useRef({}); // Har bir kategoriya bo'limi uchun refs
//     const categoryRefs = useRef({}); // Har bir kategoriya tugmasi uchun refs
//     const categoriesContainerRef = useRef(null);
//     const uniqueCategories = [...new Set(menuData.map(item => item.category))].map((category) => {
//         return {
//             id: category,
//             label: menuData.find(item => item.category === category).label
//         };
//     });

//     // Kategoriya tugmasi bosilganda bo'limga scroll qilish
//     const handleCategoryClick = (categoryId) => {
//         const ref = categorySectionRefs.current[categoryId];
//         if (ref) {
//             ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             setActiveCategory(categoryId);
//         }
//     };

//     // active classni avtomatik o'tkazish va Categoryni scroll qilish uchun
//     const handleScroll = () => {
//         const scrollPosition = window.scrollY + 350; // Yaxshiroq scroll deteksiyasi uchun
//         uniqueCategories.forEach(category => {
//             const ref = categorySectionRefs.current[category.id];
//             if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
//                 if (activeCategory !== category.id) {
//                     setActiveCategory(category.id);
//                 }
//             }
//         });
//     };
//     useEffect(() => {
//         if (activeCategory && categoryRefs.current[activeCategory]) {
//             const categoryButton = categoryRefs.current[activeCategory];
//             const categoriesContainer = categoriesContainerRef.current;

//             if (categoryButton && categoriesContainer) {
//                 const containerScrollLeft = categoriesContainer.scrollLeft;
//                 const containerWidth = categoriesContainer.offsetWidth;
//                 const buttonOffsetLeft = categoryButton.offsetLeft;
//                 const buttonWidth = categoryButton.offsetWidth;

//                 // Tugma to'liq ko'rinib turishi uchun scrollLeftni to'g'rilash
//                 const scrollPosition = buttonOffsetLeft - (containerWidth / 2) + (buttonWidth / 2);
                
//                 categoriesContainer.scrollTo({
//                     left: scrollPosition,
//                     behavior: 'smooth'
//                 });
//             }
//         }
//     }, [activeCategory]);
//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [activeCategory]);
    
//     return (
//         <div className="container">
//             <div className="menu-container">
//                 {/* Kategoriyalar tugmasi */}
//                 {/* <div className="restaurant_categories" > */}
//                 <div className="restaurant_categories" ref={categoriesContainerRef}>
//                 {/* <div className="restaurant_categories" ref={categoriesContainerRef}> */}
//                     {uniqueCategories.map((category,index) => (
//                         <button
//                             key={category.id+index}
//                             className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
//                             ref={el => (categoryRefs.current[category.id] = el)} // Kategoriya tugmalari uchun refs
//                             onClick={() => handleCategoryClick(category.id)}
//                             aria-pressed={activeCategory === category.id}
//                         >
//                             {category.label}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Menyu bo'limlari */}
//                 {uniqueCategories.map((category) => (
//                     <div
//                         key={category.id}
//                         data-category={category.id} // Bu yerda data-category ni belgilaymiz
//                         ref={el => (categorySectionRefs.current[category.id] = el)} // ref ni to'g'ri o'rnatish
//                         className="category-section menu-items"
//                     >
//                         <h2>{category.label}</h2>
//                         {menuData.filter(item => item.category === category.id).map((item, index) => (
//     <div key={`${item.id}-${index}`} className="menu-item">
//         <div className="menu-item-img">
//             <img src={item.foodImg} alt={item.title} />
//         </div>
//         <div className="menu-item-info">
//             <p>{item.title}</p>
//             <p>{item.price}</p>
//         </div>
//     </div>
// ))}

//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Menu;








import React, { useState, useEffect, useRef } from "react";
import "./style.scss"; // Style fayllar
import { menuData } from "../../db/data"; // Menu ma'lumotlar

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("foods");
    const categorySectionRefs = useRef({}); // Har bir kategoriya bo'limi uchun refs
    const categoryRefs = useRef({}); // Har bir kategoriya tugmasi uchun refs
    const categoriesContainerRef = useRef(null); 

    const uniqueCategories = [...new Set(menuData.map(item => item.category))].map((category) => {
        return {
            id: category,
            label: menuData.find(item => item.category === category).label
        };
    });

    // Kategoriya tugmasi bosilganda bo'limga scroll qilish
    const handleCategoryClick = (categoryId) => {
        const ref = categorySectionRefs.current[categoryId];
        if (ref) {
            // Scrollni to'g'ri bo'limga olib borish
            const { top } = ref.getBoundingClientRect(); // Elementning joylashuvini olish
            const offset = window.scrollY + top; // Scrollni to'g'ri bo'limga olib borish
            window.scrollTo({ top: offset, behavior: 'smooth' }); // Smooth scroll
            setActiveCategory(categoryId);
        }
    };

    // active classni avtomatik o'tkazish
    const handleScroll = () => {
        const scrollPosition = window.scrollY + 250; // Yaxshiroq scroll deteksiyasi uchun
        uniqueCategories.forEach(category => {
            const ref = categorySectionRefs.current[category.id];
            if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
                if (activeCategory !== category.id) {
                    setActiveCategory(category.id);
                }
            }
        });
    };

    // Scroll eventini qo'shish
    useEffect(() => {
        const onScroll = () => handleScroll(); // onScrollni chaqirish

        window.addEventListener("scroll", onScroll); // Scrollni tinglash
        return () => {
            window.removeEventListener("scroll", onScroll); // Cleanup qilish
        };
    }, [activeCategory, uniqueCategories]); // `activeCategory` va `uniqueCategories` o'zgarganda qayta ishlaydi

    // activeCategory o'zgarganda kategoriya tugmasi ko'rinadigan qilib scroll qilish
    useEffect(() => {
        if (activeCategory && categoryRefs.current[activeCategory]) {
            const categoryButton = categoryRefs.current[activeCategory];
            const categoriesContainer = categoriesContainerRef.current;

            if (categoryButton && categoriesContainer) {
                const containerScrollLeft = categoriesContainer.scrollLeft;
                const containerWidth = categoriesContainer.offsetWidth;
                const buttonOffsetLeft = categoryButton.offsetLeft;
                const buttonWidth = categoryButton.offsetWidth;

                // Tugma to'liq ko'rinib turishi uchun scrollLeftni to'g'rilash
                const scrollPosition = buttonOffsetLeft - (containerWidth / 2) + (buttonWidth / 2);
                
                categoriesContainer.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [activeCategory]);

    return (
        <div className="container">
            <div className="menu-container">
                {/* Kategoriyalar tugmasi */}
                <div className="restaurant_categories" ref={categoriesContainerRef}>
                    {uniqueCategories.map((category, index) => (
                        <button
                            key={category.id + index}
                            className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                            ref={el => (categoryRefs.current[category.id] = el)} // Kategoriya tugmalari uchun refs
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
                        data-category={category.id} // Bu yerda data-category ni belgilaymiz
                        ref={el => (categorySectionRefs.current[category.id] = el)} // ref ni to'g'ri o'rnatish
                        className="category-section menu-items"
                    >
                        <h2>{category.label}</h2>
                        {menuData.filter(item => item.category === category.id).map((item, index) => (
                            <div key={`${item.id}-${index}`} className="menu-item">
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
// import "./style.scss"; // Style fayllar
// import { menuData } from "../../db/data"; // Menu ma'lumotlar

// const Menu = () => {
//     const [activeCategory, setActiveCategory] = useState("foods");
//     const categorySectionRefs = useRef({}); // Har bir kategoriya bo'limi uchun refs
//     const categoryRefs = useRef({}); // Har bir kategoriya tugmasi uchun refs
//     const categoriesContainerRef = useRef(null); // Kategoriya tugmalari containeri uchun ref

//     const uniqueCategories = [...new Set(menuData.map(item => item.category))].map((category) => {
//         return {
//             id: category,
//             label: menuData.find(item => item.category === category).label
//         };
//     });

//     // Kategoriya tugmasi bosilganda bo'limga scroll qilish
//     const handleCategoryClick = (categoryId) => {
//         const ref = categorySectionRefs.current[categoryId];
//         if (ref) {
//             setActiveCategory(categoryId); // Aktiv kategoriya yangilanishi
//         }
//     };

//     const handleScroll = () => {
//         const scrollPosition = window.scrollY + 350; // Yaxshiroq scroll deteksiyasi uchun
//         uniqueCategories.forEach(category => {
//             const ref = categorySectionRefs.current[category.id];
//             if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
//                 if (activeCategory !== category.id) {
//                     setActiveCategory(category.id); // Faqat aktiv kategoriya o'zgarganda update qiladi
//                 }
//             }
//         });
//     };

//     useEffect(() => {
//         const activeCategoryButton = categoryRefs.current[activeCategory];
 
//         if (activeCategoryButton && categoriesContainerRef.current) {
//             // Aktiv kategoriya tugmasini scroll qilish
//             categoriesContainerRef.current.scrollTo({
//                 left: activeCategoryButton.offsetLeft - (categoriesContainerRef.current.offsetWidth / 2) + (activeCategoryButton.offsetWidth / 2),
//                 behavior: "smooth"
//             });
//         }

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [activeCategory]); // `activeCategory` o'zgarishini kuzatadi


//     return (
//         <div className="container">
//             <div className="menu-container">
//                 {/* Kategoriyalar tugmasi */}
//                 <div className="restaurant_categories" ref={categoriesContainerRef}>
//                     {uniqueCategories.map((category) => (
//                         <button
//                             key={category.id}
//                             className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
//                             ref={el => (categoryRefs.current[category.id] = el)} // Kategoriya tugmalari uchun refs
//                             onClick={() => handleCategoryClick(category.id)}
//                             aria-pressed={activeCategory === category.id}
//                         >
//                             {category.label}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Menyu bo'limlari */}
//                 {uniqueCategories.map((category) => (
//                     <div
//                         key={category.id}
//                         data-category={category.id} // Bu yerda data-category ni belgilaymiz
//                         ref={el => (categorySectionRefs.current[category.id] = el)} // ref ni to'g'ri o'rnatish
//                         className="category-section menu-items"
//                     >
//                         <h2>{category.label}</h2>
//                         {menuData.filter(item => item.category === category.id).map((item, index) => (
//                             <div key={`${item.id}-${index}`} className="menu-item">
//                                 <div className="menu-item-img">
//                                     <img src={item.foodImg} alt={item.title} />
//                                 </div>
//                                 <div className="menu-item-info">
//                                     <p>{item.title}</p>
//                                     <p>{item.price}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Menu;















// import React, { useState, useEffect, useRef } from "react";
// import "./style.scss"; // Style fayllar
// import { menuData } from "../../db/data"; // Menu ma'lumotlar

// const Menu = () => {
//     const [activeCategory, setActiveCategory] = useState("foods");
//     const categoryRefs = useRef({}); // Har bir kategoriya tugmasi uchun refs
//     const categorySectionRefs = useRef({}); // Har bir kategoriya bo'limi uchun refs
//     const uniqueCategories = useRef([...new Set(menuData.map(item => item.category))].map((category) => {
//         return {
//             id: category,
//             label: menuData.find(item => item.category === category).label
//         };
//     }));

//     // Kategoriya tugmasi bosilganda bo'limga scroll qilish
//     const handleCategoryClick = (categoryId) => {
//         const ref = categorySectionRefs.current[categoryId];
//         if (ref) {
//             ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             setActiveCategory(categoryId);
//             console.log("Bosilgan kategoriya ID:", categoryId);
//         }
//     };

//     // Scroll holatini boshqarish
//     const handleScroll = () => {
//         const scrollPosition = window.scrollY + 350;
//         uniqueCategories.current.forEach(category => {
//             const ref = categorySectionRefs.current[category.id];
//             if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
//                 if (activeCategory !== category.id) {
//                     setActiveCategory(category.id);
//                 }
//             }
//         });
//     };

//     // Effect to observe category visibility
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     const categoryId = entry.target.dataset.category;
//                     if (activeCategory !== categoryId) {
//                         setActiveCategory(categoryId);
//                     }
//                 }
//             });
//         }, { threshold: 0.1 });

//         uniqueCategories.current.forEach(category => {
//             const ref = categorySectionRefs.current[category.id];
//             if (ref) {
//                 observer.observe(ref);
//             }
//         });

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             observer.disconnect();
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [activeCategory]);

//     return (
//         <div className="container">
//             <div className="menu-container">
//                 {/* Kategoriyalar tugmasi */}
//                 <div className="restaurant_categories">
//                     {uniqueCategories.current.map((category) => (
//                         <button
//                             key={category.id}
//                             className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
//                             ref={el => (categoryRefs.current[category.id] = el)}
//                             onClick={() => handleCategoryClick(category.id)}
//                             // aria-pressed={activeCategory === category.id}
//                         >
//                             {category.label}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Menyu bo'limlari */}
//                 {uniqueCategories.current.map((category) => (
//                     <div
//                         key={category.id}
//                         id={category.id}
//                         data-category={category.id}
//                         ref={el => (categorySectionRefs.current[category.id] = el)}
//                         className="category-section menu-items"
//                     >
//                         <h2>{category.label}</h2>
//                         {menuData.filter(item => item.category === category.id).map((item) => (
//                             <div key={item.id} className="menu-item">
//                                 <div className="menu-item-img">
//                                     <img src={item.foodImg} alt={item.title} />
//                                 </div>
//                                 <div className="menu-item-info">
//                                     <p>{item.title}</p>
//                                     <p>{item.price}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Menu;










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
















// import React, { useState, useEffect, useRef } from "react";
// import "./style.scss"; // Create your styles here or import as needed
// import { menuData } from "../../db/data"; // Import your menu data

// const Menu = () => {
//     const [activeCategory, setActiveCategory] = useState("foods");
//     const categoryRefs = useRef({}); // To store category refs for scroll detection
//     const categorySectionRefs = useRef({}); // Store refs for each category section
//     const categoriesContainerRef = useRef(null); // Ref for the restaurant categories container

//     // Unique categories extraction
//     const uniqueCategories = [...new Set(menuData.map(item => item.category))].map((category) => {
//         return {
//             id: category,
//             label: menuData.find(item => item.category === category).label
//         };
//     });

//     // Handle category button click
//     const handleCategoryClick = (categoryId) => {
//         setActiveCategory(categoryId);
//         const ref = categorySectionRefs.current[categoryId];
//         if (ref) {
//             ref.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to the selected category section
//         }
//     };

//     // Effect to observe category visibility
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
//             const ref = categorySectionRefs.current[category.id];
//             if (ref) {
//                 observer.observe(ref);
//             }
//         });

//         return () => {
//             observer.disconnect(); // Clean up the observer on unmount
//         };
//     }, [uniqueCategories]);

//     return (
//         <div className="container">
//             <div className="menu-container">
//                 {/* Restaurant Categories with horizontal scroll */}
//                 <div className="restaurant_categories" ref={categoriesContainerRef}>
//                     {uniqueCategories.map((category) => (
//                         <a
//                             key={category.id}
//                             href={`#${category.id}`} // Link to the category section
//                             className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
//                             ref={el => (categoryRefs.current[category.id] = el)} // Store refs for category buttons
//                             onClick={(e) => {
//                                 e.preventDefault(); // Prevent default anchor behavior
//                                 handleCategoryClick(category.id); // Handle click to scroll to the category
//                             }}
//                         >
//                             {category.label}
//                         </a>
//                     ))}
//                 </div>

//                 {/* Menu Items */}
//                 {uniqueCategories.map((category) => (
//                     <div
//                         key={category.id}
//                         id={category.id} // Assign id to each category section
//                         data-category={category.id} // Add data attribute for intersection observer
//                         ref={el => (categorySectionRefs.current[category.id] = el)} // Store refs for category sections
//                         className="category-section"
//                     >
//                         <h2>{category.label}</h2>
//                         {menuData.filter(item => item.category === category.id).map(item => (
//                             <div
//                                 key={item.id}
//                                 className="menu-item"
//                             >
//                                 <div className="menu-item-img">
//                                     <img src={item.foodImg} alt={item.title} />
//                                 </div>
//                                 <div className="menu-item-info">
//                                     <p>{item.title}</p>
//                                     <p>{item.price}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Menu;























// import React, { useState, useEffect, useRef } from "react";
// import "./style.scss"; // Style fayllar
// import { menuData } from "../../db/data"; // Menu ma'lumotlar

// const Menu = () => {
//     const [activeCategory, setActiveCategory] = useState("foods");
//     const categoryRefs = useRef({}); // Har bir kategoriya tugmasi uchun refs
//     const categorySectionRefs = useRef({}); // Har bir kategoriya bo'limi uchun refs
//     const categoriesContainerRef = useRef(null); // Kategoriya tugmalari containeri uchun ref

//     // Unikal kategoriyalarni ajratib olish
//     const uniqueCategories = [...new Set(menuData.map(item => item.category))].map((category) => {
//         return {
//             id: category,
//             label: menuData.find(item => item.category === category).label
//         };
//     });

//     // Kategoriya tugmasi bosilganda bo'limga scroll qilish
//     const handleCategoryClick = (categoryId) => {
//         setActiveCategory(categoryId); // Aktiv kategoriyani yangilash
//         const ref = categorySectionRefs.current[categoryId];

//         // Agar ref mavjud bo'lsa, uni konsolga chiqarish
//         if (ref) {
//             ref.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll qilish
//         } else {
//             console.log('Ref topilmadi:', categoryId); // Agar ref topilmasa xatolikni konsolga chiqarish
//         }
//     };

//     // Effect to observe category visibility
//     useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.1 // Trigger when at least 10% of the category is visible
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     setActiveCategory(entry.target.dataset.category); // Aktiv kategoriya o'zgarganda yangilash
//                 }
//             });
//         }, options);

//         // Kategoriya bo'limlarini kuzatish
//         uniqueCategories.forEach(category => {
//             const ref = categorySectionRefs.current[category.id];
//             if (ref) {
//                 observer.observe(ref);
//             }
//         });

//         return () => {
//             observer.disconnect(); // Component o'chirilganda kuzatuvchini tozalash
//         };
//     }, [uniqueCategories]);

//     return (
//         <div className="container">
//             <div className="menu-container">
//                 {/* Kategoriyalar tugmasi */}
//                 <div className="restaurant_categories" ref={categoriesContainerRef}>
//                     {uniqueCategories.map((category) => (
//                         <button
//                             key={category.id}
//                             className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
//                             ref={el => (categoryRefs.current[category.id] = el)} // Kategoriya tugmalari uchun refs
//                             onClick={() => handleCategoryClick(category.id)} // Tugmani bosganda scroll qilish
//                             aria-pressed={activeCategory === category.id} // Accessibility uchun
//                         >
//                             {category.label}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Menyu bo'limlari */}
//                 {uniqueCategories.map((category) => (
//                     <div
//                         key={category.id}
//                         id={category.id} // Har bir kategoriya bo'limiga id berish
//                         data-category={category.id} // Kuzatuvchilar uchun data atributi
//                         ref={el => (categorySectionRefs.current[category.id] = el)} // Bo'limlar uchun refs
//                         className="category-section menu-items"
//                     >
//                         <h2>{category.label}</h2>
//                         {menuData.filter(item => item.category === category.id).map((item) => (
//                             <div
//                                 key={item.id} // Bu yerda noyob `id` ishlatilmoqda
//                                 className="menu-item"
//                             >
//                                 <div className="menu-item-img">
//                                     <img src={item.foodImg} alt={item.title} />
//                                 </div>
//                                 <div className="menu-item-info">
//                                     <p>{item.title}</p>
//                                     <p>{item.price}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Menu;
