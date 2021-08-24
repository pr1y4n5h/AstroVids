import React from "react";
import { Link } from "react-router-dom";
import { thumbnail } from "../../utils/thumbnail";
import "./Cards.style.css";
import { useLikesContext } from "../../Contexts/LikesContext";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { removeLikes } from "../../api/Likes/removeLikes";
import { useAuth } from "../../Contexts/AuthContext";

export function Likes({ likesData }) {
  const { _id: videoID, name, category, credits } = likesData;
  const { dispatchLikes } = useLikesContext();
  const { token } = useAuth();

  return (
    <>
      <div className="videos">
        <img src={`${thumbnail(videoID)}`} alt={name} />
        <span
          className="delete-icon"
          onClick={() => removeLikes(videoID, dispatchLikes, token)}
        >
          <DeleteIcon style={{ color: "#ff0000" }} />
        </span>
        <div className="videos-title">
          <p> {name} </p>
        </div>
        <div className="videos-overview">
          <h3> Credits : {credits} </h3>
          <p>
            <em> Genre : {category} </em>
          </p>
          <div className="play-btn-div">
            <Link to={`/${videoID}`} className="play-btn">
              Play now <PlayCircleFilledWhiteIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
