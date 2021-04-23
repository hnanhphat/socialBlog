const initialState = {};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  return { ...state };
};

export default authReducer;
