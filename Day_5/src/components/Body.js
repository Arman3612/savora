import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
const Body=()=>{
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    console.log("Resturant clicked");  
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
                    resList.map((restaurant)=> (
                    <RestaurantCard
                     key={restaurant.info.id}
                     resData ={restaurant}/>)
                )}
                 
            </div>
        </div>
    )
};
export default Body;