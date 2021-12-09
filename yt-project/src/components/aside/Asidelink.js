import { Link } from "react-router-dom";
import "./aside.css";

export default function Asidelink({ post }) {
	// console.log(post);
	//property of post is one article from the map function in Posts.js
	return (
		<li key={post._id} className="asideListItem">
			<div className="asideLinks">
				{/* <span className="asideTitle"> */}

				<span>
					<Link to={`/post/${post._id}`}>{post.title}</Link>
				</span>
				<hr />
			</div>
		</li>
	);
}
