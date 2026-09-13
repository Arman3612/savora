// SAVORA Brand Assets
import savoraLogoImg from "url:../../Logo/Gemini_Generated_Image_iydj64iydj64iydj (1).png";
import savoraPromoVideo from "url:../../Video/SAVORA_delivery_promotional_video_1080p_20260912224858.mp4";
import photo1 from "url:../../photos/1.png";
import photo2 from "url:../../photos/2.png";
import photo3 from "url:../../photos/3.png";
import photo4 from "url:../../photos/4.png";
import photo5 from "url:../../photos/5.png";
import photo6 from "url:../../photos/6.png";

// Brand Identity
export const BRAND_NAME = "SAVORA";
export const BRAND_TAGLINE = "FRESH. FAST. DELIVERED.";
export const Logo_URL = savoraLogoImg;
export const PROMO_VIDEO_URL = savoraPromoVideo;

// SAVORA 6-Stage Culinary Journey Photos
export const SAVORA_PHOTOS = [
  { id: 1, src: photo1, title: "Master Chef Plating", desc: "Artisanal preparation with organic herbs & gourmet ingredients" },
  { id: 2, src: photo2, title: "Thermal Insulated Pack", desc: "Sealed hot in signature SAVORA temperature-lock carrier" },
  { id: 3, src: photo3, title: "Fast Dispatch Handover", desc: "Priority handover to dedicated white-glove courier" },
  { id: 4, src: photo4, title: "Express City Transit", desc: "Rapid eco-transit guaranteeing under 25-minute delivery" },
  { id: 5, src: photo5, title: "VIP Doorstep Arrival", desc: "Delivered fresh & warm with polite contactless courtesy" },
  { id: 6, src: photo6, title: "The Royal Dining Feast", desc: "Steaming hot luxury dining in the comfort of your home" }
];

// Swiggy Media CDN for menu items
export const CDN = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const CDN_SMALL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

// Backend Proxy Base URL (eliminates CORS)
export const BACKEND_BASE_URL = "http://localhost:5000/api";

// Fallback high-res culinary images (Unsplash) to guarantee zero broken image icons
export const FALLBACK_IMAGES = {
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
  biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80",
  dessert: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80",
  healthy: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
  tea: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80",
  default: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80"
};

// Helper to get reliable restaurant image
export const getImageSrc = (imageId, category = "default") => {
  if (!imageId) return FALLBACK_IMAGES[category] || FALLBACK_IMAGES.default;
  if (imageId.startsWith("http")) return imageId;
  return `${CDN}${imageId}`;
};

// Gourmet food categories for luxury carousel
export const FOOD_CATEGORIES = [
  {
    id: "cat-1",
    name: "Royal Biryani",
    subtitle: "Slow Dum Cooked",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "cat-2",
    name: "Artisan Pizzas",
    subtitle: "Wood-Fired Crust",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "cat-3",
    name: "Gourmet Burgers",
    subtitle: "Brioche & Truffle",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "cat-4",
    name: "Awadhi & North Indian",
    subtitle: "Rich Gravies & Kebabs",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "cat-5",
    name: "Handcrafted Desserts",
    subtitle: "Belgian Chocolate & Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "cat-6",
    name: "Pan Asian Wok",
    subtitle: "Dim Sum & Noodles",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "cat-7",
    name: "Organic Wellness Bowls",
    subtitle: "Farm-to-Bowl Nutrition",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "cat-8",
    name: "Artisan Coffee & Chai",
    subtitle: "Single Origin Brews",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300&auto=format&fit=crop&q=80"
  }
];

// Default City & Map Coordinates (Sector 17, Chandigarh)
export const DEFAULT_LOCATION = {
  name: "Sector 17, Chandigarh",
  lat: 30.7339,
  lng: 76.7889
};
