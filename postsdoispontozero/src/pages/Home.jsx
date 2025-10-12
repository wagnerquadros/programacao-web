import React from "react";
import { useNavigate, Link } from "react-router-dom";
import PostList from "../components/PostList.jsx";

export default function Home({ posts }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <h1>Listagem de Posts</h1>
        <Link className="btn btn-primary" to="/post/new">
          Incluir Post
        </Link>
      </header>

      <PostList posts={posts} onOpen={(id) => navigate(`/post/${id}`)} />
    </div>
  );
}
