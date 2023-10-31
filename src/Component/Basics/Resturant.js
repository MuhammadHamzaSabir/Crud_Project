import React, { createRef, useState } from 'react'
import './style.css';
import Menu from './MenuApi.js';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueItems = [...new Set(Menu.map((currElement) => {
    return currElement.category;
})),
"All"]
// console.log(uniqueItems);


const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [uniqueCategory, setuniqueCategory] = useState(uniqueItems);

    // When Click Category than this categgory shows
    const filter = (item) => {
        if (item === 'All') {
            setMenuData(Menu);
            return
        }
        const updatedValue = Menu.filter((currElement) => {
           
           return currElement.category === item; 
        })
        setMenuData(updatedValue);
    }

    return (
        <>
            <Navbar filter = {filter} uniqueCategory = {uniqueCategory} />
            <MenuCard menuData={menuData} />
        </>
    )
}
export default Resturant;

