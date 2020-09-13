import React, { useState } from "react";
import "./Tweetbox.css";
import db from "./firebase";
import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      displayName: "Rafe Quazi",
      username: "cleverquazi",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://i.imgur.com/23yg1IZ.jpg",
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://i.imgur.com/23yg1IZ.jpg" />
          <input
            type="text"
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(event) => setTweetMessage(event.target.value)}
          />
        </div>
        <input
          onChange={(event) => setTweetImage(event.target.value)}
          type="text"
          placeholder="Enter Image URL"
          className="tweetbox__imageInput"
          value={tweetImage}
        />
        <Button
          className="tweetbox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
