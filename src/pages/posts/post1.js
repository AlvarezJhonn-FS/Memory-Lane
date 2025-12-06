import React from "react";
import Header from "../../components/Header";
import { Link } from "gatsby";


const Post1 = () => {
    return(
        <div className="post1">
                <Header/>
                <main class="post-page">
  <h2>Building a Tiny React-Like UI (in 300 lines)</h2>
  <p className="meta">Dec 1, 2025 • JavaScript</p>
  <p>I implemented a small UI library to understand virtual DOM concepts.</p>
  <ul><li>Virtual DOM</li><li>Diffing & patching</li><li>Functional components</li></ul>
  <pre className="code">
  {`const h = (tag, props, ...children) => ({ tag, props, children })`}
</pre>


  <nav className="post-nav">
    <a href="/">← Back</a>
    <a><Link to="/posts/post2">Next →</Link></a>
    
  </nav>
</main>
<footer><p>Memory Lane • Jhonn Alvarez</p></footer>
        </div>
    )
}

export default Post1;