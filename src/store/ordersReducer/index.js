export default (state = { orders: [] }, action) => {
  switch (action.type) {
    case "ORDERS_LOADED":
      return {
        ...state,
        orders: action.payload
      };
    default:
      return state;
  }
};
