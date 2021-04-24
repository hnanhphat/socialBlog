import api from "../../apiService";

const getBlog = () => async (dispatch) => {
  try {
    dispatch({ type: "BLOG_REQUEST_START" });
    const data = await api.get("/blogs?page=1&limit=10");
    dispatch({ type: "BLOG_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "BLOG_REQUEST_FAIL", payload: error.message });
  }
};

const getSingleBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: "SINGLEBLOG_REQUEST_START" });
    const res = await api.get(`/blogs/${id}`);
    console.log("get data done");
    dispatch({ type: "SINGLEBLOG_REQUEST_SUCCESS", payload: res });
  } catch (error) {
    dispatch({ type: "SINGLEBLOG_REQUEST_FAIL", payload: error.message });
  }
};

export const BlogActions = { getBlog, getSingleBlog };
