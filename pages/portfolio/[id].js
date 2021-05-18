import React from "react";
import { withRouter } from "next/router";
import axios from "axios";

function Portfolio({ post }) {
  console.log("post", post);
  return (
    <div>
      <h1>POrtfolio {post.id}</h1>
      <h3>{post.body}</h3>
      <h4>{post.title}</h4>
    </div>
  );
}

Portfolio.getInitialProps = async ({ query }) => {
  try {
    const post = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    return {
      post: post.data,
    };
  } catch (error) {
    console.log("error", error);
  }
  return {};
};

export default withRouter(Portfolio);
