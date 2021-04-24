import noImg from "../img/no-image.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BlogActions } from "../redux/actions/blog.action";
import SideBar from "../components/SideBar";
import Moment from "react-moment";

const HomePage = () => {
  let dispatch = useDispatch();
  const blogList = useSelector((state) => state.blog.blogs.data);
  console.log(blogList);

  useEffect(() => {
    dispatch(BlogActions.getBlog());
  }, [dispatch]);

  return (
    <div id="wrap">
      <main>
        <section className="first-view first-view--10">
          <div className="container">
            <div className="first-view__quote">
              <h2 className="title">
                We are not human beings having a spiritual experience. We are
                spiritual beings having a human experience.
              </h2>
              <h4 className="author">Pierre Teilhard de Chardin</h4>
              <Link to="/" className="first-view__btn not-hover">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                See posts
              </Link>
            </div>
          </div>
        </section>
        <section className="main-content">
          <div className="container container--small">
            <div className="blogs">
              <ul className="blogs__list">
                {blogList &&
                  blogList.data.blogs.map((blog) => (
                    <li key={blog._id}>
                      <Link to="/" className="not-hover">
                        <div className="author">
                          <div className="author__avatar author__avatar--no-img"></div>
                          <div className="author__username">
                            {blog.author.name}
                          </div>
                        </div>
                        <div className="img">
                          {blog.images.length ? (
                            <div className="img__item">
                              <img src={blog.images[0]} alt={blog.title} />
                            </div>
                          ) : (
                            <div className="img__item img__item--no-img">
                              <img src={noImg} alt={blog.title} />
                            </div>
                          )}
                        </div>
                        <div className="info">
                          <div className="info__icon"></div>
                          <div className="info__content">
                            <div className="title">
                              <strong>{blog.author.name}</strong>
                              <span>{blog.title}</span>
                            </div>
                            <div className="des">{blog.content}</div>
                            <div className="time">
                              <Moment fromNow>{blog.createdAt}</Moment>
                            </div>
                          </div>
                        </div>
                        <div className="post"></div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <SideBar />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
