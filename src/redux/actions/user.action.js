import api from "../../apiService";

const getCurrentUser = () => async (dispatch) => {
  try {
    dispatch({ type: "CURRENTUSER_REQUEST_START", payload: null });
    const data = await api.get("/users/me");
    dispatch({ type: "CURRENTUSER_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "CURRENTUSER_REQUEST_FAIL", payload: error.message });
  }
};

export const userActions = { getCurrentUser };
