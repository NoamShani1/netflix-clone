import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React from "react";
import "./listitem.scss";

export default function Listitem() {
  return (
    <div className="listItem">
      <img
        src="https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*850*230_8_muochl_mvg%5Bzig%5B30490%5Bux4w0z237y1zw6w4591557910vw4vv06v5x30490.jpg"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="itemInfoTop">
          <span> 1 hours 14 mins</span>
          <span className="limit"> 16+ </span>
          <span>1990</span>
        </div>
        <div className="description">
        Former mobster Henry Hill recounts his colorful yet violent rise and fall in a New York crime family -- a high-rolling dream turned paranoid nightmare. 
        This Martin Scorsese classic earned five Oscar nods and a win for Joe Pesci as Best Supporting Actor.
        </div>
        <div className="genre">
          Action
        </div>
      </div>
    </div>
  );
}
