import "./singlePost.css";

import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";

import axios from "axios";

function SinglePost() {
	const location = useLocation();
	// this hook - useLocation - will pass the article id in pathname
	const path = location.pathname.split("/")[2];

	const [post, setPost] = useState({}); // useState hook setup with empty object
	// useEffect - whenever this path changes, useEffect will launch
	useEffect(() => {
		// getPost is an internal function to useEffect because I cannot call asynch (axios) directly
		const getPost = async () => {
			const res = await axios.get("/articles/" + path);
			setPost(res.data);
			//   setTitle(res.data.title);
			//   setDesc(res.data.desc);
		};
		getPost();
	}, [path]);

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img className="singlePostImg" src={post.imageURL} alt="" />
				<h1 className="singlePostTitle">{post.title}</h1>
				<div className="singlePostInfo">
					<span>
						Created on: {new Date(post.createdAt).toDateString()}
					</span>
					{/* Need logic to display only if admin */}
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
					{/* end of need logic */}
				</div>
				<p className="singlePostDesc">{post.description}</p>
			</div>
		</div>
	);
}

export default SinglePost;
