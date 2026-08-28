// import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockdata";
// //State variable -super powerful variable
// //React hook=a noamal js funtion written by developers it is a utility function
// //1.useState()-sperpowerful state varaiavles in react(80%we use this only)
// //2.useEffect()- (20%usecase)
// //when state variable update react rerender the component
// //react makes dom manipulation very fast
// import {useState ,useEffect} from "react";
// const Body=()=>{
//     // const [resListt,setresListt]=arr; array destructuring
//     // const resList=arr[0];
//     // const setListt=arr[1];
//     const [resListt,setlistofres]=useState(resList);
//     useEffect(()=>{
//         fetchData();
//     },[]);
//     const fetchData=async () => {
//         const data=await fetch(
//             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//         );
//     const json=await data.json();
//         console.log(json);
//         setlistofres(json.data.cards);

//     }
//     return (
//         <div className="body">
//             <div className="filter">
//                 <button className="filter-btn"
//                  onClick={()=>{
//                     //filter logic here
//                     // const filterlist =setlistofres.filter(
//                     //     (res)=>res.info.avgRating>4.2
//                     // );
//                     setresListt(filterlist);
//                     //console.log(resListt);
//                 }}>Top Rated Restaurant</button>
//             </div>
//             <div className="res-container">
//                 {/* <RestaurantCard resData={resList[0]}/>
//                 <RestaurantCard resData={resList[1]}/>
//                 <RestaurantCard resData={resList[2]}/>
//                 <RestaurantCard resData={resList[3]}/>
//                 <RestaurantCard resData={resList[4]}/>
//                 <RestaurantCard resData={resList[5]}/> */}
//                 {
//                     resListt.map((restaurant)=> (
//                     <RestaurantCard
//                      key={restaurant.info.id}
//                      resData ={restaurant}/>)
//                 )}
                 
//             </div>
//         </div>
//     )
// };
// export default Body;
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
//import resList from "../utils/mockdata";

//State variable -super powerful variable
//React hook=a noamal js funtion written by developers it is a utility function

//1.useState()-sperpowerful state varaiavles in react(80%we use this only)

//2.useEffect()- (20%usecase)

//when state variable update react rerender the component

//react makes dom manipulation very fast

import { useState, useEffect } from "react";
// import { h1 } from "framer-motion/client";

const Body = () => {
    // const [resListt,setresListt]=arr; array destructuring

    // const resList=arr[0];

    // const setListt=arr[1];

    const [resListt, setlistofres] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);

        const restaurants = json?.data?.cards?.find(
            (card) =>
                card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        console.log(restaurants);

        if (restaurants) {
            setlistofres(restaurants);
        }
    };
//  if (resListt.length==0){
//     // return <h1>Loading</h1>;
//     return <Shimmer />;
//  }
    return resListt.length==0?<Shimmer/>:(
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        //filter logic here
                        const filterlist = resListt.filter(
                            (res) => res.info.avgRating > 4.2
                        );

                        setlistofres(filterlist);

                        //console.log(resListt);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>

            <div className="res-container">
                {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/> */}

                {resListt.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
