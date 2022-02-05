import { Add,PlayArrow, ThumbDownAltOutlined,ThumbUpAltOutlined,} from "@material-ui/icons";
import { useState } from "react";
import React from "react";
import "./listitem.scss";

export default function Listitem({index}) {

  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  
  return (
    <div
      className="listItem"
      style={{left: isHovered && index * 225 -50 +index * 2.5}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    
      <img
        src="https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*850*230_8_muochl_mvg%5Bzig%5B30490%5Bux4w0z237y1zw6w4591557910vw4vv06v5x30490.jpg"
        alt=""
      />
 {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
            Former mobster Henry Hill recounts his colorful yet violent rise and fall in a New York crime family -- a high-rolling dream turned paranoid nightmare. 
            This Martin Scorsese classic earned five Oscar nods and a win for Joe Pesci as Best Supporting Actor.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}