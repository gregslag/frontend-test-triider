import api from "../../services/api";
import { orders } from "../../data/orders";

export const fetchOrders = () => dispatch => {
  api
    .get("/orders")
    .then(res =>
      dispatch({
        type: "ORDERS_LOADED",
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err);
      return dispatch({
        type: "ORDERS_LOADED",
        payload: orders
      });
    });
};
