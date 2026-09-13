# SAVORA — Haute Cuisine & Express Logistics ⚜️

> **Fresh. Fast. Delivered.**
> Artisanal gastronomic dining sealed hot in thermal locks and delivered with royal precision in under 25 minutes.

---

## ✨ Features

- **Haute Cuisine Design System**: Tailored luxury obsidian-and-gold aesthetic with custom typography (`Playfair Display`, `Outfit`, `Inter`).
- **Cinematic Hero Showcase**: 1080p promotional video autoplay with seamless transition to a 1-second 6-stage culinary sequence (`Master Chef Plating` $\rightarrow$ `Thermal Seal` $\rightarrow$ `Priority Dispatch` $\rightarrow$ `Express Transit` $\rightarrow$ `VIP Arrival` $\rightarrow$ `Royal Dining Feast`).
- **Interactive Live Map & GPS**: Real-time Leaflet & OpenStreetMap integration with interactive pins, radius popups, and *"Locate Near Me"* GPS geolocation.
- **Search & Filter Suite**: Instant search with category carousels (Biryani, Artisan Pizzas, Gourmet Burgers, etc.), top-rated (4.3+), express delivery (<25m), and pure veg filters.
- **Dynamic Restaurant Menus & Cart**: Categorized dishes, real-time quantity controls, and floating checkout bar.
- **VIP Cart & Privilege Checkout**: Real-time billing calculations, coupon code discount engine (`SAVORA50`), and payment preference selector.
- **Dual-Layer Resilience**: Live backend proxy (`/api/restaurants`, `/api/menu/:id`) with automatic fallback to high-fidelity mock datasets when offline.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Frontend Application
```bash
npm run day7
```
*Access the app at `http://localhost:1234` or the assigned dev port.*

### 3. Run the Backend Proxy (Optional for Live API Data)
```bash
npm run server
```
*Running on `http://localhost:5000` with full CORS protection.*

### 4. Production Build
```bash
npm run build
```

---

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM 6, Parcel Bundler
- **Styling**: Vanilla CSS3 (Custom Glassmorphism, CSS Grid, Flexbox, Animations)
- **Maps**: Leaflet.js & OpenStreetMap
- **Backend (Proxy)**: Node.js, Express, CORS
- **State Management**: React Context API (`CartContext`)

---

## 📄 License
ISC License © SAVORA Inc.
