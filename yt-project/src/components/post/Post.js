import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
	console.log(post);
	//property of article is one article from the map function in Posts.js
	return (
		<div className="post">
			<img className="postImg" src={post.imageURL} alt="atlas" />
			<div className="postInfo">
				<span className="postTitle">
					{/* <Link to="/post/abc" className="link"> */}
					{post.title}
					{/* </Link> */}
				</span>
				<hr />
				<span className="postDate">Created on: {post.dateCreated}</span>
			</div>
			<p className="postDesc">{post.description}</p>
		</div>
	);
}
