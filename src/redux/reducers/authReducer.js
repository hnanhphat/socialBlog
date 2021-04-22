const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  return { ...state };
};

export default authReducer;
