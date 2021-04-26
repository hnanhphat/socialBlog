import api from "../../apiService";

const sendRequest = (id) => async (dispatch) => {
  try {
    dispatch({ type: "SEND_REQUEST_START" });
    const data = await api.post(`/friends/add/${id}`);
    console.log(data);
    dispatch({ friendstype: "SEND_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "SEND_REQUEST_FAIL", payload: error.message });
  }
};

const cancelRequest = (id) => async (dispatch) => {
  try {
    dispatch({ type: "CANCEL_REQUEST_START" });
    const data = await api.delete(`/friends/add/${id}`);
    dispatch({ friendstype: "CANCEL_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "CANCEL_REQUEST_FAIL", payload: error.message });
  }
};

const receivedRequest = () => async (dispatch) => {
  try {
    dispatch({ type: "RECEIVED_REQUEST_START" });
    const data = await api.get(`/friends/manage`);
    dispatch({ type: "RECEIVED_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "RECEIVED_REQUEST_FAIL", payload: error.message });
    console.log(error.message);
  }
};

const acceptRequest = (id) => async (dispatch) => {
  try {
    dispatch({ type: "ACCEPT_REQUEST_START" });
    const data = await api.post(`/friends/manage/${id}`);
    dispatch({ type: "ACCEPT_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "ACCEPT_REQUEST_FAIL", payload: error.message });
    console.log(error.message);
  }
};

const declineRequest = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DECLINE_REQUEST_START" });
    const data = await api.delete(`/friends/manage/${id}`);
    dispatch({ type: "DECLINE_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "DECLINE_REQUEST_FAIL", payload: error.message });
    console.log(error.message);
  }
};

export const friendActions = {
  sendRequest,
  cancelRequest,
  receivedRequest,
  acceptRequest,
  declineRequest,
};
