export default (state = {}, action) => {
  switch (action.type) {
    case "ORDERS_LOADED":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
