import api from "../store/api";
const getBlog = () => async (dispatch) => {
  try {
    dispatch({ type: "BLOG_REQUEST_START" });
    const data = await api.get("/blogs?page=1&limit=10");
    console.log("get data done");
    console.log(data.data.data.blogs);
    dispatch({ type: "BLOG_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "BLOG_REQUEST_FAIL", payload: error.message });
  }
};
export const BlogActions = { getBlog };
