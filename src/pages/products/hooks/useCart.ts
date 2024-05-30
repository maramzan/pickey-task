import { useDispatch, useSelector } from "react-redux";
import { ICartItem, ICartState, IProduct } from "../../../types";
import {
  addToCart,
  removeFromCart,
  clearCart,
} from "../../../store/slices/cartSlice";
import { useState } from "react";

const useCart = () => {
  const dispatch = useDispatch();
  const [openCart, setOpenCart] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const handleShowMessage = (message: string) => {
    setMessage(message);
    setShowMessage(true);
  };

  const handleHideMessage = () => {
    setShowMessage(false);
  };

  const handleCartClose = () => {
    setOpenCart(false);
  };

  const handleCartOpen = () => {
    setOpenCart(true);
  };

  const { cartItems, totalPrice } = useSelector(
    (state: { cartState: ICartState }) => state.cartState
  );

  const handleAddToCart = (product: IProduct) => {
    const cartItem: ICartItem = {
      ...product,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  const handleRemoveCartItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    handleCartClose();
    handleShowMessage("Your Order has been placed successfully");
  };

  return {
    handleAddToCart,
    cartItems,
    handleCartClose,
    handleCartOpen,
    openCart,
    totalPrice,
    handleRemoveCartItem,
    handleClearCart,
    showMessage,
    handleHideMessage,
    handleShowMessage,
    message,
  };
};

export default useCart;
