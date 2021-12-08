import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
	// console.log(post);
	//property of post is one article from the map function in Posts.js
	return (
		<div className="post">
			<img className="postImg" src={post.imageURL} alt="atlas" />
			<div className="postInfo">
				<span className="postTitle">
					<Link to={`/post/${post._id}`} className="link">
						{post.title}
					</Link>
				</span>
				<hr />
				<span className="postDate">
					Created on: {new Date(post.createdAt).toDateString()}
				</span>
			</div>
			<p className="postDesc">{post.description}</p>
		</div>
	);
}
