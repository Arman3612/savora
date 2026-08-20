// import { isObject } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
const resList = [
  {
    info: {
      id: "41350",
      name: "Burger King",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/4f9bb48e-82df-474b-8d71-cb12703bba30_772030.JPG",
      cuisines: ["Burgers", "American", "Fast Food", "Espresso"],
      avgRating: 4.3,
      costForTwo: 400,
      costForTwoString: "₹400 for two",
    },
  },

  {
    info: {
      id: "772030",
      name: "McDonald's",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/07492503-274f-4ecc-ba27-733c59f4d540_41350.jpg",
      cuisines: ["American", "Fast Food", "Beverages"],
      avgRating: 4.3,
      costForTwo: 300,
      costForTwoString: "₹300 for two",
    },
  },

  {
    info: {
      id: "583421",
      name: "KFC",
      cloudinaryImageId: "euwwcssmiewn2cpq7xww",
      cuisines: ["Burgers", "Fast Food", "Chicken"],
      avgRating: 4.1,
      costForTwo: 450,
      costForTwoString: "₹450 for two",
    },
  },

  {
    info: {
      id: "621845",
      name: "Domino's Pizza",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/bf94e09e-c199-427c-84ef-248d46a43e86_1043746.jpg",
      cuisines: ["Pizzas", "Italian", "Fast Food"],
      avgRating: 4.2,
      costForTwo: 500,
      costForTwoString: "₹500 for two",
    },
  },

  {
    info: {
      id: "739214",
      name: "Subway",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/07492503-274f-4ecc-ba27-733c59f4d540_41350.jpg",
      cuisines: ["Healthy Food", "Salads", "Sandwiches"],
      avgRating: 4.4,
      costForTwo: 350,
      costForTwoString: "₹350 for two",
    },
  },

  {
    info: {
      id: "845623",
      name: "Biryani Blues",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
      cuisines: ["Biryani", "North Indian", "Mughlai"],
      avgRating: 4.5,
      costForTwo: 600,
      costForTwoString: "₹600 for two",
    },
  },

  {
    info: {
      id: "916738",
      name: "Pizza Hut",
      cloudinaryImageId: "e1a0833bdc40ad1f6fe3185f102c9382",
      cuisines: ["Pizzas", "Italian", "Desserts"],
      avgRating: 4.0,
      costForTwo: 550,
      costForTwoString: "₹550 for two",
    },
  },
];
const resobj = {
  burgerKing: {
    info: {
      id: "41350",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/4f9bb48e-82df-474b-8d71-cb12703bba30_772030.JPG",
      cuisines: ["Burgers", "American","Fast food","expresso"],
      avgRating: 4.3,
      costForTwo:400,
      costForTwoString: "₹400 for two",
    },
  },

  mcdonalds: {
    info: {
      id: "772030",
      name: "McDonald's",
      cuisines: ["American", "Fast Food", "Beverages"],
      avgRating: 4.3,
      costForTwo:300,
      costForTwoString: "₹300 for two",
     cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/07492503-274f-4ecc-ba27-733c59f4d540_41350.jpg",
    },
  },
};
const Header=()=>{
    return (
        <div className="header">
            <div className="logo container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VeGhZ_YoiY9X5FEHtqFd-8C90gnZ0kL5wXpmAtKq0w&s=10"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Name</li>
                    <li>About us</li>
                    <li>contact us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}
/*const styleCard={
    backgroundColor:"#f0f0f0"
}
const RestaurantCard=()=>{
    return (
        <div className="res-card" style={styleCard}>
            <h3>Meghna foods</h3>
        </div>
    )
}*/
// const RestaurantCard=(props)=>{
//     const{resData}=props;
//     //    or we can do like this const RestaurantCard=({resName,cusine})=>{    or const {resName,cusine}=props; ----destructuring on the fly
//     return (
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img
//             className="res-logo"
//             alt="res-logo"
//              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+resData.burgerKing.info.cloudinaryImageId}></img>
//             {/* <h3>{props.resName}</h3> */}
//             {/*or we can do like this    <h3>{resName}</h3> */}
//             {/* <h4>{props.cusines}</h4> */}
//             {/*or we can do like this <h4>{cusines}</h4> */}
//             <h3>{resData.burgerKing.info.name}</h3>
//             <h4>{resData.burgerKing.info.cuisines.join(", ")}</h4>
//             <h4>{resData.burgerKing.info.avgRating} stars</h4>
//             <h4>{resData.burgerKing.info.costForTwo}For TWO</h4>
//             <h4>{resData.burgerKing.info.id}</h4>
            
            

//             {/* <h4>4.4 stars</h4>
//             <h4>38 minutes</h4> */}
//         </div>
//     );
// };
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
             src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+cloudinaryImageId}></img>
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
// const Body=()=>{
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="res-container">
//                 <RestaurantCard 
//                 resData={resobj}
//                 />
//                  {/* <RestaurantCard resName="kfc"
//                 cusines="Burger,fast food"/> */}
                 
//             </div>
//         </div>
//     )
// }
const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
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
}
const AppLayout=()=>{
return(
    <div className="app">
        <Header/>
        <Body/>

    </div>
)
}


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<AppLayout/>);