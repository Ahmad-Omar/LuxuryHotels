import React from "react";
import "./style.css";
import { ReactComponent as BookNow } from "./../../assets/icons/booknow.svg";

function Button() {
  return (
    <button className="book_now">
      <BookNow />
      Book now
    </button>
  );
}

export default Button;
