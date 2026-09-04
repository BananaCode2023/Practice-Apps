import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Projects/Components/Header";
import { HomePage } from "./Projects/HomePage";
import { Counter } from "./Projects/Project-1-Counter/Counter";
import { TodoList } from "./Projects/Project-2-TodoList/TodoList";
import { ProductSearch } from "./Projects/Project-3-ProductSearch/ProductSearch";
import { RealEstate } from "./Projects/Project-4-RealEstate/RealEstate";
import { UserProfiles } from "./Projects/Project-5-UserProfiles/UserProfiles";
import { MarketPlace } from "./Projects/Project-6-MarketPlace/MarketPlace";
import { UserProfilePanel } from "./Projects/Project-5-UserProfiles/UserProfilePanel";
import { useState, useEffect } from "react";
import { MarketPlacePanel } from "./Projects/Project-6-MarketPlace/MarketPlacePanel";
import { MarketPlaceHeader } from "./Projects/Project-6-MarketPlace/MarketPlaceHeader";
import { Cart } from "./Projects/Project-6-MarketPlace/Cart";

function App() {
  const [clickedUserId, setClickedUserId] = useState(null);

  const [cartUpdate, setCartUpdate] = useState(0);

  const addToCart = (product, quantity) => {
    if (!product) {
      return;
    }

    const cartItems = JSON.parse(localStorage.getItem("items")) || [];

    const existingItem = cartItems.find(
      (item) => item.productId === product.id,
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({
        productId: product.id,
        productName: product.title,
        productImg: product.image,
        price: product.price,
        quantity: quantity || 1,
      });
    }

    localStorage.setItem("items", JSON.stringify(cartItems));

    setCartUpdate((prev) => prev + 1);
  };

  const currentCart = JSON.parse(localStorage.getItem("items")) || [];

  const removeFromCart = (productId) => {
    const cartItems = JSON.parse(localStorage.getItem("items")) || [];

    const updatedCart = cartItems.filter(
      (item) => item.productId !== productId,
    );

    localStorage.setItem("items", JSON.stringify(updatedCart));

    setCartUpdate((prev) => prev + 1);
  };

  const updateQuantity = (productId, newQuantity) => {
    const cartItems = JSON.parse(localStorage.getItem("items")) || [];

    const updatedCart = cartItems.map((item) => {
      if (item.productId === productId) {
        return {
          ...item,
          quantity: Number(newQuantity),
        };
      }

      return item;
    });

    localStorage.setItem("items", JSON.stringify(updatedCart));

    setCartUpdate((prev) => prev + 1);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/productsearch" element={<ProductSearch />} />
        <Route path="/realestate" element={<RealEstate />} />
        <Route
          path="/userprofiles"
          element={
            <UserProfiles
              clickedUserId={clickedUserId}
              setClickedUserId={setClickedUserId}
            />
          }
        />
        <Route path="/userprofiles/:id" element={<UserProfilePanel />} />
        <Route
          path="/marketplace"
          element={
            <div className="marketplace">
              <MarketPlaceHeader currentCart={currentCart} />
              <MarketPlace addToCart={addToCart} />
            </div>
          }
        />
        <Route
          path="/marketplace/:id"
          element={
            <div className="marketplace">
              <MarketPlaceHeader currentCart={currentCart} />
              <MarketPlacePanel addToCart={addToCart}/>
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <div className="marketplace">
              <MarketPlaceHeader currentCart={currentCart} />
              <Cart
                currentCart={currentCart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
