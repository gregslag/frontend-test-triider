export default (state = {}, action) => {
  switch (action.type) {
    case "ORDERS_LOADED":
      return {
        ...state,
        orders: {
          open: action.payload.filter(
            r => r.status === "" || r.status === "contratado"
          ),
          completed: action.payload.filter(r => r.status === "finalizado"),
          canceled: action.payload.filter(r => r.status === "cancelado")
        }
      };
    default:
      return state;
  }
};
