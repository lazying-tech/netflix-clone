import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";
const Watch = (props) => {
  const location = useLocation();
  console.log(location);
  const movie = location.state.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
      </Link>
      <video clasName="video" autoPlay progress controls src={movie.video} />
    </div>
  );
};

export default Watch;
