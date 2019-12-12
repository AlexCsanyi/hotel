import React from "react";
import { Link } from "react-router-dom";

export default function AnimatedButton({ title, to }) {
  return (
    <Link className="book-now-btn" to={to}>
      {title}
    </Link>
  );
}
