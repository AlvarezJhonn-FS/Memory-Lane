import React from "react";
import Header from "../../components/Header";
import { Link } from "gatsby";

const Post2 = () => {
    return (
        <div className="post2">
           <Header/>
           <main class="post-page">
  <h2>Why Tailwind Makes Prototyping Fast</h2>
  <p className="meta">Nov 28, 2025 • CSS</p>
  <p>Tailwind speeds up UI development with utility classes.</p>
  <ol><li>Fast iteration</li><li>Reusable components</li><li>Team consistency</li></ol>
  <nav className="post-nav">
   <a><Link to="/posts/post1">← Back</Link></a>
        <a><Link to="/posts/post3">Next →</Link></a>
  </nav>
</main>
<footer><p>Memory Lane • Jhonn Alvarez</p></footer>
        </div>
    )
}

export default Post2;