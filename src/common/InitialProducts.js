import Crocs from "../assests/images/footwear.webp";
import NoteBooks from "../assests/images/notebooks.jpg";
import RedMi from "../assests/images/phone.webp";
import Shirt from "../assests/images/shirt.webp";
import MensWatch from "../assests/images/watch.webp";

export default function InitialProducts() {
    return [
        {
            key: 1,
            name:'Crocs',
            price:2000,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Crocs,
            category: 'FOOTWEAR',
            modifiedDate: new Date().toLocaleString(),
            quantity: 50,
            manufacturer: 'CROCS'
        },
        {
            key: 2,
            name:'NoteBooks',
            price:250,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: NoteBooks,
            category: 'STATIONERY',
            modifiedDate: new Date().toLocaleString(),
            quantity: 120,
            manufacturer: 'TATA'
        },
        {
            key: 3,
            name:'RedMi',
            price:25000,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: RedMi,
            category: 'ELECTRONICS',
            modifiedDate: new Date().toLocaleString(),
            quantity: 150,
            manufacturer: 'XIOMI'
        },
        {
            key: 4,
            name:'Shirt',
            price:1800,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Shirt,
            category: 'APPAREL',
            modifiedDate: new Date().toLocaleString(),
            quantity: 250,
            manufacturer: 'ADITYA BIRLA'
        },
        {
            key: 5,
            name:'Mens Watch',
            price:6000,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: MensWatch,
            category: 'ACCESSORIES',
            modifiedDate: new Date().toLocaleString(),
            quantity: 80,
            manufacturer: 'FOSSIL'
        }
    ];
}