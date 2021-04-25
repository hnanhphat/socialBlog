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
  const imgHeight = document.getElementById("img-item");
  console.log(singleBlog);

  // const checkLogin = localStorage.getItem("accessToken");
  const [update, setUpdate] = useState({});
  const [content, setContent] = useState({ content: "" });

  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(BlogActions.postReview({ content }, id));
    dispatch(BlogActions.getSingleBlog(id));
    setUpdate({ ...content });
    e.target.reset();
  };

  useEffect(() => {
    dispatch(BlogActions.getSingleBlog(id));
    dispatch(BlogActions.getReviews(id));
  }, [id, dispatch, imgHeight, update]);

  return (
    <div id="blog-detail" className="blog-detail">
      <div className="container container--small">
        <div className="blog-detail__img">
          {singleBlog && singleBlog.data.images.length ? (
            <div id="img-item" className="img__item">
              <img
                src={singleBlog && singleBlog.data.images[0]}
                alt={singleBlog && singleBlog.data.title}
              />
            </div>
          ) : (
            <div id="img-item" className="img__item img__item--no-img">
              <img src={noImg} alt={singleBlog && singleBlog.data.title} />
            </div>
          )}
        </div>
        <div
          className="blog-detail__content"
          style={{ height: imgHeight && imgHeight.clientHeight }}
        >
          <div className="author">
            {singleBlog && singleBlog.data.author.avatarUrl ? (
              <div
                className="author__avatar"
                style={{
                  backgroundImage: `url('${
                    singleBlog && singleBlog.data.author.avatarUrl
                  }')`,
                }}
              ></div>
            ) : (
              <div
                className="author__avatar"
                style={{ backgroundImage: `url('${noImg}')` }}
              ></div>
            )}
            <h3 className="author__username">
              {singleBlog && singleBlog.data.author.name}
            </h3>
          </div>
          <ul className="histories">
            {singleBlog &&
              singleBlog.data.reviews.map((review) => (
                <li key={review._id}>
                  {review.user.avatarUrl ? (
                    <div
                      className="avatar"
                      style={{
                        backgroundImage: `url('${review.user.avatarUrl}')`,
                      }}
                    ></div>
                  ) : (
                    <div
                      className="avatar"
                      style={{ backgroundImage: `url('${noImg}')` }}
                    ></div>
                  )}
                  <div className="comment">
                    <strong>{review.user.name}</strong>
                    <span>{review.content}</span>
                  </div>
                </li>
              ))}
          </ul>
          <div className="reactions">
            <p className="num">
              {singleBlog && singleBlog.data.reviewCount} Comments
            </p>
            <p className="time">
              <Moment fromNow>
                {singleBlog && singleBlog.data.author.createdAt}
              </Moment>
            </p>
          </div>
          <div className="comments">
            <form onSubmit={handleSubmit}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="smile"
                className="svg-inline--fa fa-smile fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
                ></path>
              </svg>
              <input
                type="text"
                name="content"
                placeholder="Add a comment…"
                onChange={handleChange}
              />
              <button type="submit">Post</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
