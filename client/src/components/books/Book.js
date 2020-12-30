import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  return (
    <div className="book">
      <Link to={`/book/${props.id}`} className="book__link">
        <img className="book__link--img" src={props.src} alt=""></img>
      </Link>
      <div className="book__content">
        <div className="book__content--name">{props.title}</div>
        <div className="book__content--price">{props.price.toFixed(3)} đ</div>
        <div className="book__content--old-price">
          {props.old_price.toFixed(3)} đ
        </div>
        {props.hideButton ? null : (
          <button className="book__content--button">Add to cart</button>
        )}
      </div>
    </div>
  );
};

export default Book;