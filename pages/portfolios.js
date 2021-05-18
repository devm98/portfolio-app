import React from "react";
import Link from "next/link";
import axios from "axios";

function Portfolios({ posts }) {
  return (
    <div>
      <h1>Hello Man !!!</h1>
      <ul>
        {posts.map((item) => (
          <Link key={item.id} href={`/portfolio/${item.id}`}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

Portfolios.getInitialProps = async () => {
  try {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return {
      posts: posts.data.splice(0, 10),
    };
  } catch (error) {
    console.log("error", error);
  }
  return {};
};

export default Portfolios;
