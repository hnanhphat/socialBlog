const initialState = {
  currentUser: {},
  loading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "EDITUSER_REQUEST_START":
    case "GETUSER_REQUEST_START":
      state.loading = true;
      break;
    case "EDITUSER_REQUEST_SUCCESS":
      state.loading = false;
      state.currentUser = payload;
      break;
    case "GETUSER_REQUEST_FAIL":
      state.error = payload;
      state.loading = false;
      break;
    case "GETUSER_REQUEST_SUCCESS":
      state.currentUser = payload;
      state.loading = false;
      break;
    default:
      break;
  }
  return { ...state };
};

export default userReducer;
