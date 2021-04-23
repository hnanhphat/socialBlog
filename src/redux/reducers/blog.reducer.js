const initialState = {
  blogs: [],
  loading: true,
  error: "",
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "BLOG_REQUEST_START":
      state.loading = true;
      break;
    case "BLOG_REQUEST_SUCCESS":
      state.blogs = payload;
      state.loading = false;
      break;
    case "BLOG_REQUEST_FAIL":
      state.error = payload;
      state.loading = true;
      break;
  }
  return { ...state };
};

export default blogReducer;
