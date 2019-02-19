import api from "../../services/api";

export const fetchOrders = () => dispatch => {
  api.get("/orders").then(res =>
    dispatch({
      type: "ORDERS_LOADED",
      payload: res.data
    })
  );
};
