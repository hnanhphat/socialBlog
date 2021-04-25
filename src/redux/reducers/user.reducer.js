const initialState = {
  currentUser: {},
  loading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GETUSER_REQUEST_START":
      state.loading = true;
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
