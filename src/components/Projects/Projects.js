import { useState, useEffect } from "react";
import './Projects.css'
import PostItem from "./PostItem";

export default function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("http://wordpress.portfolio.fastmultimedia.dk/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }
        getData();
    }, []);
    return (
        <section className="page" id="projects-header">
            <h1>Projects</h1>
            <section className="grid-container">
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
            </section>
        </section>
    );
}
