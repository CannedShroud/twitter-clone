import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span>
                <VerifiedUser className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}
            </p>
          </div>
        </div>
        <img
          src={image}
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineOutlined fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
