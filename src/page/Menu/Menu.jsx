import React, { useState } from "react";
import "./style.scss"; // Create your styles here or import as needed
import Line from "../../components/Line/Line";

const menuData = [
    {
        id: 1,
        foodImg: "https://example.com/shurva.png",
        title: "Shurva 1 porsiya  saxasx sax saxas x",
        price: "35 000 SUM",
        category: "foods"
    },
    {
        id: 2,
        foodImg: "https://example.com/lagman.png",
        title: "Lagmon",
        price: "30 000 SUM",
        category: "foods"
    },
    {
        id: 3,
        foodImg: "https://example.com/caesar.png",
        title: "Cezar",
        price: "30 000 SUM",
        category: "salads"
    },
    {
        id: 4,
        foodImg: "https://example.com/coca-cola.png",
        title: "Coca-Cola",
        price: "8 000 SUM",
        category: "drinks"
    }
];

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("foods");


    const filteredMenu = menuData.filter(
        (item) => item.category === activeCategory
    );
    const categories = [
        { id: 'foods', label: 'Milliy taomlar' },
        { id: 'salads', label: 'Salatlar' },
        { id: 'drinks', label: 'Ichimliklar' },
    ];
    return (
        <div className="container">
            <div className="menu-container">

                <div className="restaurant_categories">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="menu-items">
                    {filteredMenu.map((item) => (
                        <div key={item.id} className="menu-item">
                            <div className="menu-item-img">
                            <img src={"https://picsum.photos/300/300"} alt={item.title} />
                          </div>
                            <div className="menu-item-info">
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
