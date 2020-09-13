import React from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://i.imgur.com/23yg1IZ.jpg" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          type="text"
          placeholder="Enter Image URL"
          className="tweetbox__imageInput"
        />
        <Button className="tweetbox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox;
