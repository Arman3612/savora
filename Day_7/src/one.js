import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import { CartProvider } from "./utils/CartContext";

const AppLayout = () => {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);