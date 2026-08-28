import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
//State variable -super powerful variable
//React hook=a noamal js funtion written by developers it is a utility function
//1.useState()-sperpowerful state varaiavles in react(80%we use this only)
//2.useEffect()- (20%usecase)
//when state variable update react rerender the component
//react makes dom manipulation very fast
import {useState} from "react";
const Body=()=>{
    // const [resListt,setresListt]=arr; array destructuring
    // const resList=arr[0];
    // const setListt=arr[1];
    const [resListt,setresListt]=useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                 onClick={()=>{
                    //filter logic here
                    const filterlist =resListt.filter(
                        (res)=>res.info.avgRating>4.2
                    );
                    setresListt(filterlist);
                    //console.log(resListt);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/> */}
                {
                    resListt.map((restaurant)=> (
                    <RestaurantCard
                     key={restaurant.info.id}
                     resData ={restaurant}/>)
                )}
                 
            </div>
        </div>
    )
};
export default Body;