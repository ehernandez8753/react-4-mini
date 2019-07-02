import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home.js";
import TopicList from "./Components/TopicList/TopicList.js";
import Post from "./Components/Post/Post.js";

export default(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={TopicList} />
        <Route path="/post/:id" component={Post} />
    </Switch>
);
