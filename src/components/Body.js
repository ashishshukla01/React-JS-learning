import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

  const [resList, setresList] = useState(
    [
    {
    data :{
      id:1,
      name: "McDonalds",
      cuisines: "Burger, Wraps, Fries, Beverages", 
      avgRating: "3.9", 
      deliveryTime: "35", 
      costForTwo: "300"
    }
  },

    {    
    data :{
      id:2,
      name: "Bikanervala",
      cuisines: "North Indian Food", 
      avgRating: "4.1", 
      deliveryTime: "35", 
      costForTwo: "400"
    }
  }, 

  {
    data :{
      id:3,
      name: "Xero Degrees",
      cuisines: "Burgers, Pizzas, Chinese, beverages", 
      avgRating: "4.2", 
      deliveryTime: "40", 
      costForTwo: "350"
    }
  },

  {
    data :{
      id:4,
      name: "Belgian Waffles",
      cuisines: "Waffles, Thick Shakes", 
      avgRating: "4.0", 
      deliveryTime: "40", 
      costForTwo: "300"
    }
  }
  ]);

  const [filteredRestaurant, setfilteredRestaurant] = useState(resList);

  const [searchText, setSearchText] = useState("");

  
  return (

    <div className="body">

       <div className = "filter">

        <div className="search">

          <input type="text" className="search-box" value = {searchText} onChange={(e)=>{
            setSearchText(e.target.value);

          }} />

          <button onClick={()=>{

            const filteredRes = resList.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));

            setfilteredRestaurant(filteredRes);
          }} > Search</button>
        </div>

        <button className="filter-btn" onClick={()=>{

         const filteredList = resList.filter(res => res.data.avgRating > 4);

         setfilteredRestaurant(filteredList);
        }}>
          Top Rated Restaurants
          </button>
       </div>
       <div className="res-container">

       {filteredRestaurant.map((restaurant) =>(
        <RestaurantCard key = {restaurant.data.id} resData = {restaurant} />

       ))} 

       </div>
    
    </div>
  )
}

export default Body;