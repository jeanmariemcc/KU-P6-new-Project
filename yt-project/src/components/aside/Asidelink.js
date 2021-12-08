import { Link } from "react-router-dom";
import "./aside.css";

export default function Asidelink({ post }) {
	// console.log(post);
	//property of post is one article from the map function in Posts.js
	return (
		<li key={post._id} className="asideListItem">
			<div className="asideLink">
				<span className="asideTitle">
					<Link to={`/post/${post._id}`} className="link">
						{post.title}
					</Link>
				</span>
				<hr />
			</div>
		</li>
	);
}
