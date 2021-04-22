const initialState = {
  blogList: [],
  loading: false,
  selectedJob: null,
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  return { ...state };
};

export default blogReducer;
