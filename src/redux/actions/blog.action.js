import api from "../../apiService";
import { routeActions } from "./route.action";

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
    dispatch({ type: "SINGLEBLOG_REQUEST_SUCCESS", payload: res });
  } catch (error) {
    dispatch({ type: "SINGLEBLOG_REQUEST_FAIL", payload: error.message });
  }
};

const getReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: "REVIEWS_REQUEST_START", payload: null });
    const reslist = await api.get(`/reviews/blogs/${id}`);
    dispatch({ type: "REVIEWS_REQUEST_SUCCESS", payload: reslist });
  } catch (error) {
    dispatch({ type: "REVIEWS_REQUEST_FAIL", payload: null });
    console.log(error.message);
  }
};

const postReview = ({ content }, id) => async (dispatch) => {
  try {
    dispatch({ type: "WRITEREVIEW_REQUEST_START", payload: null });
    const res = await api.post(`/reviews/blogs/${id}`, content);
    console.log(res);
    dispatch({ type: "WRITEREVIEW_REQUEST_SUCCESS", payload: null });
  } catch (error) {
    dispatch({ type: "WRITEREVIEW_REQUEST_FAIL", payload: null });
    console.log(error.message);
  }
};

const createBlog = (data) => async (dispatch) => {
  try {
    dispatch({ type: "CREATEBLOG_REQUEST_START", payload: null });
    const res = await api.post(`/blogs`, data);
    console.log(res);
    dispatch(routeActions.redirect("/"));
    dispatch({ type: "CREATEBLOG_REQUEST_SUCCESS", payload: null });
  } catch (error) {
    dispatch({ type: "CREATEBLOG_REQUEST_FAIL", payload: null });
    console.log(error.message);
  }
};

export const BlogActions = {
  getBlog,
  getSingleBlog,
  getReviews,
  postReview,
  createBlog,
};
