import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { BlogActions } from "../redux/actions/blog.action";

const PaginationBar = ({ currentPage, totalPage }) => {
  let dispatch = useDispatch();

  const handleClick = (page) => {
    dispatch(BlogActions.getBlog(parseInt(page)));
  };

  const handleClickOnNext = () => {
    if (currentPage < totalPage) {
      dispatch(BlogActions.getBlog(currentPage + 1));
    }
  };

  const handleClickOnPrev = () => {
    if (currentPage > 1) {
      dispatch(BlogActions.getBlog(currentPage - 1));
    }
  };

  return (
    <Pagination>
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={handleClickOnPrev}
      />
      <Pagination.Item
        active={currentPage === 1}
        onClick={() => handleClick(1)}
      >
        {1}
      </Pagination.Item>

      {currentPage - 2 > 1 && <Pagination.Ellipsis />}

      {currentPage - 1 > 1 && (
        <Pagination.Item
          active={currentPage === currentPage - 1}
          onClick={() => handleClick(currentPage - 1)}
        >
          {currentPage - 1}
        </Pagination.Item>
      )}
      {currentPage > 1 && currentPage < totalPage && (
        <Pagination.Item active>{currentPage}</Pagination.Item>
      )}
      {currentPage + 1 < totalPage && (
        <Pagination.Item
          active={currentPage === currentPage + 1}
          onClick={() => handleClick(currentPage + 1)}
        >
          {currentPage + 1}
        </Pagination.Item>
      )}

      {totalPage > currentPage + 2 && <Pagination.Ellipsis />}

      {totalPage > 1 && (
        <Pagination.Item
          active={currentPage === totalPage}
          onClick={() => handleClick(totalPage)}
        >
          {totalPage}
        </Pagination.Item>
      )}
      <Pagination.Next
        disabled={currentPage === totalPage}
        onClick={handleClickOnNext}
      />
    </Pagination>
  );
};

export default PaginationBar;
