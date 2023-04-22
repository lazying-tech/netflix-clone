import "./list.scss";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ListItem from "../listitem/ListItem";
import { useRef, useState } from "react";
export const List = (props) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  console.log(props.list);
  const handlerClickArrow = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    // console.log(distance);
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSlideNumber(slideNumber - 1);
    }
    if (direction === "right" && slideNumber < 2) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlideNumber(slideNumber + 1);
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{props.list.title}</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          className="sliderArrow left"
          onClick={handlerClickArrow.bind(null, "left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {props.list.content.map((item, i) => {
            return <ListItem key={item} index={i} item={item} />;
          })}
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          onClick={handlerClickArrow.bind(null, "right")}
        />
      </div>
    </div>
  );
};
