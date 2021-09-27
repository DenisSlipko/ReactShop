import { getByDisplayValue } from "@testing-library/react";
import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();
const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };
  value.removeFromBasket = (itemId) => {
    // eslint-disable-next-line no-undef
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  };
  value.addToBasket = (item) => {
    // eslint-disable-next-line no-undef
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };
  value.incQuantity = (itemId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: itemId } });
  };
  value.decQuantity = (itemId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id: itemId } });
  };
  value.handleBasketShow = () => {
    dispatch({ type: "HANDLE_BASKET_SHOW" });
  };
  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
