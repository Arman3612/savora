// Rich mock restaurants with real-world geographic coordinates (Chandigarh region)
// Compatible with Leaflet Map and Swiggy Restaurant Card components
const resList = [
  {
    info: {
      id: "41350",
      name: "Burger King",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/4f9bb48e-82df-474b-8d71-cb12703bba30_772030.JPG",
      locality: "Sector 35-C",
      areaName: "Sector 35",
      cuisines: ["Burgers", "American", "Fast Food", "Beverages"],
      avgRating: 4.4,
      totalRatingsString: "10K+ ratings",
      costForTwo: "₹350 for two",
      costForTwoNumeric: 350,
      lat: 30.7250,
      lng: 76.7680,
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km"
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
        discountTag: "FLAT DEAL"
      },
      veg: false
    }
  },
  {
    info: {
      id: "772030",
      name: "McDonald's",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/07492503-274f-4ecc-ba27-733c59f4d540_41350.jpg",
      locality: "Elante Mall",
      areaName: "Industrial Area Phase I",
      cuisines: ["American", "Fast Food", "Burgers", "Cafe"],
      avgRating: 4.5,
      totalRatingsString: "25K+ ratings",
      costForTwo: "₹400 for two",
      costForTwoNumeric: 400,
      lat: 30.7055,
      lng: 76.8013,
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.4 km"
      },
      aggregatedDiscountInfoV3: {
        header: "₹65 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL"
      },
      veg: false
    }
  },
  {
    info: {
      id: "583421",
      name: "KFC",
      cloudinaryImageId: "euwwcssmiewn2cpq7xww",
      locality: "Sector 17 Plaza",
      areaName: "Sector 17",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      totalRatingsString: "5K+ ratings",
      costForTwo: "₹450 for two",
      costForTwoNumeric: 450,
      lat: 30.7398,
      lng: 76.7827,
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.2 km"
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80"
      },
      veg: false
    }
  },
  {
    info: {
      id: "621845",
      name: "Domino's Pizza",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/bf94e09e-c199-427c-84ef-248d46a43e86_1043746.jpg",
      locality: "Sector 22 Market",
      areaName: "Sector 22",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.6,
      totalRatingsString: "12K+ ratings",
      costForTwo: "₹400 for two",
      costForTwoNumeric: 400,
      lat: 30.7315,
      lng: 76.7725,
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km"
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹399"
      },
      veg: false
    }
  },
  {
    info: {
      id: "739214",
      name: "Subway",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/07492503-274f-4ecc-ba27-733c59f4d540_41350.jpg",
      locality: "Sector 8 Inner Market",
      areaName: "Sector 8",
      cuisines: ["Healthy Food", "Salads", "Sandwiches", "Beverages"],
      avgRating: 4.4,
      totalRatingsString: "3K+ ratings",
      costForTwo: "₹350 for two",
      costForTwoNumeric: 350,
      lat: 30.7420,
      lng: 76.7970,
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.5 km"
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75"
      },
      veg: true
    }
  },
  {
    info: {
      id: "845623",
      name: "Biryani Blues",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
      locality: "Sector 26 Madhya Marg",
      areaName: "Sector 26",
      cuisines: ["Biryani", "Hyderabadi", "North Indian", "Kebabs"],
      avgRating: 4.6,
      totalRatingsString: "8K+ ratings",
      costForTwo: "₹600 for two",
      costForTwoNumeric: 600,
      lat: 30.7285,
      lng: 76.8120,
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.1 km"
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100"
      },
      veg: false
    }
  },
  {
    info: {
      id: "916738",
      name: "Pizza Hut",
      cloudinaryImageId: "e1a0833bdc40ad1f6fe3185f102c9382",
      locality: "Aroma Complex",
      areaName: "Sector 22",
      cuisines: ["Pizzas", "Pastas", "Garlic Bread", "Desserts"],
      avgRating: 4.1,
      totalRatingsString: "4K+ ratings",
      costForTwo: "₹500 for two",
      costForTwoNumeric: 500,
      lat: 30.7300,
      lng: 76.7760,
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.2 km"
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179"
      },
      veg: false
    }
  },
  {
    info: {
      id: "102938",
      name: "Haldiram's Sweets & Namkeen",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/c1ee954b-d748-433a-a1e6-eeeb5a31d4e0_621845.jpg",
      locality: "Sector 34 Sub City",
      areaName: "Sector 34",
      cuisines: ["North Indian", "Sweets", "Chaat", "Thalis", "South Indian"],
      avgRating: 4.5,
      totalRatingsString: "18K+ ratings",
      costForTwo: "₹300 for two",
      costForTwoNumeric: 300,
      lat: 30.7210,
      lng: 76.7710,
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.9 km"
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50"
      },
      veg: true
    }
  },
  {
    info: {
      id: "105820",
      name: "Chai Point & Snacks",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/4f9bb48e-82df-474b-8d71-cb12703bba30_772030.JPG",
      locality: "Sector 9 Inner",
      areaName: "Sector 9",
      cuisines: ["Tea", "Beverages", "Fast Food", "Snacks"],
      avgRating: 4.3,
      totalRatingsString: "3K+ ratings",
      costForTwo: "₹250 for two",
      costForTwoNumeric: 250,
      lat: 30.7460,
      lng: 76.7910,
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "12-18 mins",
        lastMileTravelString: "1.1 km"
      },
      aggregatedDiscountInfoV3: {
        header: "FLAT ₹50 OFF",
        subHeader: "ABOVE ₹199"
      },
      veg: true
    }
  },
  {
    info: {
      id: "109841",
      name: "Bakingo - Premium Cakes",
      cloudinaryImageId: "e1a0833bdc40ad1f6fe3185f102c9382",
      locality: "Sector 43 Market",
      areaName: "Sector 43",
      cuisines: ["Bakery", "Desserts", "Cakes", "Pastries"],
      avgRating: 4.7,
      totalRatingsString: "9K+ ratings",
      costForTwo: "₹450 for two",
      costForTwoNumeric: 450,
      lat: 30.7180,
      lng: 76.7550,
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.8 km"
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120"
      },
      veg: true
    }
  }
];

export default resList;