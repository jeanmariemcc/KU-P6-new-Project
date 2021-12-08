import "./singlePost.css";

import { useLocation } from "react-router";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import axios from "axios";

function SinglePost() {
	const admin = "true";
	const location = useLocation();
	console.log(location);
	// this hook - useLocation - will pass the article id in pathname
	const path = location.pathname.split("/")[2];

	const [post, setPost] = useState({}); // useState hook setup with empty object
	// useEffect - whenever this path changes, useEffect will launch
	useEffect(() => {
		// getPost is an internal function to useEffect because I cannot call asynch (axios) directly
		const getPost = async () => {
			const res = await axios.get("/articles/" + path);
			setPost(res.data); //setPost declared above; hook useState  - post obtains data object
			//   setTitle(res.data.title);
			//   setDesc(res.data.desc);
		};
		getPost();
	}, [path]);

	const handleDelete = async () => {
		try {
			await axios.delete("/articles/" + path);
			window.location.replace("/");
		} catch (err) {
			console.log("could not delete the blog post");
			console.log(err);
		}
	};

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					className="singlePostImg"
					src={post.imageURL}
					alt="articleimage"
				/>
				<h1 className="singlePostTitle">{post.title}</h1>
				<div className="singlePostInfo">
					<span>
						Created on: {new Date(post.createdAt).toDateString()}
					</span>
					{/* Need logic to display only if admin */}
					{admin === "true" && (
						<div className="singlePostEdit">
							<i className="singlePostIcon far fa-edit"></i>
							<i
								className="singlePostIcon far fa-trash-alt"
								onClick={handleDelete}
							></i>
						</div>
					)}

					{/* end of need logic */}
				</div>
				<p className="singlePostDesc">{post.description}</p>
			</div>
		</div>
	);
}

export default SinglePost;
