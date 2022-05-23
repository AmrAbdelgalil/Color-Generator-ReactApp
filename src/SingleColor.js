import React, { useState, useEffect } from "react";
// import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hex }) => {
  const bgColor = rgb.join(",");

  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setAlert(false), 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      onClick={handleClick}
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgColor})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      <p className="alert">{alert && "copied to clipboard"}</p>
    </article>
  );
};

export default SingleColor;
