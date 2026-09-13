const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all origins and methods
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Comprehensive restaurant catalog with coordinates (Sector 17 / 35 Chandigarh & nearby areas)
const mockRestaurants = [
  {
    info: {
      id: "41350",
      name: "Burger King",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/4f9bb48e-82df-474b-8d71-cb12703bba30_772030.JPG",
      locality: "Sector 35-C",
      areaName: "Sector 35",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Beverages"],
      avgRating: 4.4,
      totalRatingsString: "10K+ ratings",
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
      veg: false,
      badges: {
        imageBadges: [
          {
            description: "pureveg",
            imageId: "v1695133679/badges/Pure_Veg111.png"
          }
        ]
      }
    }
  },
  {
    info: {
      id: "772030",
      name: "McDonald's",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/07492503-274f-4ecc-ba27-733c59f4d540_41350.jpg",
      locality: "Elante Mall",
      areaName: "Industrial Area Phase I",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food", "Burgers", "Cafe"],
      avgRating: 4.5,
      totalRatingsString: "25K+ ratings",
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
      costForTwo: "₹450 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      totalRatingsString: "5K+ ratings",
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
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.6,
      totalRatingsString: "12K+ ratings",
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
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Sandwiches", "Beverages"],
      avgRating: 4.4,
      totalRatingsString: "3K+ ratings",
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
      costForTwo: "₹600 for two",
      cuisines: ["Biryani", "Hyderabadi", "North Indian", "Kebabs"],
      avgRating: 4.6,
      totalRatingsString: "8K+ ratings",
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
      costForTwo: "₹500 for two",
      cuisines: ["Pizzas", "Pastas", "Garlic Bread", "Desserts"],
      avgRating: 4.1,
      totalRatingsString: "4K+ ratings",
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
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Sweets", "Chaat", "Thalis", "South Indian"],
      avgRating: 4.5,
      totalRatingsString: "18K+ ratings",
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
      costForTwo: "₹250 for two",
      cuisines: ["Tea", "Beverages", "Fast Food", "Snacks"],
      avgRating: 4.3,
      totalRatingsString: "3K+ ratings",
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
      costForTwo: "₹450 for two",
      cuisines: ["Bakery", "Desserts", "Cakes", "Pastries"],
      avgRating: 4.7,
      totalRatingsString: "9K+ ratings",
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

// Mock menus for restaurants
const mockMenus = {
  "41350": {
    restaurant: {
      id: "41350",
      name: "Burger King",
      cuisines: ["Burgers", "American", "Fast Food", "Beverages"],
      areaName: "Sector 35",
      avgRating: 4.4,
      totalRatings: "10K+",
      costForTwoMessage: "₹350 for two",
      sla: { slaString: "20-25 mins", lastMileTravelString: "2.1 km" }
    },
    categories: [
      {
        title: "Whopper Specials",
        itemCards: [
          {
            card: {
              info: {
                id: "bk-101",
                name: "Crispy Veg Double Patty Whopper",
                price: 19900,
                description: "Our signature double crispy veg patty loaded with fresh lettuce, onions, and creamy mayo on a sesame bun.",
                imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/4f9bb48e-82df-474b-8d71-cb12703bba30_772030.JPG",
                isVeg: 1,
                rating: 4.5,
                ratingCount: 1240
              }
            }
          },
          {
            card: {
              info: {
                id: "bk-102",
                name: "Fiery Chicken Whopper",
                price: 24900,
                description: "Flame grilled spiced chicken patty with crunchy lettuce, jalapenos and fiery habanero sauce.",
                imageId: "euwwcssmiewn2cpq7xww",
                isVeg: 0,
                rating: 4.6,
                ratingCount: 2310
              }
            }
          }
        ]
      },
      {
        title: "Sides & Beverages",
        itemCards: [
          {
            card: {
              info: {
                id: "bk-103",
                name: "King Peri Peri Fries",
                price: 11900,
                description: "Golden crispy fries sprinkled with zesty peri-peri seasoning.",
                imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/07492503-274f-4ecc-ba27-733c59f4d540_41350.jpg",
                isVeg: 1,
                rating: 4.3,
                ratingCount: 890
              }
            }
          },
          {
            card: {
              info: {
                id: "bk-104",
                name: "Thick Chocolate Shake",
                price: 14900,
                description: "Rich velvety cocoa blended thick with chilled milk and chocolate drizzle.",
                imageId: "e1a0833bdc40ad1f6fe3185f102c9382",
                isVeg: 1,
                rating: 4.7,
                ratingCount: 650
              }
            }
          }
        ]
      }
    ]
  },
  "621845": {
    restaurant: {
      id: "621845",
      name: "Domino's Pizza",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      areaName: "Sector 22",
      avgRating: 4.6,
      totalRatings: "12K+",
      costForTwoMessage: "₹400 for two",
      sla: { slaString: "20-25 mins", lastMileTravelString: "1.8 km" }
    },
    categories: [
      {
        title: "Bestseller Pizzas",
        itemCards: [
          {
            card: {
              info: {
                id: "dom-201",
                name: "Farmhouse Cheesy Burst",
                price: 38900,
                description: "Delightful combination of onion, capsicum, tomato & grilled mushroom with molten liquid cheese crust.",
                imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/bf94e09e-c199-427c-84ef-248d46a43e86_1043746.jpg",
                isVeg: 1,
                rating: 4.8,
                ratingCount: 3400
              }
            }
          },
          {
            card: {
              info: {
                id: "dom-202",
                name: "Peppy Paneer Pizza",
                price: 34900,
                description: "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika.",
                imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/bf94e09e-c199-427c-84ef-248d46a43e86_1043746.jpg",
                isVeg: 1,
                rating: 4.6,
                ratingCount: 1980
              }
            }
          }
        ]
      },
      {
        title: "Garlic Breads & Desserts",
        itemCards: [
          {
            card: {
              info: {
                id: "dom-203",
                name: "Stuffed Garlic Bread",
                price: 15900,
                description: "Freshly baked garlic breadsticks filled with creamy mozzarella cheese and sweet corn.",
                imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/bf94e09e-c199-427c-84ef-248d46a43e86_1043746.jpg",
                isVeg: 1,
                rating: 4.7,
                ratingCount: 2200
              }
            }
          },
          {
            card: {
              info: {
                id: "dom-204",
                name: "Choco Lava Cake",
                price: 10900,
                description: "Warm chocolate cake with a molten chocolate center that oozes with every bite.",
                imageId: "e1a0833bdc40ad1f6fe3185f102c9382",
                isVeg: 1,
                rating: 4.9,
                ratingCount: 4100
              }
            }
          }
        ]
      }
    ]
  }
};

// Generic fallback menu creator for any restaurant ID
function generateFallbackMenu(resId) {
  const matched = mockRestaurants.find(r => r.info.id === resId);
  const info = matched ? matched.info : {
    id: resId,
    name: "Swiggy Select Kitchen",
    cuisines: ["North Indian", "Biryani", "Fast Food"],
    areaName: "Sector 17, Chandigarh",
    avgRating: 4.3,
    totalRatings: "5K+",
    costForTwoMessage: "₹400 for two",
    sla: { slaString: "25-30 mins", lastMileTravelString: "2.5 km" }
  };

  return {
    restaurant: {
      id: info.id,
      name: info.name,
      cuisines: info.cuisines || ["Fast Food"],
      areaName: info.areaName || "City Center",
      avgRating: info.avgRating || 4.2,
      totalRatings: info.totalRatingsString || "5K+",
      costForTwoMessage: info.costForTwo || "₹400 for two",
      sla: info.sla || { slaString: "25-30 mins", lastMileTravelString: "2.5 km" }
    },
    categories: [
      {
        title: "Recommended",
        itemCards: [
          {
            card: {
              info: {
                id: `${info.id}-1`,
                name: `Special ${info.name} Combo Meal`,
                price: 29900,
                description: "Curated chef selection with gourmet main course, savory sides, and dipping sauces.",
                imageId: info.cloudinaryImageId,
                isVeg: info.veg ? 1 : 0,
                rating: info.avgRating || 4.5,
                ratingCount: 1540
              }
            }
          },
          {
            card: {
              info: {
                id: `${info.id}-2`,
                name: "Crispy Gourmet Platter",
                price: 21900,
                description: "Crisp golden bites served with signature spiced seasoning and herb aioli.",
                imageId: "euwwcssmiewn2cpq7xww",
                isVeg: 1,
                rating: 4.4,
                ratingCount: 890
              }
            }
          }
        ]
      },
      {
        title: "Main Course & Specialties",
        itemCards: [
          {
            card: {
              info: {
                id: `${info.id}-3`,
                name: "Royal Feast Box",
                price: 34900,
                description: "Generous portion prepared fresh with aromatic spices, fresh herbs, and served warm.",
                imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                isVeg: 0,
                rating: 4.6,
                ratingCount: 1120
              }
            }
          },
          {
            card: {
              info: {
                id: `${info.id}-4`,
                name: "Refreshing Artisan Drink",
                price: 9900,
                description: "Chilled zesty beverage with crushed mint and citrus splash.",
                imageId: "e1a0833bdc40ad1f6fe3185f102c9382",
                isVeg: 1,
                rating: 4.2,
                ratingCount: 430
              }
            }
          }
        ]
      }
    ]
  };
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    proxyActive: true,
    corsProtection: 'enabled',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// GET /api/restaurants?lat=...&lng=...
app.get('/api/restaurants', async (req, res) => {
  const lat = req.query.lat || '30.73390';
  const lng = req.query.lng || '76.78890';

  const swiggyUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(swiggyUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.swiggy.com/'
      }
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data?.data?.cards && data.data.cards.length > 0) {
        console.log(`[CORS Proxy] Successfully fetched live Swiggy data for lat=${lat}, lng=${lng}`);
        return res.json({
          source: 'swiggy-live-proxy',
          status: 'success',
          data: data.data
        });
      }
    }
  } catch (err) {
    console.log(`[CORS Proxy] Swiggy live fetch failed or timed out (${err.message}). Serving seamless fallback data.`);
  }

  // Seamless fallback structure matching Swiggy dapi schema
  return res.json({
    source: 'fallback-cache',
    status: 'success',
    data: {
      cards: [
        {
          card: {
            card: {
              gridElements: {
                infoWithStyle: {
                  restaurants: mockRestaurants
                }
              }
            }
          }
        }
      ]
    }
  });
});

// GET /api/menu/:id
app.get('/api/menu/:id', async (req, res) => {
  const { id } = req.params;
  const lat = req.query.lat || '30.73390';
  const lng = req.query.lng || '76.78890';

  const swiggyMenuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const response = await fetch(swiggyMenuUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://www.swiggy.com/'
      }
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data?.data) {
        console.log(`[CORS Proxy] Successfully fetched live Swiggy menu for id=${id}`);
        return res.json({
          source: 'swiggy-live-proxy',
          status: 'success',
          data: data.data
        });
      }
    }
  } catch (err) {
    console.log(`[CORS Proxy] Live menu fetch error: ${err.message}. Providing structured menu fallback.`);
  }

  // Provide mock menu
  const menuData = mockMenus[id] || generateFallbackMenu(id);
  return res.json({
    source: 'fallback-cache',
    status: 'success',
    data: menuData
  });
});

// GET /api/nearby
app.get('/api/nearby', (req, res) => {
  const lat = parseFloat(req.query.lat) || 30.73390;
  const lng = parseFloat(req.query.lng) || 76.78890;

  // Simple haversine distance in km
  function getDistanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return parseFloat((R * c).toFixed(2));
  }

  const nearby = mockRestaurants.map(r => {
    const distanceKm = getDistanceKm(lat, lng, r.info.lat, r.info.lng);
    return {
      ...r,
      info: {
        ...r.info,
        calculatedDistanceKm: distanceKm
      }
    };
  }).sort((a, b) => a.info.calculatedDistanceKm - b.info.calculatedDistanceKm);

  res.json({
    center: { lat, lng },
    total: nearby.length,
    restaurants: nearby
  });
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Swiggy Proxy Backend running on http://localhost:${PORT}`);
  console.log(`🛡️  CORS is prevented for all requests`);
  console.log(`📍 Endpoints:`);
  console.log(`   - GET /api/health`);
  console.log(`   - GET /api/restaurants?lat=...&lng=...`);
  console.log(`   - GET /api/menu/:id`);
  console.log(`   - GET /api/nearby?lat=...&lng=...`);
  console.log(`=======================================================`);
});
