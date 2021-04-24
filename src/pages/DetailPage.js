import noImg from "../img/no-image.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { BlogActions } from "../redux/actions/blog.action";
import Moment from "react-moment";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleBlog = useSelector((state) => state.blog.singleBlog.data);
  console.log(singleBlog);

  // const [update, Setupdate] = useState({});
  // const checklogin = localStorage.getItem("accessToken");
  // const [content, setContent] = useState({ content: "" });

  // const listReview = useSelector((state) => state.auth.comment.data);
  // const ContentReview = useSelector((state) => state.auth.singleBlog.data);

  // const handleChange = (e) => {
  //   setContent({ ...content, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(BlogActions.writeReview({ content }, id));
  //   dispatch(BlogActions.getSingleBlog(id));
  //   Setupdate({ ...content });
  //   e.target.reset();
  // };

  useEffect(() => {
    dispatch(BlogActions.getSingleBlog(id));
    // dispatch(BlogActions.getListReview(id));
  }, []);

  return (
    <div id="blog-detail" className="blog-detail">
      <div className="container container--small">
        <div className="blog-detail__img">
          {singleBlog && singleBlog.data.images.length ? (
            <div className="img__item">
              <img
                src={singleBlog && singleBlog.data.images[0]}
                alt={singleBlog && singleBlog.data.title}
              />
            </div>
          ) : (
            <div className="img__item img__item--no-img">
              <img src={noImg} alt={singleBlog && singleBlog.data.title} />
            </div>
          )}
        </div>
        <div className="blog-detail__content">
          <div className="author">
            <div className="author__avatar"></div>
            <div className="author__username"></div>
          </div>
          <div className="histories"></div>
          <div className="reactions"></div>
          <div className="comments"></div>
        </div>

        <h3>{singleBlog && singleBlog.data.title}</h3>
        <hr />
        <div>
          @{singleBlog && singleBlog.data.author.name}
          <Moment fromNow>
            {singleBlog && singleBlog.data.author.createdAt}
          </Moment>
        </div>
        <div>{singleBlog && singleBlog.data.content}</div>
      </div>
    </div>
  );
};

export default DetailPage;
