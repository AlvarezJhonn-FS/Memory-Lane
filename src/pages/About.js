import React from "react";
import Header from "../components/Header"
import { Link } from "gatsby";

const About = () => {
    return (
        <div className="about">
            <Header/>
                <main class="post-page">
  <h2>About This Site</h2>
  <p>This site was built for the Memory Lane assignment.</p>
  <ul>
    <li>Pure HTML & CSS</li>
    <li>Multiple posts</li>
    <li>Simple navigation</li>
  </ul>
  <nav class="post-nav"><Link to="/">← Back</Link></nav>
</main>
        </div>
    )
}

export default About;