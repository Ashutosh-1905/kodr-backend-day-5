import React, { useEffect, useState } from 'react'
import "../theme.css";
import "../App.css";
import "./Posts.css";
import axios from "axios";
const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
          .get("https://kodr-backend-day-5.onrender.com/api/posts")
          .then((response) => {
            console.log(response.data);
            setPosts(response.data.posts);
          });
    }, [])
  return (
    <main className="posts-root" aria-labelledby="postsHeading">
      <div className="posts-header">
        <h1 id="postsHeading" className="title posts-title">
          Posts
        </h1>
        <p className="subtitle posts-subtitle">
          A minimal gallery of recent moments.
        </p>
      </div>
      {posts.length === 0 && (
        <p className="empty">No posts yet. Create one from the home page.</p>
      )}

      <ul className="posts-grid" role="list">
        {posts.map((p) => (
          <li key={p._id} className="post-card">
            <figure className="post-media">
              <img
                src={p.url}
                alt={p.caption}
                loading="lazy"
                className="post-img"
                onError={(e) => {
                  const el = e.currentTarget;
                  if (el.dataset.fallback) return;
                  el.dataset.fallback = "1";
                  el.classList.add("is-fallback");
                  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='none'><rect width='400' height='300' rx='8' fill='%23f5f7fa'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='16' fill='%239aa2b1'>Image unavailable</text></svg>`;
                  el.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;
                }}
              />
              <figcaption className="post-caption">{p.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Posts