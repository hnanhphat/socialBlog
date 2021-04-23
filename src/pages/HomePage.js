import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { BlogActions } from "../redux/actions/blog.action";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  const blogList = useSelector((state) => state);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(BlogActions.getBlog());
  }, []);
  return (
    <div className="home">
      <div className="hearder-home">
        <h2>CoderSchool</h2>
        <div>
          <a href="#">Register</a>
          <a href="#">Login</a>
        </div>
      </div>
      <div className="social-blogs">
        <h1>Social Blog</h1>
        <p>Write about your amazing experiences.</p>
      </div>
      <div className="content-home">
        {blogList.blog.blogs.data &&
          blogList.blog.blogs.data.data.blogs.map((item) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="holder.js/100px180"
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.content}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
