const initialState = {
  friends: [],
  error: "",
  loading: false,
  received: [],
};

const friendsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CANCEL_REQUEST_START":
    case "FRIENDS_REQUEST_START":
    case "RECEIVED_REQUEST_START":
    case "ACCEPT_REQUEST_START":
    case "DECLINE_REQUEST_START":
      state.loading = true;
      break;
    case "FRIENDS_REQUEST_FAIL":
    case "CANCEL_REQUEST_FAIL":
    case "RECEIVED_REQUEST_FAIL":
    case "ACCEPT_REQUEST_FAIL":
    case "DECLINE_REQUEST_FAIL":
      state.error = payload;
      state.loading = false;
      break;
    case "FRIENDS_REQUEST_SUCCESS":
    case "CANCEL_REQUEST_SUCCESS":
    case "ACCEPT_REQUEST_SUCCESS":
    case "DECLINE_REQUEST_SUCCESS":
      state.loading = false;
      break;
    case "RECEIVED_REQUEST_SUCCESS":
      state.received = payload;
      state.loading = false;
      break;
    default:
      break;
  }

  return { ...state };
};

export default friendsReducer;
