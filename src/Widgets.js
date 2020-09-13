import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <TwitterTweetEmbed tweetId={"1304409372311855105"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="mrwhosetheboss"
          options={{ height: 400 }}
          className="widgets__twitterTimelineEmbed"
        />
        <TwitterShareButton
          url={"https://instagram.com/cannedshroud/"}
          options={{
            text: "Twitter with React JS! Follow =>",
            via: "synchyper",
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
