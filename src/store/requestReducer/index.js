export default (state = {}, action) => {
  switch (action.type) {
    case "REQUESTS_LOADED":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
