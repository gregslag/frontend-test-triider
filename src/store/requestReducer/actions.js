import api from "../../services/api";

export const fetchRequests = () => dispatch => {
  api.get("/orders").then(res =>
    dispatch({
      type: "REQUESTS_LOADED",
      payload: res.data
    })
  );
};
