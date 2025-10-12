import React from "react";
import ListaPosts from "../components/ListaPosts.jsx";

export default function Index({ posts, onClickPost, onAddPost }) {
  return (
    <div className="container">
      <header className="header">
        <h1>Listagem de Posts</h1>
        <button className="btn btn-primary" onClick={onAddPost}>
          Incluir Post
        </button>
      </header>
      <ListaPosts posts={posts} onClickPost={onClickPost} />
    </div>
  );
}
