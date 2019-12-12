import React from "react";
import { Link } from "react-router-dom";

export default function AnimatedButton({ title, to, width }) {
  return (
    <Link style={{ width: width }} className="book-now-btn" to={to}>
      {title}
    </Link>
  );
}
