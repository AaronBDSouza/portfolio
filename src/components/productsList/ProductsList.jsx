import React, { useEffect, useState } from 'react'
import ProductListItems from "../productsListItems/ProductsListItems";
import './productsList.scss';
import { featuredProjectData, latestProjectData, functionalityProjectData, designProjectData  } from '../../projectData';
import { Redirect } from "react-router-dom";

export default function ProductsList() {
    const [selected, setSelected] = useState('featured');
    const [categoryData, setCategoryData] = useState([]);   
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "latest",
            title: "Latest"
        },
        {
            id: "functionality",
            title: "Functionality"
        },
        {
            id: "design",
            title: "Design"
        }   
    ];

    useEffect(() => {
        switch(selected){
            case "featured":
                setCategoryData(featuredProjectData);
                break;
            case "latest":
                setCategoryData(latestProjectData);
                break;
            case "functionality":
                setCategoryData(functionalityProjectData);
                break;
            case "design":
                setCategoryData(designProjectData);
                break;      
            default:
                setCategoryData(featuredProjectData);
                break;              
        }

    },[selected]);

    const handleProductItemClick =(imgID) => {
        alert(imgID);
        <Redirect
            to={{
            pathname: "/projectViewer",
            state: { property_id: imgID }
          }}
        />
    }

    return (
        <div className="productsList" id="productsList">
            <h1>Products</h1>
            <ul>
                { list.map((item) => (
                    <ProductListItems 
                    id = {item.id}
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}/>
                ))}
            </ul>
            <div className="outerContainer">
                <div className="container">
                    {categoryData.map((dataItem) => (
                    <div className="item">
                        <img src={dataItem.img} alt={dataItem.title} onClick={() => handleProductItemClick(dataItem.id)}/>
                        <h3>{dataItem.title}</h3>
                    </div>   
                    ))}          
                </div>
            </div>
            <h2 className="loadingText">Loading Products... Initializing Server...</h2>
        </div>
    )
}
