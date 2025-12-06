import React from "react";
import Header from "../../components/Header";
import { Link } from "gatsby";

const Post4 = () => {
    return (
        <div className="post4">
           <Header/>
<main class="post-page">
  <h2>Markdown → Static Site: My Workflow</h2>
  <p className="meta">Nov 15, 2025 • Tools</p>
  <p>I keep content in markdown and convert it into HTML during deployment.</p>
  <ul><li>Clean separation</li><li>Easy versioning</li><li>Simple deployment</li></ul>
  <nav className="post-nav">
   <a><Link to="/posts/post3">← Back</Link></a>
  </nav>
</main>
<footer><p>Memory Lane • Jhonn Alvarez</p></footer>
        </div>
    )
}

export default Post4;