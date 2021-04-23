const initialState = {
  loading: false,
};

const authReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "LOGIN_REQUEST_START":
    case "REGISTER_REQUEST_START":
      state.loading = true;
      break;
    case "LOGIN_REQUEST_SUCCESS":
      state.loading = false;
      state.isAuth = true;
      console.log("success!!!");
      break;
    case "LOGIN_REQUEST_FAIL":
      state.loading = false;
      // set the error message
      break;
    case "REGISTER_REQUEST_SUCCESS":
      state.loading = false;
      console.log("success!!!");
      break;
    case "REGISTER_REQUEST_FAIL":
      state.loading = false;
      // set the error message
      break;
    default:
      break;
  }
  return { ...state };
};

export default authReducer;
