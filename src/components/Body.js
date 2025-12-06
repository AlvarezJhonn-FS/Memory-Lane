import React from "react";
import "../styles/Body.scss";
import { Link } from "gatsby";

const Body = () => {
  return (
    <div className="body">
      <main>
        <h2>Recent Posts</h2>

        <div className="posts-list">

          <article className="post-card">
            <h3>
              <Link to="/posts/post1">Building a Tiny React-Like UI</Link>
            </h3>
            <p className="meta">Dec 1, 2025 • JavaScript</p>
            <p>A short walkthrough of implementing a minimal virtual DOM.</p>
            <Link className="read" to="/posts/post1">Read More →</Link>
          </article>

          <article className="post-card">
            <h3>
              <Link to="/posts/post2">Why Tailwind Makes Prototyping Fast</Link>
            </h3>
            <p className="meta">Nov 28, 2025 • CSS</p>
            <p>Thoughts on using utility-first CSS for fast UI building.</p>
            <Link className="read" to="/posts/post2">Read More →</Link>
          </article>

          <article className="post-card">
            <h3>
              <Link to="/posts/post3">Markdown → Static Site</Link>
            </h3>
            <p className="meta">Nov 30, 2025 • Tools</p>
            <p>My workflow for turning markdown content into HTML pages.</p>
            <Link className="read" to="/posts/post3">Read More →</Link>
          </article>

        </div>
      </main>
      <footer><p>Memory Lane • Jhonn Alvarez</p></footer>
    </div>
  );
};

export default Body;
