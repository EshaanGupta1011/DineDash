import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  // Ensure `cartItems` and `id` are defined
  const cartQuantity = cartItems?.[id] || 0;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-img"
          src={`${url}/images/${image}`}
          alt={name}
        />
        {!cartQuantity ? (
          <img
            className="add"
            onClick={() => addToCart(id)} // Corrected the call here
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p>{cartQuantity}</p> {/* Display the correct quantity */}
            <img
              onClick={() => addToCart(id)} // Removed the array brackets
              src={assets.add_icon_green}
              alt="Increase quantity"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
