import { CDN } from "../utils/constants";
const RestaurantCard=(props)=>{
    const{resData}=props;
    //    or we can do like this const RestaurantCard=({resName,cusine})=>{    or const {resName,cusine}=props; ----destructuring on the fly
   const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    id,
   }=resData?.info;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
            className="res-logo"
            alt="res-logo"
             src={CDN+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}For TWO</h4>
            <h4>{id}</h4>
            {/* <h4>{resData.info.id}</h4> */}
            
            

            {/* <h4>4.4 stars</h4>
            <h4>38 minutes</h4> */}
        </div>
    );
};
export default RestaurantCard;