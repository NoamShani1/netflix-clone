import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./featured.scss";

export default function featured({type}) {
  return (
    <div className="featured">
    {type && (
      <div className="category">
      <span>{type === "movie" ? "Movies" : "Series"}</span>
      <select name="genre" id="genre">
        <option>Genre</option>
        <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
      </select>
      </div>
    )}
      <img
        src="http://www.skarbakka.com/wp-content/uploads/2019/09/Interstate-%C2%A9-2003.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="http://www.skarbakka.com/wp-content/uploads/2019/09/Clint.jpg"
          alt=""
        />

        <span className="desc">
          This long-term project is in response to this delicate state. The
          exploration resides within the sublime metaphorical space where
          balance has been disrupted and the definitive point-of-no-return has
          been met. It asks the questions of what it means to resist the
          struggle, to simply let go. What are the consequences of holding on?
        </span>

        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

